// FlavorsShowcase.jsx
import { useEffect, useState } from 'react';
import groupImage from '../public/groupimage.png';

const FlavorsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative py-16 px-6 lg:px-16 bg-white overflow-hidden"
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <img
                src={groupImage}
                alt="Fizz Flavor Collection"
                className="w-full rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="bg-white rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
              <h2 className="text-5xl lg:text-6xl font-black mb-6">
                <span className="text-[#D92F8A]">All Your</span>{' '}
                <span className="text-cyan-500">Favorites</span>
              </h2>
              <p className="text-lg text-gray-700 font-bold mb-6 leading-relaxed">
                From refreshing Lemon Lime to bold Strawberry Blast, we've got a flavor for every taste. Each can delivers the same powerful 20g of protein with zero sugar, so you can enjoy your favorite without compromise.
              </p>
              <p className="text-lg text-gray-700 font-bold leading-relaxed">
                Whether you're craving something citrusy, fruity, or bold, our complete flavor lineup ensures you never have to choose between taste and nutrition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlavorsShowcase;

