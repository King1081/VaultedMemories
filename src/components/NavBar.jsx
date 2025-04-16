import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-purple-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Vaulted Memories
        </Link>
        <div className="space-x-4">
          <Link to="/categories" className="text-white hover:text-gray-200">
            Categories
          </Link>
          <Link to="/upload" className="text-white hover:text-gray-200">
            Upload
          </Link>
          <Link to="/login" className="text-white hover:text-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;