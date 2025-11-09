// Hero.jsx
import { useEffect, useState } from 'react';
import hheroImage from '../public/hhero.png';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
      // Reset message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section 
      className="relative h-screen max-h-[100vh] overflow-hidden flex items-center"
      style={{ fontFamily: 'Recoleta, sans-serif', backgroundColor: '#FDF351' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating bubbles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/20 animate-float-bubble"
            style={{
              width: `${Math.random() * 150 + 80}px`,
              height: `${Math.random() * 150 + 80}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-200px`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 15 + 15}s`,
            }}
          />
        ))}

        {/* Rotating gradient blobs */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-r from-pink-300/30 to-purple-300/30 rounded-full blur-3xl animate-spin-slow"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-r from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl animate-spin-slow-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-gradient-to-r from-orange-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse-slow"></div>

        {/* Floating circles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`circle-${i}`}
            className="absolute border-4 border-white/30 rounded-full animate-float-slow"
            style={{
              width: `${Math.random() * 120 + 60}px`,
              height: `${Math.random() * 120 + 60}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${Math.random() * 12 + 15}s`,
            }}
          />
        ))}

        {/* Sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-white/50 text-3xl animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            ✦
          </div>
        ))}

        {/* Rotating squares */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`square-${i}`}
            className="absolute animate-spin-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 25 + 20}s`,
            }}
          >
            <div className="w-20 h-20 bg-white/10 rotate-45 rounded-xl border-2 border-white/20" />
          </div>
        ))}

        {/* Pulsing dots */}
        {[...Array(15)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className="absolute w-4 h-4 bg-white/40 rounded-full animate-pulse-slow"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 h-full py-20 sm:py-4">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 h-full items-center">
          {/* Left Content - Product Image */}
          <div
            className={`relative transition-all duration-1000 order-2 lg:order-1 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-sm mx-auto lg:max-w-full animate-float-slow">
              <img
                src={hheroImage}
                alt="Fizz Protein Soda"
                className="relative z-10 w-full drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Right Content - Marketing Info */}
          <div
            className={`flex flex-col justify-center space-y-4 sm:space-y-6 transition-all duration-1000 delay-300 order-1 lg:order-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Headline */}
            <div className="animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.05] tracking-tight text-black">
                <span className="text-[#D92F8A] block">FIZZY</span>
                <span className="block">
                  <span className="text-cyan-500">PROTEIN </span>
                  <span style={{ color: '#E23B01' }}>SODA</span>
                </span>
              </h1>
            </div>

            {/* Horizontal Metrics */}
            <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 py-4 sm:py-5 border-y-4 border-black animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex-1 text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#D92F8A] mb-1 leading-none">20g</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-black font-black uppercase tracking-wide">PROTEIN</div>
              </div>
              <div className="w-px h-12 sm:h-14 lg:h-16 bg-black"></div>
              <div className="flex-1 text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-cyan-500 mb-1 leading-none">ZERO</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-black font-black uppercase tracking-wide">SUGAR</div>
              </div>
              <div className="w-px h-12 sm:h-14 lg:h-16 bg-black"></div>
              <div className="flex-1 text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3a2f63] mb-1 leading-none">WEIGHT</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-black font-black uppercase tracking-wide">LOSS</div>
              </div>
            </div>

            {/* Email Signup */}
            <div id="email-signup" className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-4 border-black text-black font-semibold placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#D92F8A]/50 transition-all text-sm sm:text-base"
                    style={{ fontFamily: 'Recoleta, sans-serif' }}
                  />
                  <button
                    type="submit"
                    className="bg-[#D92F8A] text-white font-black text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none transition-all uppercase whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="bg-white rounded-lg border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] p-4 sm:p-6 text-center animate-fade-in">
                  <div className="text-2xl sm:text-3xl font-black mb-2 animate-bounce-slow">🎉</div>
                  <p className="text-base sm:text-lg font-black text-[#D92F8A]">
                    Stay tuned! We're launching soon.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">
                    We'll notify you when Fizz is ready!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;