// ProductBadges.jsx
import { useEffect, useState } from 'react';

const ProductBadges = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const badges = [
    {
      id: 'gluten-free',
      label: 'GLUTEN-FREE',
      icon: (
        <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center relative">
          <span className="text-[7px] font-black absolute">GLUTEN</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-0.5 bg-black transform rotate-45"></div>
          </div>
        </div>
      )
    },
    {
      id: 'zero-sugar',
      label: '0 GRAMS SUGAR',
      icon: (
        <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-black leading-none">0</div>
            <div className="text-[6px] font-black uppercase mt-1">g SUGAR</div>
          </div>
        </div>
      )
    },
    {
      id: 'no-artificial-flavors',
      label: 'NO ARTIFICIAL FLAVORS',
      icon: (
        <div className="w-20 h-20 border-4 border-black rounded-full flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-14 h-14">
            <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="12" r="10" />
          </svg>
        </div>
      )
    }
  ];

  return (
    <section 
      className="relative py-20 px-6 lg:px-16 bg-white overflow-hidden"
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-black rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-black rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 border-4 border-black rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 border-4 border-black rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-5xl lg:text-6xl font-black mb-4">
            <span className="text-[#D92F8A]">Clean</span>{' '}
            <span className="text-cyan-500">Ingredients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Made with the highest quality standards. Every can is crafted with care.
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {badges.map((badge, index) => (
            <div
              key={badge.id}
              className={`transition-all duration-1000 ${
                isVisible 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-12 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms` 
              }}
            >
              <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8 text-center hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 transition-all h-full flex flex-col items-center justify-center">
                {/* Icon */}
                <div className="mb-6 text-black flex items-center justify-center">
                  {badge.icon}
                </div>
                {/* Label */}
                <h3 className="text-xl lg:text-2xl font-black uppercase tracking-wide text-black">
                  {badge.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductBadges;

