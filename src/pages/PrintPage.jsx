import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintPage = ({ memories, dedication }) => {
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div className="p-8">
      <button
        onClick={handlePrint}
        className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
      >
        Print to PDF
      </button>
      <div ref={componentRef} className="mt-8 p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Your Memory Book</h1>
          {dedication && (
            <div className="handwritten-note p-4 mb-8">
              <p className="text-lg">{dedication}</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          {memories.map((memory, index) => (
            <div key={index} className="border border-gray-300 rounded-lg p-4">
              <img
                src={memory.photo}
                alt={memory.caption}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-2">
                <p className="text-sm font-semibold">{memory.caption}</p>
                <p className="text-xs text-gray-500">
                  Category: {memory.category}, Date: {memory.date}
                </p>
                {memory.notes && <p className="text-xs mt-2">{memory.notes}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintPage;