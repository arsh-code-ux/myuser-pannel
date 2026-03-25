import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';

// Import SVG
import hbIcon from '../hb.svg';

// Import images
import image1 from '../image 1.jpg';
import image8 from '../image 8.jpg';
import image9 from '../image 9.jpg';
import image11 from '../image 11.jpg';
import image12 from '../image 12.jpg';
import image2 from '../image2.jpg';
import image3 from '../image3.jpg';
import image4 from '../image4.jpg';
import image5 from '../image5.jpg';
import image6 from '../image6.jpg';
import image7 from '../image7.jpg';
import booBg from '../boo.jpg';
import lastBg from '../last.jpg';
import arshBg from '../arsh.jpg';

export function MyPurchases({ onNavigate }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [showCollections, setShowCollections] = useState(false);

  // Purchase data with imported images
  const purchases = [
    {
      id: 1,
      title: 'Abstract Dreams',
      artist: 'Aria Chen',
      price: '$2,450',
      date: 'Mar 15, 2026',
      image: image1,
      color: 'from-amber-500 to-yellow-500'
    },
    {
      id: 2,
      title: 'Urban Visions',
      artist: 'Marcus Reid',
      price: '$1,890',
      date: 'Mar 10, 2026',
      image: image8,
      color: 'from-yellow-500 to-amber-400'
    },
    {
      id: 3,
      title: 'Cosmic Energy',
      artist: 'Sofia Rossi',
      price: '$3,200',
      date: 'Mar 05, 2026',
      image: image9,
      color: 'from-amber-600 to-yellow-500'
    },
    {
      id: 4,
      title: 'Digital Sunset',
      artist: 'James North',
      price: '$2,100',
      date: 'Feb 28, 2026',
      image: image11,
      color: 'from-yellow-400 to-amber-500'
    },
    {
      id: 5,
      title: 'Nature\'s Whisper',
      artist: 'Luna Sky',
      price: '$2,750',
      date: 'Feb 20, 2026',
      image: image12,
      color: 'from-amber-400 to-yellow-600'
    },
    {
      id: 6,
      title: 'Serenity Flow',
      artist: 'Eva Bloom',
      price: '$1,950',
      date: 'Feb 15, 2026',
      image: image2,
      color: 'from-yellow-500 to-amber-600'
    },
    {
      id: 7,
      title: 'Ocean Vibes',
      artist: 'David Blue',
      price: '$2,200',
      date: 'Feb 10, 2026',
      image: image3,
      color: 'from-amber-500 to-yellow-400'
    },
    {
      id: 8,
      title: 'Mountain Peak',
      artist: 'Emma Stone',
      price: '$2,550',
      date: 'Feb 05, 2026',
      image: image4,
      color: 'from-yellow-600 to-amber-500'
    },
    {
      id: 9,
      title: 'Night Sky',
      artist: 'Alex Star',
      price: '$2,800',
      date: 'Jan 30, 2026',
      image: image5,
      color: 'from-amber-400 to-yellow-500'
    },
    {
      id: 10,
      title: 'Golden Hour',
      artist: 'Sarah Light',
      price: '$2,350',
      date: 'Jan 25, 2026',
      image: image6,
      color: 'from-yellow-400 to-amber-600'
    },
    {
      id: 11,
      title: 'Rainbow Dreams',
      artist: 'Chris Colors',
      price: '$2,650',
      date: 'Jan 20, 2026',
      image: image7,
      color: 'from-amber-600 to-yellow-400'
    },
  ];

  // Auto-play carousel with smooth, visible transitions
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % purchases.length);
    }, 2000); // 2 seconds - Faster shuffle for continuous rotation

    return () => clearInterval(interval);
  }, [isAutoPlay, purchases.length]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % purchases.length);
    setIsAutoPlay(false);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + purchases.length) % purchases.length);
    setIsAutoPlay(false);
  };

  const getVisibleItems = () => {
    const items = [];
    const totalItems = purchases.length;

    // Left item
    items.push({
      item: purchases[(activeIndex - 1 + totalItems) % totalItems],
      position: 'left',
      index: (activeIndex - 1 + totalItems) % totalItems,
    });

    // Center item
    items.push({
      item: purchases[activeIndex],
      position: 'center',
      index: activeIndex,
    });

    // Right item
    items.push({
      item: purchases[(activeIndex + 1) % totalItems],
      position: 'right',
      index: (activeIndex + 1) % totalItems,
    });

    return items;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-amber-950 to-slate-950 relative overflow-hidden">
      {/* Ambient background glow effects - Golden theme */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-amber-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-yellow-400 rounded-full mix-blend-screen filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        {/* Header */}
        <div 
          className="pt-20 pb-12 text-center px-4 relative bg-cover bg-center bg-no-repeat w-full"
          style={{
            backgroundImage: `url(${arshBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {/* No dark overlay - showing image clearly */}
          
          <div className="inline-block mb-4 relative z-10">
            <div className="flex items-center justify-center gap-3 mb-6">
              <ShoppingBag className="w-8 h-8 text-yellow-400 animate-bounce" />
              <h1 className="text-7xl md:text-8xl font-black text-black drop-shadow-2xl tracking-tighter" style={{ fontWeight: 900 }}>
                MY<span className="text-black"> PURCHASES</span>
              </h1>
              <ShoppingBag className="w-8 h-8 text-yellow-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          <p className="text-black text-xl font-bold max-w-2xl mx-auto relative z-10 drop-shadow-lg">
            Your carefully curated collection of premium digital artwork. Explore and celebrate your favorite pieces from renowned artists around the world.
          </p>
        </div>

        {/* Infinite Carousel - Three Boxes Shuffle Positions */}
        <div 
          className="relative w-full h-screen flex items-center justify-center overflow-visible px-4 bg-white bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${lastBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="relative w-full max-w-7xl mx-auto h-full flex items-center justify-center">
            {/* Carousel Container */}
            <div className="relative w-full h-2/3 flex items-center justify-center perspective">
              
              {/* BOX 1 - Rotates: Left → Center → Right → Left */}
              <div 
                className="absolute flex-shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 to-slate-900 transform z-10 transition-all duration-700 ease-in-out"
                style={{
                  width: activeIndex % 3 === 0 ? '300px' : activeIndex % 3 === 1 ? '520px' : '380px',
                  height: activeIndex % 3 === 0 ? '72%' : activeIndex % 3 === 1 ? '100%' : '85%',
                  opacity: activeIndex % 3 === 0 ? 0.5 : activeIndex % 3 === 1 ? 1 : 0.6,
                  left: activeIndex % 3 === 0 ? '-220px' : activeIndex % 3 === 1 ? '50%' : 'auto',
                  right: activeIndex % 3 === 2 ? '-220px' : 'auto',
                  transform: activeIndex % 3 === 1 ? 'translateX(-50%) scale(1.05)' : 'none',
                  borderWidth: activeIndex % 3 === 0 ? '20px' : activeIndex % 3 === 1 ? '24px' : '28px',
                  borderColor: activeIndex % 3 === 0 ? '#b45309' : activeIndex % 3 === 1 ? '#eab308' : '#fcd34d',
                  boxShadow: activeIndex % 3 === 0 ? '0 10px 30px rgba(180,83,9,0.3)' : activeIndex % 3 === 1 ? '0 20px 60px rgba(234,179,8,0.6)' : '0 10px 30px rgba(252,211,77,0.3)',
                  animation: activeIndex % 3 === 1 ? 'centerPopup 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
                }}
              >
                <TrainArtworkFrame 
                  artwork={purchases[activeIndex]}
                  isActive={activeIndex % 3 === 1}
                  key={`box1-${activeIndex}`}
                />
              </div>

              {/* BOX 2 - Rotates: Right → Left → Center → Right */}
              <div 
                className="absolute flex-shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 to-slate-900 transform z-10 transition-all duration-700 ease-in-out"
                style={{
                  width: activeIndex % 3 === 0 ? '380px' : activeIndex % 3 === 1 ? '300px' : '520px',
                  height: activeIndex % 3 === 0 ? '85%' : activeIndex % 3 === 1 ? '72%' : '100%',
                  opacity: activeIndex % 3 === 0 ? 0.6 : activeIndex % 3 === 1 ? 0.5 : 1,
                  left: activeIndex % 3 === 0 ? 'auto' : activeIndex % 3 === 1 ? '-220px' : '50%',
                  right: activeIndex % 3 === 0 ? '-220px' : 'auto',
                  transform: activeIndex % 3 === 2 ? 'translateX(-50%) scale(1.05)' : 'none',
                  borderWidth: activeIndex % 3 === 0 ? '28px' : activeIndex % 3 === 1 ? '20px' : '24px',
                  borderColor: activeIndex % 3 === 0 ? '#fcd34d' : activeIndex % 3 === 1 ? '#b45309' : '#eab308',
                  boxShadow: activeIndex % 3 === 0 ? '0 10px 30px rgba(252,211,77,0.3)' : activeIndex % 3 === 1 ? '0 10px 30px rgba(180,83,9,0.3)' : '0 20px 60px rgba(234,179,8,0.6)',
                  animation: activeIndex % 3 === 2 ? 'centerPopup 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
                }}
              >
                <TrainArtworkFrame 
                  artwork={purchases[(activeIndex + 1) % purchases.length]}
                  isActive={activeIndex % 3 === 2}
                  key={`box2-${activeIndex}`}
                />
              </div>

              {/* BOX 3 - Rotates: Center → Right → Left → Center */}
              <div 
                className="absolute flex-shrink-0 rounded-3xl overflow-hidden bg-gradient-to-br from-amber-900 to-slate-900 transform z-10 transition-all duration-700 ease-in-out"
                style={{
                  width: activeIndex % 3 === 0 ? '520px' : activeIndex % 3 === 1 ? '380px' : '300px',
                  height: activeIndex % 3 === 0 ? '100%' : activeIndex % 3 === 1 ? '85%' : '72%',
                  opacity: activeIndex % 3 === 0 ? 1 : activeIndex % 3 === 1 ? 0.6 : 0.5,
                  left: activeIndex % 3 === 0 ? '50%' : activeIndex % 3 === 1 ? 'auto' : '-220px',
                  right: activeIndex % 3 === 1 ? '-220px' : 'auto',
                  transform: activeIndex % 3 === 0 ? 'translateX(-50%) scale(1.05)' : 'none',
                  borderWidth: activeIndex % 3 === 0 ? '24px' : activeIndex % 3 === 1 ? '28px' : '20px',
                  borderColor: activeIndex % 3 === 0 ? '#eab308' : activeIndex % 3 === 1 ? '#fcd34d' : '#b45309',
                  boxShadow: activeIndex % 3 === 0 ? '0 20px 60px rgba(234,179,8,0.6)' : activeIndex % 3 === 1 ? '0 10px 30px rgba(252,211,77,0.3)' : '0 10px 30px rgba(180,83,9,0.3)',
                  animation: activeIndex % 3 === 0 ? 'centerPopup 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' : 'none'
                }}
              >
                <TrainArtworkFrame 
                  artwork={purchases[(activeIndex + 2) % purchases.length]}
                  isActive={activeIndex % 3 === 0}
                  key={`box3-${activeIndex}`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Artwork Details Panel */}
        <div 
          className="w-full bg-yellow-50 py-20 px-4 border-t-4 border-gray-200 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${lastBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#fef3c7'
          }}
        >
          {/* Light overlay for better text readability */}
          <div className="absolute inset-0 bg-yellow-50/90"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center space-y-8">
            {/* Package Icon */}
            <div className="mb-4">
              <img src={hbIcon} alt="Empty State" className="w-48 h-48" />
            </div>
            
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                YOU HAVE NOT PLACED
              </h2>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8">
                AN ORDER YET
              </h2>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => onNavigate && onNavigate('all-artworks')}
                className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Browse artworks
              </button>
              <button 
                onClick={() => setShowCollections(!showCollections)}
                className="border-2 border-slate-900 hover:bg-slate-900 text-slate-900 hover:text-white font-bold py-3 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                My purchases
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Collections View Modal */}
      {showCollections && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-8">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-4xl font-black text-black mb-2">
                    MY PURCHASES
                  </h1>
                  <p className="text-lg text-slate-600">
                    View all your purchased artworks and manage your collection.
                  </p>
                </div>
                <button 
                  onClick={() => setShowCollections(false)}
                  className="text-slate-900 hover:text-slate-600 text-3xl font-bold transition-colors"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* No Purchases Empty State */}
              <div className="text-center py-20">
                <div className="mb-8">
                  <img src={hbIcon} alt="Empty State" className="w-32 h-32 mx-auto" />
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">
                  NO PURCHASES YET
                </h2>
                <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto">
                  You haven't purchased any artworks yet. Browse our collection and find your favorite pieces!
                </p>
                <button 
                  onClick={() => setShowCollections(false)}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-12 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Browse artworks
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Artwork Frame Component with 3D rotation effect
function ArtworkFrame({ artwork, position, rotation, isActive = false }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getPositionClasses = () => {
    switch (position) {
      case 'left':
        return 'opacity-60 scale-75 hover:opacity-80 hover:scale-85';
      case 'center':
        return 'opacity-100 scale-100';
      case 'right':
        return 'opacity-60 scale-75 hover:opacity-80 hover:scale-85';
      default:
        return '';
    }
  };

  return (
    <div
      className={`relative transition-all duration-500 transform ${getPositionClasses()}`}
      style={{
        transform: `perspective(1200px) rotateY(${rotation}deg) rotateZ(${isHovered && isActive ? 5 : 0}deg) rotateX(${isHovered && isActive ? -3 : 0}deg)`,
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer glow with golden theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 rounded-2xl blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

      {/* Frame Container with Golden Border */}
      <div className="relative bg-gradient-to-br from-amber-900 via-slate-900 to-amber-900 rounded-2xl overflow-hidden border-4 border-amber-300 shadow-2xl backdrop-blur-xl transform transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/60">
        
        {/* Inner Border Glow - Golden */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/30 via-transparent to-yellow-300/20 pointer-events-none" />

        {/* Image Container */}
        <div className="relative overflow-hidden h-80 md:h-96 bg-gradient-to-br from-slate-950 to-amber-950">
          {/* Loading State */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-yellow-900 flex items-center justify-center">
              <div className="text-amber-300 text-sm animate-pulse">Loading...</div>
            </div>
          )}

          {/* Image with rotation animation */}
          <img
            src={artwork.image}
            alt={artwork.title}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 ${isActive ? 'animate-rotate-slow' : ''} ${isHovered ? 'scale-110' : 'scale-100'}`}
            style={{
              animation: isActive ? 'rotateImage 20s linear infinite' : 'none',
            }}
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23451a03" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23fcd34d" font-family="Arial" font-size="16"%3EArtwork%3C/text%3E%3C/svg%3E';
            }}
          />
          
          {/* Overlay Gradient - Golden */}
          <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-transparent to-transparent opacity-60" />

          {/* Animated Border Effect */}
          <div className={`absolute inset-0 bg-gradient-to-r ${artwork.color} opacity-0 transition-opacity duration-500 ${isActive ? 'group-hover:opacity-20' : ''}`} />
        </div>

        {/* Content with Golden Text */}
        <div className="relative p-6 space-y-3 bg-gradient-to-b from-transparent to-amber-950/50">
          <h3 className="text-amber-100 font-bold text-lg truncate drop-shadow-lg">{artwork.title}</h3>
          <p className="text-amber-200/80 text-sm">{artwork.artist}</p>
          
          {isActive && (
            <div className="pt-3 border-t border-amber-400/30">
              <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 font-bold text-lg drop-shadow-lg">
                {artwork.price}
              </p>
            </div>
          )}
        </div>

        {/* Corner Accent - Golden */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-400/40 to-transparent rounded-bl-3xl" />
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-yellow-400/30 to-transparent rounded-tr-3xl" />
      </div>

      {/* Floating particles effect - Golden */}
      {isActive && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-1 h-1 bg-amber-300 rounded-full animate-pulse" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
          <div className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse" style={{ top: '30%', right: '15%', animationDelay: '0.5s' }} />
          <div className="absolute w-1 h-1 bg-amber-400 rounded-full animate-pulse" style={{ bottom: '20%', left: '20%', animationDelay: '1s' }} />
        </div>
      )}
    </div>
  );
}

