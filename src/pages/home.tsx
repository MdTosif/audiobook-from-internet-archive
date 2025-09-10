import { A } from "@solidjs/router";

const Home = () => {
  return (
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-4">Welcome to My Audiobook App</h1>
      <p class="text-lg mb-8">
        Listen to your favorite audiobooks anytime, anywhere.
      </p>
      <A href="audiobook/art_of_war_librivox">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </A>
    </div>
  );
};

export default Home;