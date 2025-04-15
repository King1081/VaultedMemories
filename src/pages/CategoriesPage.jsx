import React from 'react';
import { Link } from 'react-router-dom'; // Ensure this import is correct

const CategoriesPage = () => {
  const categories = [
    { name: 'Weddings', icon: '💍' },
    { name: 'Travel', icon: '✈️' },
    { name: 'Graduation', icon: '🎓' },
    { name: 'Baby Pictures', icon: '👶' },
    { name: 'Family Moments', icon: '👨‍👩‍👧‍👦' },
    { name: 'Lovers\' Nook', icon: '❤️' },
    { name: 'Customize', icon: '✨' },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Choose a Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link to={`/categories/${category.name}`} key={category.name}>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <span className="text-5xl mb-4 block">{category.icon}</span>
                <h2 className="text-xl font-semibold">{category.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;