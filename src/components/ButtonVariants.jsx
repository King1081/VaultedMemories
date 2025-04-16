import React from 'react';

const ButtonVariants = () => {
  return (
    <div className="flex space-x-4 p-8 bg-pink-50 min-h-screen items-center justify-center">
      {/* Primary Button */}
      <button className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition">
        Primary
      </button>

      {/* Secondary Button */}
      <button className="bg-white text-pink-500 border border-pink-500 px-6 py-3 rounded-full font-semibold hover:bg-pink-100 transition">
        Secondary
      </button>

      {/* Disabled Button */}
      <button
        className="bg-gray-300 text-gray-500 px-6 py-3 rounded-full font-semibold cursor-not-allowed"
        disabled
      >
        Disabled
      </button>
    </div>
  );
};

export default ButtonVariants;