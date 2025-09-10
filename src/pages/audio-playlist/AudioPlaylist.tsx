import { useParams } from "@solidjs/router";
import { createResource, For, Show, createSignal, onMount } from "solid-js";
import AudioPlayer from "../../components/audio-player/AudioPlayer";
import CacheWorker from '../../workers/cache-worker?worker';

interface Track {
  title: string;
  url: string;
  track: string;
  length: string;
  size: string;
}

interface Audiobook {
  title: string;
  description: string;
  creator: string;
  genre: string;
  thumbnail: string;
  playlist: Track[];
}

const fetchAudiobook = async (identifier: string): Promise<Audiobook> => {
  const res = await fetch(`https://archive.org/metadata/${identifier}`);
  const data = await res.json();

  const files = data.files.filter((f: any) => f.name.endsWith("_64kb.mp3"));
  const playlist = files.map((f: any) => ({
    title: f.title || f.name,
    url: `https://archive.org/download/${identifier}/${f.name}`,
    track: f.track,
    length: f.length,
    size: f.size,
  }));

  const metadata = data.metadata || {};

  return {
    title: metadata.title,
    description: metadata.description,
    creator: metadata.creator,
    genre: metadata.subject,
    thumbnail: `https://archive.org/download/${identifier}/__ia_thumb.jpg`,
    playlist,
  };
};

const AudioPlaylist = () => {
  const params = useParams();
  const [audiobook] = createResource(() => params.bookId, fetchAudiobook);
  const [cachedTracks, setCachedTracks] = createSignal<Set<string>>(new Set());
  const [downloadingTracks, setDownloadingTracks] = createSignal<Set<string>>(new Set());

  let worker: Worker;

  onMount(() => {
    worker = new CacheWorker();

    worker.postMessage({ type: "cached-urls" });

    worker.onmessage = (event) => {
      const { type, url, urls } = event.data;
      if (type === "cached") {
        setDownloadingTracks((prev) => {
          const newSet = new Set(prev);
          newSet.delete(url);
          return newSet;
        });
        setCachedTracks((prev) => new Set(prev).add(url));
      } else if (type === "already-cached") {
        setDownloadingTracks((prev) => {
          const newSet = new Set(prev);
          newSet.delete(url);
          return newSet;
        });
        setCachedTracks((prev) => new Set(prev).add(url));
      } else if (type === "cached-urls") {
        setCachedTracks(new Set(urls as string[]));
      }
    };
  });

  const downloadTrack = (track: Track) => {
    setDownloadingTracks(prev => new Set(prev).add(track.url));
    worker.postMessage({ type: "cache-track", url: track.url });
  };

  return (
    <div class="container mx-auto px-4 py-8">
      <Show when={audiobook()} fallback={<div>Loading...</div>}>
        {(book) => (
          <div>
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div class="md:col-span-1">
                <img
                  src={book().thumbnail}
                  alt={book().title}
                  class="w-full rounded-lg shadow-lg"
                />
              </div>
              <div class="md:col-span-3">
                <h2 class="text-4xl font-bold mb-2">{book().title}</h2>
                <p class="text-lg text-muted-foreground mb-4">
                  By {book().creator}
                </p>
                <div
                  class="text-base mb-4"
                  innerHTML={book().description}
                ></div>
                <p class="text-sm text-muted-foreground">
                  Genre:{" "}
                  <For each={book().genre?.split(";")}>
                    {(genre) => (
                      <span class="inline-block bg-muted-foreground text-primary-foreground rounded-full px-2 py-1 text-xs font-semibold mr-2">
                        {genre}
                      </span>
                    )}
                  </For>
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <For each={book().playlist}>
                {(track) => (
                  <div class="bg-secondary p-4 rounded-lg shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div class="flex-1 min-w-0">
                      <h3 class="text-lg font-semibold mb-1 truncate">
                        {track.track}. {track.title}
                      </h3>
                      <div class="text-sm text-muted-foreground">
                        <span>{track.length}</span> |{" "}
                        <span>
                          {(Number(track.size) / 1024 / 1024).toFixed(2)} MB
                        </span>
                      </div>
                      <button
                        onClick={() => downloadTrack(track)}
                        disabled={
                          cachedTracks().has(track.url) ||
                          downloadingTracks().has(track.url)
                        }
                        class="btn btn-primary p-3"
                      >
                        {cachedTracks().has(track.url)
                          ? "Cached"
                          : downloadingTracks().has(track.url)
                          ? "Downloading..."
                          : "Download"}
                      </button>
                    </div>
                    <div class="w-full sm:w-1/2 md:w-1/3 flex items-center gap-2">
                      <AudioPlayer url={track.url} />
                    </div>
                  </div>
                )}
              </For>
            </div>
          </div>
        )}
      </Show>
    </div>
  );
};

export default AudioPlaylist;
