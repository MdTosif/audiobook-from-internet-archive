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
      </main>
          padding-right: 1.5rem;
        }
  
        section {
          padding-top: 4rem;
          padding-bottom: 4rem;
        }
  
        /* Header and Navigation */
        header {
          position: sticky;
          top: 0;
          z-index: 50;
          background-color: var(--bg-dark);
          background-color: rgba(10, 10, 10, 0.9);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          padding: 1rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
  
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo-icon {
          height: 2rem;
          width: 2rem;
          color: var(--accent-color);
        }
        .logo-text {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-white);
        }
  
        .nav-links {
          display: none;
        }
        @media (min-width: 768px) {
          .nav-links {
            display: flex;
            gap: 1.5rem;
          }
        }
        .nav-links a {
          color: var(--text-light);
          text-decoration: none;
          transition: color 0.3s;
        }
        .nav-links a:hover {
          color: var(--accent-color);
        }
  
        .sign-in-btn {
          background-color: var(--accent-color);
          color: var(--text-white);
          font-weight: 500;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          transition: transform 0.3s, background-color 0.3s;
          transform: scale(1);
          border: none;
          cursor: pointer;
        }
        .sign-in-btn:hover {
          transform: scale(1.05);
          background-color: var(--accent-hover);
        }
  
        /* Hero Section */
        .hero-bg {
          background-image: linear-gradient(to right, var(--bg-light), var(--bg-medium));
          text-align: center;
          padding: 6rem 1.5rem;
          overflow: hidden;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 960px;
          margin-left: auto;
          margin-right: auto;
        }
        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          line-height: 1.25;
          color: var(--text-white);
          margin-bottom: 1rem;
        }
        .hero-subtitle {
          font-size: 1.125rem;
          color: var(--text-light);
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2rem;
        }
  
        .cta-btn {
          background-color: var(--accent-color);
          color: var(--text-white);
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transition: all 0.3s;
          transform: scale(1);
          border: none;
          cursor: pointer;
        }
        .cta-btn:hover {
          transform: scale(1.1);
          background-color: var(--accent-hover);
        }
  
        /* Featured Section */
        .featured-section {
          background-color: var(--bg-medium);
        }
        .section-title {
          font-size: 2.25rem;
          font-weight: 700;
          text-align: center;
          color: var(--text-white);
          margin-bottom: 3rem;
        }
        .grid-container {
          display: grid;
          grid-template-columns: repeat(1, 1fr);
          gap: 2rem;
        }
        @media (min-width: 640px) {
          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .grid-container {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (min-width: 1280px) {
          .grid-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        .card {
          background-color: var(--bg-light);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
        }
        .card img {
          width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin-bottom: 1rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-white);
          margin-bottom: 0.25rem;
        }
        .card-author {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-bottom: 1rem;
        }
        .card-btn {
          width: 100%;
          background-color: var(--accent-color);
          color: var(--text-white);
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          transition: background-color 0.3s;
          border: none;
          cursor: pointer;
        }
        .card-btn:hover {
          background-color: var(--accent-hover);
        }
  
        /* How It Works Section */
        .how-it-works-section {
          background-color: var(--bg-dark);
        }
        .steps-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 3rem;
        }
        @media (min-width: 768px) {
          .steps-container {
            flex-direction: row;
            gap: 4rem;
          }
        }
        .step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          max-width: 20rem;
        }
        .step-icon-bg {
          background-color: var(--accent-color);
          color: var(--text-white);
          padding: 1.25rem;
          border-radius: 9999px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          margin-bottom: 1rem;
        }
        .step-icon {
          height: 2.5rem;
          width: 2.5rem;
        }
        .step-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-white);
          margin-bottom: 0.5rem;
        }
        .step-description {
          color: #9ca3af;
        }
        .arrow {
          display: none;
        }
        @media (min-width: 768px) {
          .arrow {
            display: block;
            height: 3rem;
            width: 3rem;
            color: #4b5563;
          }
        }
        
        /* CTA Section */
        .cta-section {
          background-color: var(--accent-color);
          text-align: center;
          padding: 4rem 1.5rem;
        }
        .cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: var(--text-white);
          margin-bottom: 1rem;
        }
        .cta-subtitle {
          font-size: 1.125rem;
          color: #e0e7ff;
          max-width: 48rem;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 2rem;
        }
        .cta-btn-light {
          background-color: var(--text-white);
          color: var(--accent-color);
          font-weight: 600;
          padding: 0.75rem 2rem;
          border-radius: 9999px;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s;
          border: none;
          cursor: pointer;
        }
        .cta-btn-light:hover {
          transform: scale(1.05);
        }
  
        /* Footer */
        footer {
          background-color: var(--bg-dark);
          color: #6b7280;
          text-align: center;
          padding: 3rem 1.5rem;
        }
        footer .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        @media (min-width: 768px) {
          footer .container {
            flex-direction: row;
          }
        }
        .footer-links {
          display: flex;
          gap: 1.5rem;
          margin-top: 1rem;
        }
        @media (min-width: 768px) {
          .footer-links {
            margin-top: 0;
          }
        }
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover {
          color: var(--accent-color);
        }
  
        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.75);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 1rem;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s, visibility 0.3s;
        }
        .modal-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        .modal-content {
          background-color: var(--bg-light);
          padding: 2rem;
          border-radius: 0.75rem;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          text-align: center;
          max-width: 28rem;
          width: 100%;
          color: var(--text-white);
          transform: translateY(-20px);
          transition: transform 0.3s;
        }
        .modal-overlay.open .modal-content {
          transform: translateY(0);
        }
        .modal-close-btn {
          background-color: var(--accent-color);
          color: var(--text-white);
          font-weight: 500;
          padding: 0.5rem 1.5rem;
          border-radius: 9999px;
          transition: background-color 0.3s;
          border: none;
          cursor: pointer;
        }
        .modal-close-btn:hover {
          background-color: var(--accent-hover);
        }
      </style>
  </head>
  <body>
  
      <!-- Header -->
      <header>
          <div class="logo-container">
              <svg xmlns="http://www.w3.org/2000/svg" class="logo-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14L9 19zm0 0c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm2 2a2 2 0 100-4 2 2 0 000 4zm7-2a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
              <span class="logo-text">Hear & Read</span>
          </div>
          <nav class="nav-links">
              <a href="#featured">Featured</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#">Pricing</a>
              <a href="#">Contact</a>
          </nav>
          <button class="sign-in-btn">
              Sign In
          </button>
      </header>
  
      <!-- Main content -->
      <main>
          <!-- Hero Section -->
          <section class="hero-bg">
              <div class="hero-content">
                  <h1 class="hero-title">
                      Listen and Read, All at Once
                  </h1>
                  <p class="hero-subtitle">
                      Dive into captivating stories with our immersive platform. Follow along with real-time transcriptions for an unparalleled reading and listening experience.
                  </p>
                  <button className="cta-btn" onClick={showModal}>
                      Start Your Free Trial
                  </button>
              </div>
          </section>
  
          <!-- Featured Audiobooks Section -->
          <section id="featured" class="featured-section">
              <div class="container">
                  <h2 class="section-title">Featured Audiobooks</h2>
                  <div class="grid-container">
                      <!-- Audiobook Card 1 -->
                      <div class="card">
                          <img src="https://placehold.co/400x400/1e293b/a5b4fc?text=The+Lost+City+of+Aethelgard" alt="Book Cover 1" class="w-full h-auto rounded-xl mb-4 shadow-lg">
                          <h3 class="card-title">The Lost City of Aethelgard</h3>
                          <p class="card-author">by Eira Corin</p>
                          <button className="card-btn" onClick={showModal}>
                              Listen Now
                          </button>
                      </div>
                      <!-- Audiobook Card 2 -->
                      <div class="card">
                          <img src="https://placehold.co/400x400/1e293b/a5b4fc?text=Chronicles+of+the+Shadow+Realm" alt="Book Cover 2" class="w-full h-auto rounded-xl mb-4 shadow-lg">
                          <h3 class="card-title">Chronicles of the Shadow Realm</h3>
                          <p class="card-author">by Liam Thorne</p>
                          <button className="card-btn" onClick={showModal}>
                              Listen Now
                          </button>
                      </div>
                      <!-- Audiobook Card 3 -->
                      <div class="card">
                          <img src="https://placehold.co/400x400/1e293b/a5b4fc?text=Whispers+on+the+Wind" alt="Book Cover 3" class="w-full h-auto rounded-xl mb-4 shadow-lg">
                          <h3 class="card-title">Whispers on the Wind</h3>
                          <p class="card-author">by Kaelen Fane</p>
                          <button className="card-btn" onClick={showModal}>
                              Listen Now
                          </button>
                      </div>
                      <!-- Audiobook Card 4 -->
                      <div class="card">
                          <img src="https://placehold.co/400x400/1e293b/a5b4fc?text=The+Final+Chapter+of+Time" alt="Book Cover 4" class="w-full h-auto rounded-xl mb-4 shadow-lg">
                          <h3 class="card-title">The Final Chapter of Time</h3>
                          <p class="card-author">by Zara Vance</p>
                          <button className="card-btn" onClick={showModal}>
                              Listen Now
                          </button>
                      </div>
                  </div>
              </div>
          </section>
  
          <!-- How It Works Section -->
          <section id="how-it-works" class="how-it-works-section">
              <div class="container">
                  <h2 class="section-title">How It Works</h2>
                  <div class="steps-container">
                      <!-- Step 1 -->
                      <div class="step-card">
                          <div class="step-icon-bg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="step-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v14M9 19c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm2 2a2 2 0 100-4 2 2 0 000 4zm7-2a2 2 0 100-4 2 2 0 000 4z" />
                              </svg>
                          </div>
                          <h3 class="step-title">Listen</h3>
                          <p class="step-description">Choose from a vast library of professionally narrated audiobooks.</p>
                      </div>
                      <!-- Arrow -->
                      <div class="arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                      </div>
                      <!-- Step 2 -->
                      <div class="step-card">
                          <div class="step-icon-bg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="step-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M17 16h.01" />
                              </svg>
                          </div>
                          <h3 class="step-title">Read</h3>
                          <p class="step-description">The transcription scrolls in perfect sync with the narrator's voice.</p>
                      </div>
                      <!-- Arrow -->
                      <div class="arrow">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                      </div>
                      <!-- Step 3 -->
                      <div class="step-card">
                          <div class="step-icon-bg">
                              <svg xmlns="http://www.w3.org/2000/svg" class="step-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.485 9.49 5 8 5c-4 0-5.912 5.73-2.73 10.49.957 2.115 2.158 4.02 3.33 5.86-1.424-3.568-.93-5.632.118-8.239 3.097-7.85 4.342-13.628 9.948-12.274z" />
                              </svg>
                          </div>
                          <h3 class="step-title">Comprehend</h3>
                          <p class="step-description">Enhance your vocabulary and retention by engaging both senses.</p>
                      </div>
                  </div>
              </div>
          </section>
  
          <!-- CTA Section -->
          <section class="cta-section">
              <div class="container">
                  <h2 class="cta-title">Ready to Start Your Journey?</h2>
                  <p class="cta-subtitle">
                      Join thousands of others who are transforming the way they experience books.
                  </p>
                  <button className="cta-btn-light" onClick={showModal}>
                      Join Now
                  </button>
              </div>
          </section>
      </main>
  
      <!-- Footer -->
      <footer>
          <div class="container">
              <div>
                  <span style="font-size: 0.875rem;">&copy; 2024 Hear & Read. All Rights Reserved.</span>
              </div>
              <div class="footer-links">
                  <a href="#">Privacy Policy</a>
                  <a href="#">Terms of Service</a>
                  <a href="#">Sitemap</a>
              </div>
          </div>
      </footer>
  
      <!-- Simple Message Modal -->
      <div id="modal" class="modal-overlay">
          <div class="modal-content">
              <p style="font-size: 1.125rem; font-weight: 600; margin-bottom: 1rem;">Thank you!</p>
              <p style="color: #d1d5db; margin-bottom: 1.5rem;">Your action has been noted. This is a demo of the modal functionality.</p>
              <button className="modal-close-btn" onClick={hideModal}>
                  Close
              </button>
          </div>
      </div>
  
      <!-- JavaScript for modal -->
      <script>
          // Modal functionality
          function showModal() {
              const modal = document.getElementById('modal');
              if (modal) {
                  modal.classList.add('open');
              }
          }
  
          function hideModal() {
              const modal = document.getElementById('modal');
              if (modal) {
                  modal.classList.remove('open');
              }
          }
      </script>
  </body>
  </html>
  
}

      {/* Modal */}
      {isModalOpen() && (
        <div class="modal-overlay" onClick={hideModal}>
          <div class="modal-content" onClick={e => e.stopPropagation()}>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, marginBottom: '1rem' }}>Thank you!</p>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
              Your action has been noted. This is a demo of the modal functionality.
            </p>
            <button class="cta-btn" onClick={hideModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;