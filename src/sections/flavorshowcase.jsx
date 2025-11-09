// FlavorsShowcase.jsx
import { useRef, useEffect, useState } from 'react';
import strawberryImage from '../public/pink2.jpeg';
import blueImage from '../public/blue2.jpeg';
import lemonImage from '../public/lemon2.jpeg';
import orangeImage from '../public/orange2.jpeg';

const FlavorsShowcase = () => {
  const sectionRef = useRef(null);
  const canRefs = useRef([]);
  const [bgColor, setBgColor] = useState('#D92F8A'); // pink/strawberry

  const cans = [
    { 
      name: 'Strawberry Dream', 
      image: strawberryImage, 
      color: 'pink', 
      hexColor: '#D92F8A',
      tagline: 'Sweet. Bold. Refreshing.',
      description: 'Bursting with real strawberry flavor, this protein-packed soda keeps you satisfied without the sugar crash.',
      stats: ['20g Protein', 'L-Carnitine', '0g Sugar', '80 Calories']
    },
    { 
      name: 'Orange Burst', 
      image: orangeImage, 
      color: 'orange', 
      hexColor: '#ffa543',
      tagline: 'Citrus Energy. Zero Guilt.',
      description: 'Tangy orange meets smooth protein for the ultimate post-workout refresher that fuels your body.',
      stats: ['20g Protein', 'L-Carnitine', '0g Sugar', '80 Calories']
    },
    { 
      name: 'Lemon Zest', 
      image: lemonImage, 
      color: 'yellow', 
      hexColor: '#FDF351',
      tagline: 'Crisp. Clean. Energizing.',
      description: 'Zesty lemon flavor that wakes up your taste buds while delivering serious protein power.',
      stats: ['20g Protein', 'L-Carnitine', '0g Sugar', '80 Calories']
    },
    { 
      name: 'Blue Raspberry', 
      image: blueImage, 
      color: 'blue', 
      hexColor: '#c4b9eb',
      tagline: 'Bold Flavor. Real Results.',
      description: 'Classic blue raspberry taste with a protein punch. Your new favorite way to refuel.',
      stats: ['20g Protein', 'L-Carnitine', '0g Sugar', '80 Calories']
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const windowHeight = window.innerHeight;
      const viewportCenter = windowHeight / 2;

      // Find which can is closest to the center of the viewport
      let closestCanIndex = 0;
      let minDistance = Infinity;

      canRefs.current.forEach((canElement, index) => {
        if (!canElement) return;

        const rect = canElement.getBoundingClientRect();
        const canCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - canCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestCanIndex = index;
        }
      });

      // Get the colors for interpolation
      const currentCan = cans[closestCanIndex];
      const nextCan = cans[Math.min(closestCanIndex + 1, cans.length - 1)];
      
      // Calculate how close we are to the next can
      const currentCanElement = canRefs.current[closestCanIndex];
      const nextCanElement = canRefs.current[Math.min(closestCanIndex + 1, cans.length - 1)];
      
      if (currentCanElement && nextCanElement) {
        const currentRect = currentCanElement.getBoundingClientRect();
        const nextRect = nextCanElement.getBoundingClientRect();
        const currentCenter = currentRect.top + currentRect.height / 2;
        const nextCenter = nextRect.top + nextRect.height / 2;
        
        // Calculate interpolation factor (0 = current can, 1 = next can)
        const totalDistance = Math.abs(nextCenter - currentCenter);
        const distanceFromCurrent = Math.abs(viewportCenter - currentCenter);
        const t = Math.max(0, Math.min(1, distanceFromCurrent / totalDistance));
        
        // Convert hex to RGB for interpolation
        const hexToRgb = (hex) => {
          const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
          return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          } : null;
        };
        
        const currentRgb = hexToRgb(currentCan.hexColor);
        const nextRgb = hexToRgb(nextCan.hexColor);
        
        if (currentRgb && nextRgb) {
          const r = Math.round(currentRgb.r + (nextRgb.r - currentRgb.r) * t);
          const g = Math.round(currentRgb.g + (nextRgb.g - currentRgb.g) * t);
          const b = Math.round(currentRgb.b + (nextRgb.b - currentRgb.b) * t);
          setBgColor(`rgb(${r}, ${g}, ${b})`);
        } else {
          setBgColor(currentCan.hexColor);
        }
      } else {
        setBgColor(currentCan.hexColor);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 min-h-[220vh] transition-colors duration-100 overflow-hidden"
      style={{ backgroundColor: bgColor, fontFamily: 'Recoleta, sans-serif' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Bubbles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/10 animate-float-bubble"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-${Math.random() * 200 + 100}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 15}s`,
            }}
          />
        ))}

        {/* Rotating Shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`shape-${i}`}
            className="absolute animate-spin-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 20 + 20}s`,
            }}
          >
            <div className="w-16 h-16 bg-white/5 rotate-45 rounded-lg" />
          </div>
        ))}

        {/* Sparkles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-white/30 text-2xl animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          >
            ✦
          </div>
        ))}

        {/* Large Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '6s' }} />

        {/* Floating Circles */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute border-2 border-white/10 rounded-full animate-float-slow"
            style={{
              width: `${Math.random() * 150 + 100}px`,
              height: `${Math.random() * 150 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 20}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 animate-fade-in">
            Four Flavors
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-medium animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Same protein. Same benefits. Pure taste.
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-24">
          {cans.map((can, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div
                key={index}
                ref={(el) => (canRefs.current[index] = el)}
                className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 min-h-[70vh]"
              >
                {/* Can Image */}
                <div className={`flex-shrink-0 ${isLeft ? 'md:order-1' : 'md:order-2'}`}>
                  <img
                    src={can.image}
                    alt={can.name}
                    className="w-48 md:w-80 lg:w-96 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className={`flex-1 ${isLeft ? 'md:order-2 md:pl-8' : 'md:order-1 md:pr-8'} text-center md:text-left`}>
                  {/* Flavor Name */}
                  <h3 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">
                    {can.name}
                  </h3>
                  
                  {/* Tagline */}
                  <p className="text-2xl md:text-3xl text-white/90 font-bold mb-6">
                    {can.tagline}
                  </p>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg">
                    {can.description}
                  </p>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
                    {can.stats.map((stat, i) => (
                      <div 
                        key={i}
                        className="bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-full px-5 py-2 hover:bg-white/30 transition-all"
                      >
                        <span className="text-white font-bold text-sm">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* CTA Button */}
                  <button className="bg-white text-black font-black text-lg px-10 py-4 rounded-full border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                    Try {can.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FlavorsShowcase;