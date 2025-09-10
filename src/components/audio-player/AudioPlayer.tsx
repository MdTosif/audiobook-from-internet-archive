import { onCleanup, createSignal, type Component, Show, createEffect, on } from 'solid-js';
import WaveSurfer from 'wavesurfer.js';

interface AudioPlayerProps {
  url: string;
}

const CACHE_NAME = 'audio-cache';

const AudioPlayer: Component<AudioPlayerProps> = (props) => {
  let wavesurfer: WaveSurfer;
  let audioEl: HTMLAudioElement;
  let waveformEl: HTMLDivElement;
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [duration, setDuration] = createSignal('0:00');
  const [isLoaded, setIsLoaded] = createSignal(false);
  const [audioSrc, setAudioSrc] = createSignal<string>();

  createEffect(on(() => props.url, async (url) => {
    if (url) {
      const cache = await caches.open(CACHE_NAME);
      const response = await cache.match(url);
      if (response) {
        const blob = await response.blob();
        setAudioSrc(URL.createObjectURL(blob));
      } else {
        setAudioSrc(url);
      }
    }
  }));

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const createWaveSurfer = () => {
    if (audioEl && waveformEl) {
      wavesurfer = WaveSurfer.create({
        container: waveformEl,
        waveColor: 'hsl(215 20% 65%)',
        progressColor: 'hsl(243 75% 59%)',
        barWidth: 3,
        barGap: 2,
        height: 100,
        media: audioEl,
      });

      wavesurfer.on('ready', () => {
        setDuration(formatTime(wavesurfer.getDuration()));
        setIsLoaded(true);
      });

      wavesurfer.on('play', () => setIsPlaying(true));
      wavesurfer.on('pause', () => setIsPlaying(false));
    }
  }

  const audioRef = (el: HTMLAudioElement) => {
    audioEl = el;
    createWaveSurfer();
  }

  const waveformRef = (el: HTMLDivElement) => {
    waveformEl = el;
    createWaveSurfer();
  }

  onCleanup(() => {
    if (wavesurfer) {
      wavesurfer.destroy();
    }
    const aSrc = audioSrc()
    if (aSrc && aSrc?.startsWith('blob:') && aSrc !== undefined) {
      URL.revokeObjectURL(aSrc);
    }
  });

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleLoad = () => {
    const aSrc = audioSrc();

    if (wavesurfer && aSrc) {
      wavesurfer.load(aSrc);
    }
  };

  return (
    <div class="bg-secondary p-4 rounded-lg shadow-lg">
      <audio
        ref={audioRef}
        src={audioSrc()}
      />
      <div ref={waveformRef} class="mb-4" />
      <Show
        when={isLoaded()}
        fallback={
          <div class="flex items-center justify-center">
            <button onClick={handleLoad} class="btn btn-primary px-6 py-2 rounded-full">
              Load to Play
            </button>
          </div>
        }
      >
        <div class="flex items-center justify-between">
          <div class="text-sm text-muted-foreground">{duration()}</div>
          <button
            onClick={handlePlayPause}
            class="btn btn-primary px-6 py-2 rounded-full"
          >
            {isPlaying() ? 'Pause' : 'Play'}
          </button>
        </div>
      </Show>
    </div>
  );
};

export default AudioPlayer;