/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          dark: '#0f0f0f',
          light: '#f5f5f5',
          gold: '#d4af37',
          accent: '#8b7355',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'rotate-image': 'rotateImage 20s linear infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'rotate-x': 'rotateX 4s ease-in-out infinite',
        'rotate-x-right': 'rotateXRight 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'shimmer': 'shimmer 2s infinite',
        'golden-glow': 'goldenGlow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-20px) translateX(5px)' },
          '50%': { transform: 'translateY(-40px) translateX(-5px)' },
          '75%': { transform: 'translateY(-20px) translateX(5px)' },
        },
        rotateImage: {
          '0%': { transform: 'scale(1) rotate(0deg)' },
          '50%': { transform: 'scale(1.05) rotate(2deg)' },
          '100%': { transform: 'scale(1) rotate(0deg)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateX: {
          '0%': { transform: 'perspective(1200px) rotateX(0deg) rotateY(-15deg)' },
          '50%': { transform: 'perspective(1200px) rotateX(8deg) rotateY(-15deg)' },
          '100%': { transform: 'perspective(1200px) rotateX(0deg) rotateY(-15deg)' },
        },
        rotateXRight: {
          '0%': { transform: 'perspective(1200px) rotateX(0deg) rotateY(15deg)' },
          '50%': { transform: 'perspective(1200px) rotateX(8deg) rotateY(15deg)' },
          '100%': { transform: 'perspective(1200px) rotateX(0deg) rotateY(15deg)' },
        },
        glowPulse: {
          '0%, 100%': {
            'box-shadow': '0 0 20px rgba(251, 146, 60, 0.4), 0 0 40px rgba(217, 119, 6, 0.2), inset 0 0 20px rgba(251, 146, 60, 0.15)',
          },
          '50%': {
            'box-shadow': '0 0 40px rgba(251, 146, 60, 0.6), 0 0 80px rgba(217, 119, 6, 0.4), inset 0 0 30px rgba(251, 146, 60, 0.25)',
          },
        },
        slideInLeft: {
          'from': {
            opacity: '0',
            transform: 'translateX(-100px) perspective(1200px) rotateY(45deg)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0) perspective(1200px) rotateY(-15deg)',
          },
        },
        slideInRight: {
          'from': {
            opacity: '0',
            transform: 'translateX(100px) perspective(1200px) rotateY(-45deg)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0) perspective(1200px) rotateY(15deg)',
          },
        },
        shimmer: {
          '0%': { 'background-position': '-1000px 0' },
          '100%': { 'background-position': '1000px 0' },
        },
        goldenGlow: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 8px rgba(251, 146, 60, 0.6)) drop-shadow(0 0 15px rgba(217, 119, 6, 0.4))',
          },
          '50%': {
            filter: 'drop-shadow(0 0 20px rgba(251, 146, 60, 0.9)) drop-shadow(0 0 35px rgba(217, 119, 6, 0.6))',
          },
        },
      },
    },
  },
  plugins: [],
}


