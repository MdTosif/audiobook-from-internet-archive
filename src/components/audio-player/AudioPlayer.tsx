import { onCleanup, createSignal, type Component, Show } from 'solid-js';
import WaveSurfer from 'wavesurfer.js';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer: Component<AudioPlayerProps> = (props) => {
  let wavesurfer: WaveSurfer;
  let audioEl: HTMLAudioElement;
  let waveformEl: HTMLDivElement;
  const [isPlaying, setIsPlaying] = createSignal(false);
  const [duration, setDuration] = createSignal('0:00');
  const [isLoaded, setIsLoaded] = createSignal(false);

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
  });

  const handlePlayPause = () => {
    if (wavesurfer) {
      wavesurfer.playPause();
    }
  };

  const handleLoad = () => {
    if (wavesurfer) {
      wavesurfer.load(props.url);
    }
  };

  return (
    <div class="bg-secondary p-4 rounded-lg shadow-lg">
      <audio
        ref={audioRef}
        src={props.url}
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