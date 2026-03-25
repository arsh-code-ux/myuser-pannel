import React from 'react';
import { Heart } from 'lucide-react';
import image13 from '../image13.jpg';
import image10 from '../image10.jpg';
import image9 from '../image9.jpg';
import image7 from '../image7.jpg';
import image6 from '../image6.jpg';

export function BestsellerProducts() {
  const products = [
    {
      id: 1,
      name: 'Guardian At The Window',
      artist: 'Nandini Saha Ghosh',
      price: '$3,500',
      oldPrice: '$4,200',
      image: image13,
      category: 'Painting',
    },
    {
      id: 2,
      name: 'Celebration-7',
      artist: 'Pradip Sarkar',
      price: '$2,800',
      oldPrice: '$3,500',
      image: image10,
      category: 'Cubism',
    },
    {
      id: 3,
      name: 'Tranquil Awakening',
      artist: 'Sonaly Gandhi',
      price: '$2,200',
      oldPrice: '$2,800',
      image: image9,
      category: 'Digital Art',
    },
    {
      id: 4,
      name: 'The Queen',
      artist: 'Sudip Chandra',
      price: '$4,500',
      oldPrice: '',
      image: image7,
      category: 'Sculpture',
    },
    {
      id: 5,
      name: 'Split Soul',
      artist: 'Tarvinder Singh',
      price: '$3,200',
      oldPrice: '$4,000',
      image: image6,
      category: 'Sculpture',
    },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-32 bg-white">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="mb-8 md:mb-12 lg:mb-16">
          <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Curated Collection</p>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-3 md:mb-4">Bestsellers</h2>
          <p className="text-xs md:text-sm lg:text-base text-gray-700">Discover the most coveted artifacts and artworks from our exclusive collection</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4 lg:gap-6 mb-8 md:mb-12">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="w-full aspect-square rounded-lg overflow-hidden relative hover:shadow-xl transition-all duration-300 bg-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Wishlist Icon */}
                <button className="absolute top-2 md:top-3 right-2 md:right-3 bg-yellow-400 rounded-full p-1.5 md:p-2 shadow-md hover:bg-yellow-500 transition opacity-0 group-hover:opacity-100 duration-300">
                  <Heart className="w-3 md:w-4 h-3 md:h-4 text-black" fill="currentColor" />
                </button>
                
                {/* Sale Badge */}
                {product.oldPrice && (
                  <div className="absolute top-2 md:top-3 left-2 md:left-3 bg-green-500 text-white px-2 md:px-3 py-0.5 md:py-1 rounded text-xs font-bold">
                    Sale
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="mt-2 md:mt-3 lg:mt-4">
                <h3 className="font-semibold text-xs md:text-sm text-black group-hover:text-gray-700 transition line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-0.5 md:mb-1 line-clamp-1">{product.artist}</p>
                <p className="text-xs text-gray-500 mb-2 md:mb-3 uppercase tracking-wide line-clamp-1">{product.category}</p>

                {/* Price */}
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="font-bold text-xs md:text-sm text-black">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-gray-400 line-through">{product.oldPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-6 md:px-8 py-2 md:py-2.5 border border-black bg-black text-white font-medium rounded-full hover:bg-white hover:text-black transition text-xs md:text-sm">All artifacts →</button>
        </div>
      </div>
    </section>
  );
}
