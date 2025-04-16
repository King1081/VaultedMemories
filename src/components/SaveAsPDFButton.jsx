import React from 'react';

const SaveAsPDFButton = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <button className="bg-pink-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-pink-600 transition shadow-md hover:shadow-lg">
        Save as PDF
      </button>
    </div>
  );
};

export default SaveAsPDFButton;