// Train Artwork Frame Component - Simplified for train carousel
function TrainArtworkFrame({ artwork, isActive = false }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-6 bg-gradient-to-br from-slate-950 to-amber-950">
      {/* Image Section */}
      <div className="relative flex-1 mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-amber-900 to-yellow-900">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-yellow-900 flex items-center justify-center">
            <div className="text-amber-300 text-xs animate-pulse">Loading...</div>
          </div>
        )}
        
        <img
          src={artwork.image}
          alt={artwork.title}
          onLoad={() => setIsLoaded(true)}
          className="w-full h-full object-cover transition-all duration-500"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23451a03" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%23fcd34d" font-family="Arial" font-size="14"%3EArtwork%3C/text%3E%3C/svg%3E';
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-50" />
      </div>

      {/* Content Section */}
      <div className="space-y-2">
        <h3 className={`font-bold truncate drop-shadow-lg transition-all duration-300 ${
          isActive ? 'text-amber-100 text-lg' : 'text-amber-200 text-sm'
        }`}>
          {artwork.title}
        </h3>
        
        <p className="text-amber-200/70 text-xs truncate">{artwork.artist}</p>
        
        {isActive && (
          <div className="pt-2 border-t border-amber-400/30">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-400 font-bold text-sm drop-shadow-lg">
              {artwork.price}
            </p>
          </div>
        )}
      </div>

      {/* Corner Accent */}
      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-amber-400/40 to-transparent rounded-bl-2xl pointer-events-none" />
    </div>
  );
}
