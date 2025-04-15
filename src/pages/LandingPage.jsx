import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 text-gray-800 p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-6xl font-playfair text-center mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Vaulted Memories
      </motion.h1>
      <motion.p
        className="text-xl text-center mb-8 max-w-md"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Create a beautiful memory book filled with your most cherished moments.
      </motion.p>
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link to="/categories">
          <button className="bg-purple-300 hover:bg-purple-400 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            Start Your Journey
          </button>
        </Link>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-48 pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="hsl(340, 100%, 97%)" points="0,0 0,100 100,100" />
          </svg>
        </div>
    </motion.div>
  );
};

export default LandingPage;