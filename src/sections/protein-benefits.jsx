// ProteinBenefits.jsx
import { useEffect, useState } from 'react';
import fizGif from '../public/fiz.gif';
import orange2Image from '../public/orange2.png';

const ProteinBenefits = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative py-20 px-6 lg:px-16 overflow-hidden"
      style={{ fontFamily: 'Recoleta, sans-serif', backgroundColor: '#E23B01' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating bubbles */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-float"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-100px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            />
          ))}
        </div>
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#D92F8A] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400 opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Section - Pour Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative mb-8">
              <img
                src={fizGif}
                alt="Fizz Protein Drink Pouring"
                className="w-full rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>
          
          {/* Right Section - Orange2 Image with Weight Loss Benefits and Protein Card */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative mb-8">
              <img
                src={orange2Image}
                alt="Fizz Protein + Weight Orange Blast"
                className="w-full rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            {/* Weight Loss Benefits Text */}
            <div className="bg-gradient-to-br from-orange-100 to-yellow-50 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8 mb-8">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 text-black">
                <span className="text-cyan-500">Weight Loss</span>{' '}
                <span className="text-[#D92F8A]">Journey</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                  </svg>
                  <p className="text-lg text-gray-800 font-semibold">
                    <span className="text-cyan-500">Zero sugar</span>, all the flavor
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                  <p className="text-lg text-gray-800 font-semibold">
                    Reduce snacking & stay satisfied
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill="#06b6d4"/>
                  </svg>
                  <p className="text-lg text-gray-800 font-semibold">
                    <span className="text-cyan-500">L-Carnitine</span> helps burn fat for energy
                  </p>
                </div>
              </div>
            </div>

            {/* 20g Protein Card */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-8">
              <h3 className="text-4xl lg:text-5xl font-black mb-6 text-black">
                <span className="text-[#D92F8A]">20g Premium Protein</span>
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="#D92F8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6.5 6.5h11v11h-11z"/>
                    <path d="M6.5 12h11"/>
                    <path d="M12 6.5v11"/>
                    <circle cx="9" cy="9" r="1" fill="#D92F8A"/>
                    <circle cx="15" cy="9" r="1" fill="#D92F8A"/>
                    <circle cx="9" cy="15" r="1" fill="#D92F8A"/>
                    <circle cx="15" cy="15" r="1" fill="#D92F8A"/>
                  </svg>
                  <p className="text-lg text-gray-800 font-semibold">
                    Build lean muscle & boost metabolism
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="#D92F8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2" fill="#D92F8A"/>
                  </svg>
                  <p className="text-lg text-gray-800 font-semibold">
                    Stay fuller, longer—crush cravings
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-8 h-8 flex-shrink-0 mt-1" viewBox="0 0 24 24" fill="none" stroke="#D92F8A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#D92F8A"/>
                  </svg>
                  <p className="text-lg text-gray-800 font-semibold">
                    Fuel your active lifestyle all day
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProteinBenefits;