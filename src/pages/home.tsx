import { createSignal } from 'solid-js';
import './home.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = createSignal(false);

  const showModal = () => setIsModalOpen(true);
  const hideModal = () => setIsModalOpen(false);

  return (
    <div class="min-h-screen">
      <header class="sticky top-0 z-50 bg-dark bg-opacity-90 backdrop-blur-md shadow-md p-4">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-2">
            <svg class="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 3.06V1h-2v2.06A10.014 10.014 0 003.06 11H1v2h2.06A10.014 10.014 0 0011 20.94V23h2v-2.06A10.014 10.014 0 0020.94 13H23v-2h-2.06A10.014 10.014 0 0013 3.06zM12 19a7 7 0 110-14 7 7 0 010 14z" />
              <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            </svg>
            <span class="text-2xl font-bold text-white">Audiobooks</span>
          </div>
          
          <nav class="hidden md:flex space-x-6">
            <a href="#" class="text-light hover:text-accent transition-colors">Home</a>
            <a href="#featured" class="text-light hover:text-accent transition-colors">Featured</a>
            <a href="#how-it-works" class="text-light hover:text-accent transition-colors">How It Works</a>
          </nav>
          
          <button class="bg-accent text-white font-medium px-6 py-2 rounded-full hover:bg-accent-hover transition-all">
            Sign In
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section class="hero-bg">
          <div class="hero-content">
            <h1 class="hero-title">Listen and Read, All at Once</h1>
            <p class="hero-subtitle">
              Dive into captivating stories with our immersive platform. Follow along with real-time transcriptions for an unparalleled reading and listening experience.
            </p>
            <button class="cta-btn" onClick={showModal}>
              Start Your Free Trial
            </button>
          </div>
        </section>

        {/* Featured Section */}
        <section id="featured" class="py-16 bg-bg-medium">
          <div class="container">
            <h2 class="text-3xl font-bold text-center text-white mb-12">Featured Audiobooks</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Book cards will go here */}
              <div class="bg-bg-light rounded-xl overflow-hidden shadow-lg p-6 transition-all hover:scale-105 hover:shadow-xl">
                <img 
                  src="https://placehold.co/400x400/1f2937/9ca3af?text=Book+Cover" 
                  alt="Book Cover" 
                  class="w-full h-auto rounded-lg mb-4 shadow-md"
                />
                <h3 class="text-xl font-semibold text-white mb-1">Sample Book Title</h3>
                <p class="text-gray-400 text-sm mb-4">by Author Name</p>
                <button 
                  onClick={showModal}
                  class="w-full bg-accent text-white font-medium py-2 px-4 rounded-full hover:bg-accent-hover transition-colors"
                >
                  Listen Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" class="py-16 bg-bg-dark">
          <div class="container">
            <h2 class="text-3xl font-bold text-center text-white mb-12">How It Works</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="bg-bg-light p-6 rounded-lg">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span class="text-white text-xl font-bold">1</span>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Choose a Book</h3>
                <p class="text-gray-400">Browse our extensive library of audiobooks and pick your next adventure.</p>
              </div>
              <div class="bg-bg-light p-6 rounded-lg">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span class="text-white text-xl font-bold">2</span>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Listen & Read</h3>
                <p class="text-gray-400">Follow along with the highlighted text as you listen to the narration.</p>
              </div>
              <div class="bg-bg-light p-6 rounded-lg">
                <div class="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <span class="text-white text-xl font-bold">3</span>
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">Learn & Enjoy</h3>
                <p class="text-gray-400">Improve your reading skills and enjoy your favorite books in a whole new way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section class="py-16 bg-bg-accent">
          <div class="container text-center">
            <h2 class="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p class="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of readers who are already enjoying our audiobook experience.</p>
            <button onClick={showModal} class="cta-btn">
              Start Your Free Trial
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer class="bg-bg-dark py-8">
        <div class="container">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center space-x-2 mb-4 md:mb-0">
              <svg class="w-8 h-8 text-accent" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span class="text-xl font-bold text-white">Audiobooks</span>
            </div>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" class="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div class="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Audiobooks. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Modal */}
      {isModalOpen() && (
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div class="bg-bg-light rounded-xl p-8 max-w-md w-full relative">
            <button 
              onClick={hideModal} 
              class="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              &times;
            </button>
            <h2 class="text-2xl font-bold text-white mb-6">Start Your Free Trial</h2>
            <form class="space-y-4">
              <div>
                <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  class="w-full px-4 py-2 bg-bg-medium border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent" 
                  placeholder="Enter your email"
                  required 
                />
              </div>
              <div>
                <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Password</label>
                <input 
                  type="password" 
                  id="password" 
                  class="w-full px-4 py-2 bg-bg-medium border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-accent focus:border-transparent" 
                  placeholder="Create a password"
                  required 
                />
              </div>
              <button 
                type="submit" 
                class="w-full bg-accent text-white font-medium py-2 px-4 rounded-lg hover:bg-accent-hover transition-colors mt-4"
              >
                Get Started
              </button>
              <p class="text-sm text-gray-400 text-center mt-4">
                Already have an account?{' '}
                <a href="#" class="text-accent hover:underline">Sign In</a>
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;