import React from 'react';

export function ConversationsSection() {
  const conversations = [
    { id: 1, name: 'Heritage Expert', role: 'Cultural Advisor', image: 'bg-pink-400' },
    { id: 2, name: 'Museum Curator', role: 'Collection Manager', image: 'bg-gray-700' },
    { id: 3, name: 'Restoration Master', role: 'Artifact Specialist', image: 'bg-red-600' },
    { id: 4, name: 'Collector\'s Guide', role: 'Investment Advisor', image: 'bg-orange-300' },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="luxury-container">
        <div className="mb-12">
          <p className="section-subtitle">Insights & Knowledge</p>
          <h2 className="section-title">Conversations with Experts</h2>
        </div>

        {/* Conversations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {conversations.map((conversation) => (
            <div
              key={conversation.id}
              className={`${conversation.image} rounded-lg overflow-hidden aspect-square flex items-end p-6 text-white hover:shadow-xl transition-shadow cursor-pointer`}
            >
              <div>
                <h3 className="font-serif text-xl font-bold">{conversation.name}</h3>
                <p className="text-sm opacity-90">{conversation.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
