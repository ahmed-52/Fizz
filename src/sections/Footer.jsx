// Footer.jsx
const Footer = () => {
    return (
      <footer 
        className="relative py-12 overflow-hidden"
        style={{ fontFamily: 'Recoleta, sans-serif', backgroundColor: '#FDF351' }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          {/* Floating bubbles */}
          {[...Array(10)].map((_, i) => (
            <div
              key={`bubble-${i}`}
              className="absolute rounded-full bg-white/20 animate-float-bubble"
              style={{
                width: `${Math.random() * 80 + 40}px`,
                height: `${Math.random() * 80 + 40}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-100px`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 15 + 15}s`,
              }}
            />
          ))}
  
          {/* Sparkles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={`sparkle-${i}`}
              className="absolute text-white/40 text-2xl animate-twinkle"
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
  
          {/* Floating circles */}
          {[...Array(6)].map((_, i) => (
            <div
              key={`circle-${i}`}
              className="absolute border-3 border-white/20 rounded-full animate-float-slow"
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 10 + 15}s`,
              }}
            />
          ))}
  
          {/* Rotating squares */}
          {[...Array(4)].map((_, i) => (
            <div
              key={`square-${i}`}
              className="absolute animate-spin-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${Math.random() * 20 + 15}s`,
              }}
            >
              <div className="w-16 h-16 bg-white/10 rotate-45 rounded-lg" />
            </div>
          ))}
        </div>
  
        <div className="container mx-auto px-6 lg:px-16 relative z-10">
          {/* Top Section - Logo & Tagline */}
          <div className="text-center mb-8">
            <h2 className="text-5xl md:text-6xl font-black mb-3">
              <span className="text-[#D92F8A]">FIZZ</span>
            </h2>
            <p className="text-xl font-bold text-black/80">
              Protein-Powered. Purpose-Driven.
            </p>
          </div>
  
          {/* Team Section */}
          <div className="text-center mb-8">
            <p className="text-lg font-bold text-black mb-4 flex items-center justify-center gap-2">
              Made with <span className="text-2xl text-red-500 animate-pulse-slow">❤️</span> by
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-2">
              {['Ahmed Abdulla', 'Farhan Mashrur'].map((name, i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-sm border-3 border-black rounded-full px-5 py-2 font-black text-black hover:bg-white hover:scale-105 transition-all"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
  
          {/* Bottom Section - Links & Copyright */}
          <div className="border-t-4 border-black pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Links */}
              <div className="flex gap-6 text-sm font-bold">
                <a href="#" className="text-black hover:text-[#D92F8A] transition-colors">
                  Shop
                </a>
                <a href="#" className="text-black hover:text-cyan-500 transition-colors">
                  About
                </a>
                <a href="#" className="text-black hover:text-[#E23B01] transition-colors">
                  Contact
                </a>
                <a href="#" className="text-black hover:text-purple-600 transition-colors">
                  FAQ
                </a>
              </div>
  
              {/* Copyright */}
              <div className="text-sm font-bold text-black/70">
                © 2025 Fizz. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;