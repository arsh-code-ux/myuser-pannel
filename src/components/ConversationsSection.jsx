import React from 'react';

export function ConversationsSection() {
  const conversations = [
    { id: 1, name: 'Heritage Expert', role: 'Cultural Advisor', image: 'bg-pink-400' },
    { id: 2, name: 'Museum Curator', role: 'Collection Manager', image: 'bg-gray-700' },
    { id: 3, name: 'Restoration Master', role: 'Artifact Specialist', image: 'bg-red-600' },
    { id: 4, name: 'Collector\'s Guide', role: 'Investment Advisor', image: 'bg-orange-300' },
  ];

  return (
    <section className="py-8 md:py-16 lg:py-24">
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 md:gap-8 mb-8 md:mb-12">
          <div>
            <p className="text-xs md:text-sm text-gray-500 uppercase tracking-widest mb-2 md:mb-3">Insights & Knowledge</p>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black">Conversations with Experts</h2>
          </div>
          <a href="#" className="hidden md:inline-block px-6 md:px-8 py-2 md:py-2.5 border border-black bg-black text-white font-medium rounded-full hover:bg-white hover:text-black transition text-xs md:text-sm">Read more →</a>
        </div>

        {/* Conversations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 mb-6 md:mb-12">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`${conversation.image} rounded-lg overflow-hidden aspect-square flex items-end p-3 md:p-4 lg:p-6 text-white hover:shadow-xl transition-shadow cursor-pointer`}
            >
              <div>
                <h3 className="font-serif text-xs md:text-sm lg:text-lg font-bold">{conversation.name}</h3>
                <p className="text-xs md:text-xs lg:text-sm opacity-90">{conversation.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center md:hidden">
          <a href="#" className="px-6 py-2 border border-black bg-black text-white font-medium rounded-full hover:bg-white hover:text-black transition text-xs inline-block">Read more →</a>
        </div>
      </div>
    </section>
  );
}
