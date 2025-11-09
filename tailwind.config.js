/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Reco', 'Arial Black', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'bounce-slow-delay': 'bounce 3s infinite 1.5s',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 10s linear infinite reverse',
        'float': 'float linear infinite',
        'float-bubble': 'floatBubble linear infinite',
        'float-slow': 'floatSlow ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'twinkle': 'twinkle ease-in-out infinite',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(100vh) scale(0)', opacity: '0' },
          '10%': { opacity: '0.3' },
          '90%': { opacity: '0.3' },
          '100%': { transform: 'translateY(-100vh) scale(1)', opacity: '0' },
        },
        floatBubble: {
          '0%': { 
            transform: 'translateY(0) translateX(0) scale(0.8)',
            opacity: '0'
          },
          '10%': { opacity: '0.4' },
          '50%': { 
            transform: 'translateY(-50vh) translateX(30px) scale(1)',
            opacity: '0.3'
          },
          '100%': { 
            transform: 'translateY(-100vh) translateX(-30px) scale(0.6)',
            opacity: '0'
          },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-30px) translateX(20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.3)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}