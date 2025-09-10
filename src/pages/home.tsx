import AudioPlaylist from '../components/audio-playlist/AudioPlaylist';

const Home = () => {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Audiobook App</h1>
      <p class="text-lg mb-8">Listen to your favorite audiobooks anytime, anywhere.</p>
      <AudioPlaylist />
    </div>
  );
};

export default Home;