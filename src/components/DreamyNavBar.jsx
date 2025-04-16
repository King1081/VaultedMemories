import React from 'react';
import { Link } from 'react-router-dom';

const DreamyNavBar = () => {
  return (
    <nav className="bg-pink-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-pink-600 text-2xl font-bold">
          Vaulted Memories
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Home
          </Link>
          <Link
            to="/categories"
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Categories
          </Link>
          <Link
            to="/upload"
            className="text-gray-700 hover:text-pink-500 transition font-medium"
          >
            Upload
          </Link>
        </div>
        <button className="md:hidden text-pink-600 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default DreamyNavBar;