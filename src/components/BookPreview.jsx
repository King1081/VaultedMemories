import React from 'react';
import './BookPreview.css'; // Import the CSS file for animations

const BookPreview = () => {
  const pages = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      caption: 'A Beautiful Sunset',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      caption: 'Cherished Memories',
    },
  ];

  return (
    <div className="relative bg-pink-50 min-h-screen py-8 flex items-center justify-center overflow-hidden">
      {/* Floating Hearts */}
      <div className="floating-hearts"></div>

      <div className="bg-white shadow-lg rounded-lg border border-pink-200 p-6 flex flex-col md:flex-row gap-6 relative z-10">
        {pages.map((page) => (
          <div
            key={page.id}
            className="flex-1 bg-pink-100 rounded-lg p-4 border border-pink-300 shadow-md"
          >
            <img
              src={page.image}
              alt={page.caption}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p className="text-center text-pink-700 font-medium">{page.caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookPreview;