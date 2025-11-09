// NutritionFacts.jsx
import { useState, useEffect } from 'react';

const NutritionFacts = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative py-12 px-6 lg:px-16 overflow-hidden"
      style={{ fontFamily: 'Recoleta, sans-serif', backgroundColor: '#c4b9eb' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-48 h-48 bg-[#D92F8A] opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-cyan-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-black text-black">
            Nutrition <span className="text-[#D92F8A]">Facts</span>
          </h2>
        </div>

        {/* Compact Grid Layout */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Main Nutrition Panel */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#D92F8A] to-[#E23B01] rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
              
              {/* Header Row */}
              <div className="flex justify-between items-center border-b-4 border-black pb-3 mb-4">
                <div>
                  <h3 className="text-3xl font-black text-yellow-300">Nutrition Facts</h3>
                  <p className="text-sm text-white font-bold">Serving Size <span className="text-yellow-300">12 fl oz</span></p>
                </div>
                <div className="text-right">
                  <div className="text-lg text-white font-bold">Calories</div>
                  <div className="text-5xl font-black text-yellow-300">90</div>
                </div>
              </div>

              {/* Two Column Layout for Nutrition */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-2">
                <div className="space-y-2">
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span className="text-sm font-bold text-white">Total Fat <span className="text-yellow-300">0g</span></span>
                    <span className="text-sm font-black text-yellow-300">0%</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span className="text-sm font-bold text-white">Sodium <span className="text-yellow-300">30mg</span></span>
                    <span className="text-sm font-black text-yellow-300">1%</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span className="text-sm font-bold text-white">Total Carb <span className="text-yellow-300">5g</span></span>
                    <span className="text-sm font-black text-yellow-300">2%</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1 pl-3">
                    <span className="text-sm font-bold text-white">Fiber <span className="text-yellow-300">5g</span></span>
                    <span className="text-sm font-black text-yellow-300">18%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between border-b-2 border-black pb-1 pl-3">
                    <span className="text-sm font-bold text-white">Sugars <span className="text-yellow-300">0g</span></span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1 pl-3">
                    <span className="text-sm font-bold text-white">Added Sugars <span className="text-yellow-300">0g</span></span>
                    <span className="text-sm font-black text-yellow-300">0%</span>
                  </div>
                  <div className="flex justify-between border-b-2 border-black pb-1">
                    <span className="text-sm font-bold text-white">Protein <span className="text-yellow-300">20g</span></span>
                    <span className="text-sm font-black text-yellow-300">40%</span>
                  </div>
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-4 pt-3 border-t-4 border-black">
                <div className="bg-yellow-300 rounded-lg border-2 border-black p-3">
                  <p className="text-xs text-black font-bold">
                    <span className="font-black">Contains:</span> Milk • 
                    <span className="font-black"> Also provides:</span> L-carnitine L-tartrate 500-1000mg
                  </p>
                </div>
              </div>

              {/* Ingredients Section */}
              <div className="mt-4 pt-3 border-t-4 border-black">
                <h4 className="text-lg font-black text-yellow-300 mb-2">Ingredients</h4>
                <p className="text-xs text-white font-medium leading-relaxed">
                  Carbonated water, whey protein isolate (milk) [Actus PRObev® hydrolyzed WPI], prebiotic fiber (fructooligosaccharides or soluble corn fiber), citric acid, malic acid, natural flavors, L-carnitine L-tartrate, stevia leaf extract (Reb M).
                </p>
              </div>
            </div>

            {/* Highlight Stats Column */}
            <div className="space-y-4">
              <div className="bg-cyan-500 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 text-center">
                <div className="text-4xl font-black text-white">20g</div>
                <div className="text-sm font-bold text-black">Premium Protein</div>
              </div>

              <div className="bg-[#E23B01] rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 text-center">
                <div className="text-4xl font-black text-white">0g</div>
                <div className="text-sm font-bold text-white">Sugar</div>
              </div>

              <div className="bg-[#D92F8A] rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-5 text-center">
                <div className="text-4xl font-black text-white">5g</div>
                <div className="text-sm font-bold text-white">Prebiotic Fiber</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionFacts;