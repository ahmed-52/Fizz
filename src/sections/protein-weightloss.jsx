// ProteinWeightLoss.jsx
import { useEffect, useState } from 'react';

const ProteinWeightLoss = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative py-16 px-6 lg:px-16 bg-white overflow-hidden"
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      {/* Animated background bubbles */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-black/10 animate-float"
            style={{
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-100px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Horizontal Metrics Bar - Similar to Hero */}
        <div 
          className={`flex items-center gap-6 py-8 px-8 bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* 20g Protein */}
          <div className="flex-1 text-center">
            <div className="text-4xl lg:text-5xl font-black text-[#D92F8A] mb-2 leading-none">20g</div>
            <div className="text-sm lg:text-base text-black font-black uppercase tracking-wide">PROTEIN</div>
          </div>
          
          <div className="w-px h-20 bg-black"></div>
          
          {/* Weight Loss */}
          <div className="flex-1 text-center">
            <div className="text-3xl lg:text-4xl font-black text-cyan-500 mb-1 leading-none">WEIGHT</div>
            <div className="text-3xl lg:text-4xl font-black text-cyan-500 mb-2 leading-none">LOSS</div>
            <div className="text-xs lg:text-sm text-black font-black uppercase tracking-wide">L-CARNITINE</div>
          </div>
        </div>

        {/* Supporting Text Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Protein Card */}
          <div
            className={`bg-[#D92F8A] rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-black text-white mb-3 uppercase">Premium Protein</h3>
            <p className="text-white/90 text-sm font-bold">
              High-quality protein to fuel your body and support muscle growth throughout the day.
            </p>
          </div>

          {/* Weight Loss Card */}
          <div
            className={`bg-cyan-500 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <h3 className="text-2xl font-black text-white mb-3 uppercase">Weight Management</h3>
            <p className="text-white/90 text-sm font-bold">
              Zero sugar with L-Carnitine to support your transformation journey and maximize results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProteinWeightLoss;

