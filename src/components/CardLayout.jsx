import React from 'react';

const CardLayout = () => {
  const cards = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      caption: 'A Beautiful Memory',
      date: 'April 16, 2025',
      category: 'Travel',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      caption: 'Cherished Moments',
      date: 'March 10, 2025',
      category: 'Family',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      caption: 'Unforgettable Adventure',
      date: 'February 5, 2025',
      category: 'Adventure',
    },
  ];

  return (
    <div className="bg-pink-50 min-h-screen py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden border border-pink-200"
          >
            <img
              src={card.image}
              alt={card.caption}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-pink-600">{card.caption}</h3>
              <p className="text-sm text-gray-500">{card.date}</p>
              <span className="inline-block mt-2 bg-pink-100 text-pink-600 text-xs font-medium px-3 py-1 rounded-full">
                {card.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;