import { createResource, For, Show } from 'solid-js';
import AudioPlayer from '../audio-player/AudioPlayer';

interface Track {
  title: string;
  url: string;
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

  const files = data.files.filter((f: any) => f.name.endsWith('_64kb.mp3'));
  const playlist = files.map((f: any) => ({
    title: f.title || f.name,
    url: `https://archive.org/download/${identifier}/${f.name}`,
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
  const [audiobook] = createResource('art_of_war_librivox', fetchAudiobook);

  return (
    <Show when={audiobook()} fallback={<div>Loading...</div>}>
      {(book) => (
        <div>
          <div class="flex flex-col md:flex-row gap-8 mb-8">
            <img src={book().thumbnail} alt={book().title} class="w-full md:w-1/4 rounded-lg shadow-lg" />
            <div class="flex-1">
              <h2 class="text-4xl font-bold mb-2">{book().title}</h2>
              <p class="text-lg text-muted-foreground mb-4">By {book().creator}</p>
              <div class="text-base mb-4" innerHTML={book().description}></div>
              <p class="text-sm text-muted-foreground">
                Genre:{" "}
                <For each={book().genre?.split(';')}>
                  {(genre) => <span class="inline-block bg-muted-foreground text-primary-foreground rounded-full px-2 py-1 text-xs font-semibold mr-2">{genre}</span>}
                </For>
              </p>
            </div>
          </div>

          <div class="space-y-4">
            <For each={book().playlist}>
              {(track) => (
                <div class="bg-secondary p-4 rounded-lg shadow-lg">
                  <h3 class="text-lg font-semibold mb-2">{track.title}</h3>
                  <AudioPlayer url={track.url} />
                </div>
              )}
            </For>
          </div>
        </div>
      )}
    </Show>
  );
};

export default AudioPlaylist;