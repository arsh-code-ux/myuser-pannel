import React, { useState, useEffect } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import image11 from '../image 11.jpg';
import image9 from '../image 9.jpg';
import image8 from '../image 8.jpg';
import image1 from '../image 1.jpg';
import image15 from '../image15.jpg';
import image16 from '../image16.jpg';

export function ArtworkGallery() {
  const [loading, setLoading] = useState(false);

  const sampleArtworks = [
    {
      id: 1,
      title: 'Abstract Harmony',
      artist: 'Contemporary Artisan',
      price: '₹ 25,000',
      category: 'Painting',
      image: image11
    },
    {
      id: 2,
      title: 'Nature\'s Whisper',
      artist: 'Landscape Master',
      price: '₹ 18,500',
      category: 'Painting',
      image: image9
    },
    {
      id: 3,
      title: 'Urban Dreams',
      artist: 'City Artist',
      price: '₹ 22,000',
      category: 'Digital Art',
      image: image8
    },
    {
      id: 4,
      title: 'Eternal Essence',
      artist: 'Spiritual Creator',
      price: '₹ 19,000',
      category: 'Mixed Media',
      image: image1
    },
    {
      id: 5,
      title: 'Colorful Expressions',
      artist: 'Modern Sculptor',
      price: '₹ 35,000',
      category: 'Sculpture',
      image: image15
    },
    {
      id: 6,
      title: 'Heritage Memories',
      artist: 'Cultural Artist',
      price: '₹ 28,000',
      category: 'Painting',
      image: image16
    },
  ];

  const artworks = sampleArtworks;

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="luxury-container">
          <div className="text-center">
            <p className="text-lg text-gray-600">Loading artworks...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="luxury-container">
        <div className="mb-16">
          <p className="section-subtitle">Explore Collection</p>
          <h2 className="section-title">All Artworks</h2>
          <p className="text-gray-700 text-base">Discover our curated collection of unique artworks from talented artists</p>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {artworks.map((artwork) => (
            <div key={artwork.id} className="group cursor-pointer">
              {/* Artwork Image */}
              <div className="w-full aspect-square rounded-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 bg-gray-200">
                <img 
                  src={artwork.image || artwork.imageUrl}
                  alt={artwork.title || artwork.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23e5e7eb" width="400" height="400"/%3E%3C/svg%3E';
                  }}
                />
                
                {/* Wishlist Icon */}
                <button className="absolute top-3 right-3 bg-yellow-400 rounded-full p-2 shadow-md hover:bg-yellow-500 transition opacity-0 group-hover:opacity-100 duration-300">
                  <Heart className="w-4 h-4 text-black" fill="currentColor" />
                </button>

                {/* Add to Cart Icon */}
                <button className="absolute bottom-3 right-3 bg-black text-white rounded-full p-2 shadow-md hover:bg-gray-800 transition opacity-0 group-hover:opacity-100 duration-300">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>

              {/* Artwork Info */}
              <div className="mt-4">
                <h3 className="font-semibold text-sm text-black group-hover:text-gray-700 transition line-clamp-2">
                  {artwork.title}
                </h3>
                <p className="text-xs text-gray-600 mb-1">{artwork.artist}</p>
                <p className="text-xs text-gray-500 mb-3 uppercase tracking-wide">{artwork.category}</p>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-black">
                    {artwork.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="luxury-button">View All Artworks →</button>
        </div>
      </div>
    </section>
  );
}
