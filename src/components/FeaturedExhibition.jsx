import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img222 from '../img222.jpg';
import img333 from '../img333.jpg';
import image444 from '../image444.jpg';
import image555 from '../image555.jpg';
import history from '../history.jpg';

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
    <section className="py-20 md:py-32 relative" style={{
      backgroundImage: `url(${history})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
      {/* White overlay for readability */}
      <div className="absolute inset-0 bg-white/95"></div>
      
      <div className="luxury-container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start mb-8 md:mb-12">
          <div>
            <p className="section-subtitle text-amber-600 font-semibold uppercase tracking-widest text-xs md:text-sm">Featured Showcase</p>
            <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-4 md:mb-6">Ancient Wonders Collection</h2>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-4 md:mb-6 font-medium">
              An exhibition showcasing rare ancient artifacts and timeless cultural treasures from around the world.
            </p>
            <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
              <p className="text-gray-700 text-sm md:text-base font-semibold">From March 2026 to May 2026</p>
              <p className="text-black font-bold text-base md:text-lg tracking-wide">ZIGGURAT CULTURAL HERITAGE</p>
            </div>
            <button className="hidden md:inline-block bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-800 transition text-sm md:text-base">See all exhibitions</button>
          </div>

          {/* Carousel */}
          <div className="relative bg-black rounded-lg md:rounded-2xl overflow-hidden p-3 md:p-6 shadow-lg md:shadow-2xl">
            <div className="flex gap-3 md:gap-4 overflow-x-auto pb-3 md:pb-4">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`flex-shrink-0 w-40 md:w-56 h-52 md:h-72 rounded-lg md:rounded-xl overflow-hidden transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                    index === currentSlide ? 'ring-3 md:ring-4 ring-amber-400' : 'opacity-70 hover:opacity-90'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-end justify-start p-2 md:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                    <span className="text-white font-serif text-sm md:text-xl font-bold line-clamp-2">{slide.title}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl hover:bg-amber-50 transition z-20"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl hover:bg-amber-50 transition z-20"
            >
              <ChevronRight className="w-5 md:w-6 h-5 md:h-6 text-black" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition ${
                    index === currentSlide ? 'bg-amber-400 w-6 md:w-8 h-2.5 md:h-3' : 'bg-gray-500 hover:bg-gray-400 w-2.5 md:w-3 h-2.5 md:h-3'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center md:hidden px-4">
          <button className="w-full bg-black text-white px-6 md:px-8 py-2 md:py-3 rounded-full font-semibold hover:bg-gray-800 transition text-sm md:text-base">See artworks from exhibition</button>
        </div>
      </div>
    </section>
  );
}
