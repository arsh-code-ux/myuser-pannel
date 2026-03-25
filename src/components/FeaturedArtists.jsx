import React, { useState } from 'react';
import prasoonChandraPoddar from '../Prasoon Chandra Poddar.jpg';
import richardAnbudurai from '../Richard Anbudurai.jpeg';
import drRamBaliPrajapati from '../Dr Ram Bali Prajapati.jpg';
import bhawanaRajput from '../BHAWANA RAJPUT.jpg';
import navjotSohal from '../navjot sohal.jpeg';
import yashasviHanda from '../Yashasvi Handa.jpeg';

export function FeaturedArtists({ onNavigate }) {
  const [showAllExperts, setShowAllExperts] = useState(false);
  const artists = [
    { 
      id: 1, 
      name: 'Prasoon Chandra Poddar', 
      title: 'Painter & Sculptor', 
      location: 'New Delhi, India',
      totalArtwork: '8',
      image: prasoonChandraPoddar,
      objectPosition: 'center 30%'
    },
    { 
      id: 2, 
      name: 'Richard Anbudurai', 
      title: 'Artist', 
      location: 'Chennai, India',
      totalArtwork: '3',
      image: richardAnbudurai,
      objectPosition: 'center 35%'
    },
    { 
      id: 3, 
      name: 'Dr Ram Bali Prajapati', 
      title: 'Painter & Sculptor', 
      location: 'Ghaziabad, India',
      totalArtwork: '0',
      image: drRamBaliPrajapati,
      objectPosition: 'center 25%'
    },
    { 
      id: 4, 
      name: 'Bhawana Rajput', 
      title: 'Multi-Media Artist', 
      location: 'Ahmedabad, India',
      totalArtwork: '0',
      image: bhawanaRajput,
      objectPosition: 'center 40%'
    },
    { 
      id: 5, 
      name: 'Navjot Sohal', 
      title: 'Sculptor', 
      location: 'Vadodara, India',
      totalArtwork: '0',
      image: navjotSohal,
      objectPosition: 'center 35%'
    },
    { 
      id: 6, 
      name: 'Yashasvi Handa', 
      title: 'Multi-Media Artist', 
      location: 'Indrapuram, India',
      totalArtwork: '1',
      image: yashasviHanda,
      objectPosition: 'center 30%'
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="luxury-container">
        <div className="mb-16">
          <p className="section-subtitle">Excellence in Heritage</p>
          <h2 className="section-title">Featured Experts</h2>
          <p className="text-gray-700 text-base">Meet the visionaries preserving our cultural legacy</p>
        </div>

        {/* Artists Grid - Masonry style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {artists.map((artist) => (
            <div
              key={artist.id}
              className="group relative rounded-xl overflow-hidden h-96 md:h-96 hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-200 hover:border-black"
            >
              {/* Image Container with proper face positioning */}
              <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-100">
                <img 
                  src={artist.image}
                  alt={artist.name}
                  style={{ objectPosition: artist.objectPosition }}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className="relative z-10">
                  <h3 className="font-serif text-2xl font-bold mb-1 group-hover:text-white transition">{artist.name}</h3>
                  <p className="text-sm opacity-95 mb-1 font-medium">{artist.title}</p>
                  <p className="text-xs opacity-85">{artist.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {['Heritage Experts', 'Curators', 'Artists', 'Historians', 'Conservators'].map((category) => (
            <button
              key={category}
              className="px-5 py-2.5 border-2 border-gray-300 rounded-full text-sm font-medium hover:border-black hover:bg-black hover:text-white transition duration-300"
            >
              {category}
            </button>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => onNavigate('all-experts')}
            className="luxury-button">All experts →</button>
        </div>
      </div>
    </section>
  );
}
