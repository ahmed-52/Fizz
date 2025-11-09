// WeightLossSupport.jsx
import { useEffect, useState } from 'react';
import groupImage from '../public/groupimage.png';

const WeightLossSupport = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center px-6 lg:px-16 overflow-hidden py-20"
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${groupImage})`,
          filter: 'brightness(0.9)',
        }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Light Overlay for color tone */}
      <div className="absolute inset-0 bg-[#fef8e3] opacity-20"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div 
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Heading */}
          <h2 className="text-4xl lg:text-6xl font-black mb-6 text-white text-center">
            How Fizz Supports Your Weight Loss Goals
          </h2>

          {/* Subheading */}
          <p className="text-xl text-white/90 text-center mb-12 max-w-2xl mx-auto">
            No caffeine spikes. No empty promises. Just ingredients that actually work with your body.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="bg-white rounded-full px-6 py-3 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-black font-black text-sm uppercase tracking-wide">GLUTEN-FREE</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-black font-black text-sm uppercase tracking-wide">0 GRAMS SUGAR</span>
            </div>
            <div className="bg-white rounded-full px-6 py-3 border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-black font-black text-sm uppercase tracking-wide">NO ARTIFICIAL FLAVORS</span>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Step 1: Clear Whey Protein */}
            <div className="bg-white rounded-3xl p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
              {/* Icon */}
              <div className="bg-purple-400 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 border-3 border-black">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              
              {/* Step Number */}
              
              {/* Title */}
              <h3 className="text-2xl font-black text-black mb-3">
                Clear Whey Protein
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Supports fullness and helps maintain muscle tone so you feel satisfied longer.
              </p>
            </div>

            {/* Step 2: L-Carnitine */}
            <div className="bg-white rounded-3xl p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
              {/* Icon */}
              <div className="bg-cyan-400 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 border-3 border-black">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93 0 4.08-3.05 7.44-7 7.93v2.02c5.05-.5 9-4.76 9-9.95s-3.95-9.45-9-9.95zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              
              {/* Step Number */}
              
              {/* Title */}
              <h3 className="text-2xl font-black text-black mb-3">
                L-Carnitine
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Helps turn stored fat into clean, usable energy to fuel your day.
              </p>
            </div>

            {/* Step 3: Prebiotic Fiber */}
            <div className="bg-white rounded-3xl p-8 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all">
              {/* Icon */}
              <div className="bg-pink-400 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 border-3 border-black">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-black text-black mb-3">
                Prebiotic Fiber
              </h3>
              
              {/* Description */}
              <p className="text-gray-700 leading-relaxed">
                Keeps your gut balanced and cravings in check for steady progress.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossSupport;