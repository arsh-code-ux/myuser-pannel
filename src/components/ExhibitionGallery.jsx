import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Import wall images
import wall1 from '../wall1.jpg';
import wall2 from '../wall2.jpg';
import wall3 from '../wall3.jpg';
import wall4 from '../wall4.jpg';
import wall5 from '../wall5.jpg';
import wall6 from '../wall6.jpg';
import wall7 from '../wall7.jpg';
import wall8 from '../wall8.webp';
import wall9 from '../wall9.webp';
import wall10 from '../wall10.webp';

// Add inline styles for animation
const animationStyle = document.createElement('style');
animationStyle.textContent = `
  @keyframes floatingText {
    0% {
      transform: translateX(0px) translateY(0px);
    }
    25% {
      transform: translateX(25px) translateY(-20px);
    }
    50% {
      transform: translateX(-25px) translateY(20px);
    }
    75% {
      transform: translateX(15px) translateY(-15px);
    }
    100% {
      transform: translateX(0px) translateY(0px);
    }
  }

  .floating-heading {
    animation: floatingText 8s ease-in-out infinite;
  }
`;
if (typeof document !== 'undefined') {
  document.head.appendChild(animationStyle);
}

export function ExhibitionGallery({ onClose }) {
  const [rotation, setRotation] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  const images = [wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10];

  {/* Heading Section - Between Gallery and Footer */}
      <div className="w-full px-4 -mt-16 mb-2 text-center">
        <h1 className="text-7xl md:text-8xl font-black text-white mb-2 leading-none" style={{ fontWeight: 2000, letterSpacing: '-2px' }}>Featured Exhibitions</h1>
        <p className="text-gray-300 text-lg mb-4">Explore all artworks in 360° view</p>
      </div>

  // Auto-rotation effect
  useEffect(() => {
    if (!isAutoRotating) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev - 1.8); // Slower rotation
    }, 100); // Slower speed

    return () => clearInterval(interval);
  }, [isAutoRotating]);

  const handleRotate = (direction) => {
    setIsAutoRotating(false); // Stop auto-rotation when user clicks
    if (direction === 'left') {
      setRotation((prev) => prev + 36);
    } else {
      setRotation((prev) => prev - 36);
    }
    // Resume auto-rotation after 3 seconds
    setTimeout(() => setIsAutoRotating(true), 3000);
  };

  return (
    <div className="fixed inset-0 bg-yellow-700 z-50 flex flex-col items-center justify-center overflow-y-auto py-8 md:py-16">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white hover:text-gray-300 z-10 transition"
      >
        <X size={40} />
      </button>

      {/* Gallery Section - Takes most of the space */}
      <div className="flex-1 relative w-full h-full flex items-center justify-center perspective pt-8 md:pt-16">
        {/* Rotating Wall with Images */}
        <div
          className="relative"
          style={{
            width: '1000px',
            height: '800px',
            transformStyle: 'preserve-3d',
            transform: `rotateY(${rotation}deg)`,
            transition: isAutoRotating ? 'none' : 'transform 0.6s ease-out',
          }}
        >
          {images.map((image, index) => {
            const angle = (index * 360) / images.length;
            const radius = 550;

            return (
              <div
                key={index}
                className="absolute rounded-xl overflow-hidden shadow-2xl cursor-pointer hover:scale-110 transition-transform duration-300 border-4 border-yellow-500/50 hover:border-yellow-400"
                style={{
                  width: '350px',
                  height: '450px',
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  src={image}
                  alt={`Exhibition ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end justify-center pb-6">
                  <p className="text-white font-serif text-2xl font-bold">Exhibition {index + 1}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => handleRotate('left')}
          className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-6 rounded-full z-20 transition-all duration-200 hover:scale-110"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => handleRotate('right')}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-6 rounded-full z-20 transition-all duration-200 hover:scale-110"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Heading Section - Between Gallery and Footer */}
      <div className="w-full px-4 -mt-16 mb-2 text-center">
        <h1 className="floating-heading text-8xl md:text-9xl font-black text-white mb-2 leading-none" style={{ fontWeight: 900, letterSpacing: '-2px', WebkitTextStroke: '1px rgba(255,255,255,0.3)', textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>Featured Exhibitions</h1>
        <p className="text-gray-300 text-lg mb-4">Explore all artworks in 360° view</p>
      </div>

      {/* Bottom Info Section */}
      <div className="w-full bg-gradient-to-t from-amber-900 via-yellow-800/80 to-transparent pt-8 pb-12 px-4 text-center border-t border-yellow-500/50">
        <p className="text-yellow-100 text-base">Gallery rotates automatically • Click arrows to control</p>
      </div>
    </div>
  );
}
