
import React from 'react';

const QuietSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative py-24">
      {/* App Icon Replica */}
      <div className="mb-12">
        <div className="w-24 h-24 bg-gray-800 rounded-[2rem] flex items-center justify-center relative shadow-2xl overflow-hidden group">
          {/* Glowing Archway Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-700 to-black opacity-50"></div>
          <div className="w-12 h-16 bg-orange-400/90 rounded-t-full relative z-10 shadow-[0_-10px_40px_rgba(251,146,60,0.6)]">
             <div className="absolute inset-0 bg-white/20 blur-sm rounded-t-full"></div>
          </div>
          <div className="absolute bottom-0 w-full h-8 bg-black/40 blur-xl"></div>
        </div>
      </div>

      {/* Typography */}
      <h2 className="text-5xl md:text-7xl font-semibold mb-4 tracking-tight leading-tight">
        A quiet place to <br />
        <span className="font-serif italic font-normal text-6xl md:text-8xl block mt-1">see what's new.</span>
      </h2>

      <p className="max-w-md mx-auto text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
        Alcove is the best way to keep up with your favourite websites, newsletters, and subscriptions, without the noise.
      </p>

      {/* Subscription Form */}
      <div className="w-full max-w-lg mx-auto mb-6">
        <div className="bg-white rounded-full p-2 flex items-center shadow-lg group focus-within:ring-4 ring-primary-400/20 transition-all">
          <input 
            type="email" 
            placeholder="Your email address" 
            className="flex-1 bg-transparent px-6 py-2 text-black outline-none placeholder:text-gray-400 font-medium"
          />
          <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      <p className="text-gray-500 text-sm">
        Sign up for early access. No spam. No jibberjabber.
      </p>

      {/* Subtle bottom curved horizon divider */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square rounded-full border-t border-white/10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none translate-y-3/4"></div>
    </section>
  );
};

export default QuietSection;
