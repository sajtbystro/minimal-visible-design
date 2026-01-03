
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Will Paterson",
      handle: "@Will_Paterson10",
      content: "Alcove is a game changer for testing and improving your creative assets. Without it, it would be a guessing game!",
      img: "https://picsum.photos/seed/will/100/100"
    },
    {
      name: "Mostafa Hasan",
      handle: "@MostafaVisuals",
      content: "Hands down the best tool I've used for mockups. The peaceful environment really helps with my focus.",
      img: "https://picsum.photos/seed/most/100/100"
    },
    {
      name: "Azan Khan",
      handle: "@TheVariant0",
      content: "Love how well this was thought out. The ability to compare and collaborate is seamless. Great work!",
      img: "https://picsum.photos/seed/azan/100/100"
    }
  ];

  return (
    <section className="py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Trusted by industry leaders</h2>
        <p className="text-gray-400">Join over 10,000 creators using Alcove to build their dreams.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-gray-900 border border-white/5 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-primary-400 text-sm">{t.handle}</p>
                </div>
              </div>
              <p className="text-gray-300 italic">"{t.content}"</p>
            </div>
            <div className="mt-6 flex text-yellow-400">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
               ))}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-primary-400 to-purple-600 p-1">
        <div className="bg-black rounded-[calc(1.5rem-4px)] p-12 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h3 className="text-4xl font-bold mb-6 leading-tight">Seeing is believing. <br /> Check out the transformation.</h3>
            <p className="text-gray-400 text-lg mb-8">Our users report a 40% reduction in production time and a 12% average increase in engagement after switching to our workflow.</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
              Read the Full Report
            </button>
          </div>
          <div className="flex-1 w-full">
            <img src="https://picsum.photos/seed/stats/600/400" alt="Success metrics" className="rounded-xl shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
