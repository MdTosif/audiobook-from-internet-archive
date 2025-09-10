import { createResource, For } from 'solid-js';
import AudioPlayer from '../audio-player/AudioPlayer';

interface Track {
  title: string;
  url: string;
}

const fetchAudiobook = async (identifier: string): Promise<Track[]> => {
  const res = await fetch(`https://archive.org/metadata/${identifier}`);
  const data = await res.json();

  const files = data.files.filter((f: any) => f.name.endsWith('_64kb.mp3'));
  const playlist = files.map((f: any) => ({
    title: f.title || f.name,
    url: `https://archive.org/download/${identifier}/${f.name}`,
  }));

  return playlist;
};

const AudioPlaylist = () => {
  const [playlist] = createResource('art_of_war_librivox', fetchAudiobook);

  return (
    <div>
      <h2 class="text-2xl font-bold mb-4">The Art of War</h2>
      <div class="space-y-4">
        <For each={playlist()} fallback={<div>Loading...</div>}>
          {(track) => (
            <div>
              <h3 class="text-lg font-semibold">{track.title}</h3>
              <AudioPlayer url={track.url} />
            </div>
          )}
        </For>
      </div>
    </div>
  );
};

export default AudioPlaylist;