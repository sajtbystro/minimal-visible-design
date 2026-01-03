
import React from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import QuietSection from './components/QuietSection';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white font-sans selection:bg-primary-400 selection:text-white">
      {/* Background Effects */}
      <div className="stars-container" />
      <div className="luminescence" />
      <div className="horizon-glow" />

      {/* Main Content */}
      <main className="relative z-10">
        {/* First Screen: The "Quiet Place" design */}
        <QuietSection />
        
        {/* Second Screen: The "Ultimate Creative Tool" with Video */}
        <Hero />

        <div className="max-w-6xl mx-auto px-6">
          <ValueProps />
          <Testimonials />
          <ContactForm />
        </div>

        <footer className="py-12 border-t border-white/5 text-center text-sm text-gray-500">
          <p>© 2025 Alcove — A Peaceful Place for Creators.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;
