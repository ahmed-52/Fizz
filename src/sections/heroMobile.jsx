// HeroMobile.jsx
import { useEffect, useState } from 'react';
import hheroImage from '../public/hhero.png';

const HeroMobile = () => {
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

      <div className="container mx-auto px-4 relative z-10 h-full py-8 flex flex-col justify-between">
        <div className="flex flex-col items-center space-y-4 pt-8">
          {/* Marketing Info - Smaller and restructured */}
          <div
            className={`flex flex-col items-center space-y-3 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Main Headline - Smaller */}
            <div className="animate-fade-in text-center">
              <h1 className="text-3xl font-black leading-tight tracking-tight text-black">
                <span className="text-[#D92F8A] block">FIZZY</span>
                <span className="block">
                  <span className="text-cyan-500">PROTEIN </span>
                  <span style={{ color: '#E23B01' }}>SODA</span>
                </span>
              </h1>
            </div>

            {/* Horizontal Metrics - Smaller */}
            <div className="flex items-center gap-2 py-2 border-y-2 border-black animate-fade-in w-full max-w-xs" style={{ animationDelay: '0.2s' }}>
              <div className="flex-1 text-center">
                <div className="text-lg font-black text-[#D92F8A] mb-0.5 leading-none">20g</div>
                <div className="text-[8px] text-black font-black uppercase tracking-wide">PROTEIN</div>
              </div>
              <div className="w-px h-8 bg-black"></div>
              <div className="flex-1 text-center">
                <div className="text-lg font-black text-cyan-500 mb-0.5 leading-none">ZERO</div>
                <div className="text-[8px] text-black font-black uppercase tracking-wide">SUGAR</div>
              </div>
              <div className="w-px h-8 bg-black"></div>
              <div className="flex-1 text-center">
                <div className="text-lg font-black text-[#3a2f63] mb-0.5 leading-none">WEIGHT</div>
                <div className="text-[8px] text-black font-black uppercase tracking-wide">LOSS</div>
              </div>
            </div>

            {/* Email Signup - Smaller */}
            <div id="email-signup" className="animate-fade-in w-full max-w-xs" style={{ animationDelay: '0.4s' }}>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-3 py-2 rounded-lg border-2 border-black text-black font-semibold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D92F8A]/50 transition-all text-xs"
                    style={{ fontFamily: 'Recoleta, sans-serif' }}
                  />
                  <button
                    type="submit"
                    className="bg-[#D92F8A] text-white font-black text-xs px-4 py-2 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none transition-all uppercase"
                  >
                    Notify Me
                  </button>
                </form>
              ) : (
                <div className="bg-white rounded-lg border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] p-3 text-center animate-fade-in">
                  <div className="text-xl font-black mb-1 animate-bounce-slow">🎉</div>
                  <p className="text-xs font-black text-[#D92F8A]">
                    Stay tuned! We're launching soon.
                  </p>
                  <p className="text-[10px] text-gray-600 mt-1">
                    We'll notify you when Fizz is ready!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Product Image - Keep at bottom, same size as desktop */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative max-w-sm mx-auto animate-float-slow">
            <img
              src={hheroImage}
              alt="Fizz Protein Soda"
              className="relative z-10 w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroMobile;

