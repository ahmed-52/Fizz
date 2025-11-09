// Navbar.jsx
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when scrolling down, hide when at top
      if (currentScrollY > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b-2 border-black transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ fontFamily: 'Recoleta, sans-serif' }}
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-center h-16">
          {/* Logo */}
          <h1 className="text-3xl font-black" style={{ color: '#D92F8A' }}>
            FIZZ
          </h1>
        </div>
      </div>
    </nav>
  );
};
  
  export default Navbar;