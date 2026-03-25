import React from 'react';
import image5 from '../image5.jpg';
import image4 from '../image4.jpg';
import image3 from '../image3.jpg';
import image2 from '../image2.jpg';
import image12 from '../image 12.jpg';

export function CollectionsSection() {
  const collections = [
    { id: 1, name: 'Ancient Civilizations', description: 'Artifacts from Egypt, Mesopotamia, and beyond', image: image5 },
    { id: 2, name: 'Asian Heritage', description: 'Treasures from India, China, and Southeast Asia', image: image4 },
    { id: 3, name: 'European Classics', description: 'Art and artifacts from Renaissance to Modern', image: image3 },
    { id: 4, name: 'Contemporary Works', description: 'Modern interpretations of heritage themes', image: image2 },
    { id: 5, name: 'Rare Manuscripts', description: 'Historical documents and illuminated texts', image: image12 },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="luxury-container">
        <div className="mb-12">
          <p className="section-subtitle">Curated Collections</p>
          <h2 className="section-title">Collection Highlights</h2>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="rounded-lg overflow-hidden aspect-square flex items-end p-6 text-white hover:shadow-xl transition-shadow cursor-pointer group relative"
            >
              <img 
                src={collection.image} 
                alt={collection.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="relative z-10">
                <h3 className="font-serif text-lg font-bold">{collection.name}</h3>
                <p className="text-xs opacity-90 group-hover:opacity-100 transition">{collection.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
