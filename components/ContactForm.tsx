
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-32 max-w-4xl mx-auto" id="contact">
      <div className="bg-gray-900 border border-white/5 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400/10 blur-[100px] pointer-events-none"></div>
        
        {!submitted ? (
          <>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Let's build together</h2>
              <p className="text-gray-400">Have questions? We're here to help you get the most out of Alcove.</p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Name</label>
                <input 
                  required
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 ring-primary-400 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-300">Email</label>
                <input 
                  required
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 ring-primary-400 outline-none transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-gray-300">Message</label>
                <textarea 
                  required
                  rows={4} 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 ring-primary-400 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-4">
                <button 
                  type="submit" 
                  className="w-full bg-primary-400 text-white font-bold py-5 rounded-xl hover:bg-primary-300 transition-colors text-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <div className="w-20 h-20 bg-green-400/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold mb-4">Message Sent!</h2>
            <p className="text-gray-400 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-primary-400 font-bold hover:underline"
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
