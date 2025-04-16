import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-lg">
        <h1 className="text-4xl font-extrabold text-pink-600 mb-4">
          Welcome to Vaulted Memories
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Capture, organize, and cherish your most treasured moments in one place.
        </p>
        <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;