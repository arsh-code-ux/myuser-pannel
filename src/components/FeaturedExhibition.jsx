import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img222 from '../img222.jpg';
import img333 from '../img333.jpg';
import image444 from '../image444.jpg';
import image555 from '../image555.jpg';

export function FeaturedExhibition() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 1, color: 'bg-blue-500', title: 'The Ancient Citadel', image: img222 },
    { id: 2, color: 'bg-green-600', title: 'Desert Landscape', image: img333 },
    { id: 3, color: 'bg-cyan-400', title: 'Nature\'s Canvas', image: image444 },
    { id: 4, color: 'bg-blue-600', title: 'Modern Heritage', image: image555 },
    { id: 5, color: 'bg-purple-600', title: 'Timeless Treasures', image: img222 },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="luxury-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-12">
          <div>
            <p className="section-subtitle">Featured Showcase</p>
            <h2 className="section-title">Ancient Wonders Collection</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              An exhibition showcasing rare ancient artifacts and timeless cultural treasures from around the world.
            </p>
            <p className="text-gray-600 text-sm mb-2">From March 2026 to May 2026</p>
            <p className="text-gray-800 font-semibold text-sm mb-8">ZIGGURAT CULTURAL HERITAGE</p>
            <button className="luxury-button hidden md:inline-block">See all exhibitions</button>
          </div>

          {/* Carousel */}
          <div className="relative bg-white rounded-lg overflow-hidden p-6">
            <div className="flex gap-4 overflow-x-auto pb-4">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`flex-shrink-0 w-48 h-64 rounded-lg overflow-hidden transition-all duration-300 cursor-pointer ${
                    index === currentSlide ? 'ring-4 ring-black' : 'opacity-60'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-start p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white font-serif text-lg font-bold">{slide.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    index === currentSlide ? 'bg-black' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center md:hidden">
          <button className="luxury-button-dark">See artworks from exhibition</button>
        </div>
      </div>
    </section>
  );
}
