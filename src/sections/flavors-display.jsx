// FlavorsDisplay.jsx
import { useEffect, useState } from 'react';
import group2Image from '../public/group3.png';

const FlavorsDisplay = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen lg:h-[100vh] flex flex-col lg:flex-row overflow-hidden"
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      {/* Left Side - Text Content */}
      <div className="w-full lg:w-1/2 bg-[#E23B01] flex items-center justify-center px-6 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-20 lg:py-0">
        <div
          className={`max-w-xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8 leading-tight">
            <span className="text-[#ffffff]">Every Flavor</span>{' '}
            <span className="text-[#ffffff]">You Crave</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white mb-4 sm:mb-6 leading-relaxed">
            From zesty Lemon Blast to sweet Strawberry, refreshing Orange to bold Blue Raspberry — we've crafted a complete collection of flavors that deliver on taste and nutrition.
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed">
            Each can is packed with <strong>20g of premium protein</strong> and <strong>zero sugar</strong>, so you can enjoy your favorite flavor while staying on track with your goals.
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center min-h-[50vh] lg:min-h-0">
        <div
          className={`w-full h-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <img
            src={group2Image}
            alt="Fizz Flavor Variety Collection"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FlavorsDisplay;