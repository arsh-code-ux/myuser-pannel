import React from 'react';

export function GalleriesSection() {
  const galleries = [
    { id: 1, name: 'Metropolitan Heritage', location: 'New York - USA', image: 'bg-gray-600' },
    { id: 2, name: 'Classical Collections', location: 'London - UK', image: 'bg-gray-500' },
    { id: 3, name: 'Ancient Treasures', location: 'Paris - France', image: 'bg-gray-400' },
    { id: 4, name: 'Eastern Wonders', location: 'Tokyo - Japan', image: 'bg-gray-450' },
  ];

  const categories = [
    'Indian Heritage Galleries',
    'Asian Art Collections',
    'European Museums',
    'Contemporary Collections',
    'Private Galleries',
    'All galleries →'
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="luxury-container">
        <div className="mb-12">
          <p className="section-subtitle">Curated Networks</p>
          <h2 className="section-title">Featured Galleries</h2>
          <p className="text-gray-600">Discover our network of prestigious galleries worldwide</p>
        </div>

        {/* Gallery Feature */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
          {/* Featured Gallery */}
          <div className="bg-white p-8 rounded-lg">
            <div className="w-full h-48 bg-gradient-to-br from-yellow-900 to-yellow-700 rounded-lg mb-6 flex items-center justify-center">
              <div className="text-white text-4xl font-serif font-bold">⬤</div>
            </div>
            <h3 className="text-2xl font-serif font-bold mb-2">Ziggurat Heritage Gallery</h3>
            <p className="text-gray-600 text-sm mb-4">NEW DELHI, INDIA</p>
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              Welcome to our flagship gallery. We curate an exceptional collection of rare artifacts and cultural treasures. Our dedication to authenticity, preservation, and education makes us a leader in heritage curation. We provide expert guidance and secure transactions for collectors worldwide.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span className="text-lg">★</span>
                <span className="text-gray-600">Trusted Partner since 2015</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">◐</span>
                <span className="text-gray-600">500+ artifacts authenticated</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-lg">◉</span>
                <span className="text-gray-600">Premium Seller</span>
              </p>
            </div>
            <button className="mt-6 luxury-button">Discover</button>
          </div>

          {/* Other Galleries */}
          <div className="space-y-4">
            {galleries.map((gallery) => (
              <div
                key={gallery.id}
                className="flex gap-4 hover:bg-white p-4 rounded-lg transition cursor-pointer"
              >
                <div className={`${gallery.image} w-24 h-24 rounded-lg flex-shrink-0`}></div>
                <div>
                  <h4 className="font-medium text-sm mb-1">{gallery.name}</h4>
                  <p className="text-xs text-gray-600">{gallery.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-black hover:bg-black hover:text-white transition"
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
