
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="py-24 md:py-32 text-center relative overflow-hidden border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 hover:bg-white/10 transition-colors cursor-pointer group">
          <span className="flex h-2 w-2 rounded-full bg-primary-400"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-300">
            Join the movement
          </span>
          <svg className="w-3 h-3 text-gray-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tighter leading-[1.1]">
          The ultimate creative tool <br />
          <span className="text-primary-400">for everyone.</span>
        </h1>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Design, preview, and iterate with AI-powered insights. Built to help you create phenomenal assets that captivate your audience instantly.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="bg-primary-400 text-white px-10 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform shadow-xl shadow-primary-400/20">
            Start Creating Now
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors">
            View Case Studies
          </button>
        </div>

        {/* Hero Visual Mockup */}
        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-400 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative bg-gray-900 border border-white/10 rounded-2xl overflow-hidden aspect-video shadow-2xl">
             <img src="https://picsum.photos/1280/720?grayscale" alt="Dashboard Preview" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
             
             {/* Float Elements for that techy look */}
             <div className="absolute top-8 left-8 bg-black/80 backdrop-blur px-4 py-3 rounded-xl border border-white/10 animate-bounce transition-all">
                <p className="text-green-400 text-sm font-bold flex items-center gap-2">
                  <span className="block w-2 h-2 rounded-full bg-green-400"></span>
                  98% Click-through boost
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
