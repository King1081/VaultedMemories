import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreviewPage = ({ memories, dedication }) => {
  const navigate = useNavigate();

  console.log(memories);
  console.log(dedication);

  const handleBack = () => {
    navigate(-1); // Navigate back one step
  };

  const handleForward = () => {
    navigate(1); // Navigate forward one step (if possible)
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Preview Your Memory Book</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Example of a page layout */}
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Page 1</h2>
          {dedication && (
            <div className="border p-2 rounded-md">
              <p className="text-gray-600">{dedication}</p>
            </div>
          )}
        </div>
        {memories &&
          memories.map((memory, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Memory {index + 1}</h2>
              <img src={memory.photo} alt={memory.caption} className="w-full h-auto max-h-96 object-cover rounded-md mb-2" />
              <p className="text-gray-700">{memory.caption}</p>
              <p className="text-sm text-gray-500 mt-1">{memory.date} - {memory.category}</p>
            </div>
          ))
        }
          <div className="border p-2 rounded-md">
            <p className="text-gray-600">Example text content for page 2.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
        >
          Back
          
        <button
          onClick={handleForward}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          disabled={true} // Disable forward button as there's no forward navigation in this context
        >
          Forward
        </button>
        {/* Optionally, keep the Save Book button if needed */}
      </div>
    </div>
  );
};

export default PreviewPage;