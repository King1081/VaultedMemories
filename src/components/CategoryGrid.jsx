import React from 'react';

const CategoryGrid = () => {
  const categories = [
    { id: 1, title: 'Travel' },
    { id: 2, title: 'Family' },
    { id: 3, title: 'Adventure' },
    { id: 4, title: 'Food' },
    { id: 5, title: 'Nature' },
    { id: 6, title: 'Art' },
  ];

  return (
    <div className="bg-pink-50 min-h-screen py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-pink-100 text-pink-700 text-center p-6 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition transform"
          >
            <h3 className="text-xl font-bold">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
