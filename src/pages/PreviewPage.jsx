import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { jsPDF } from 'jspdf';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

const adminEmail = 'admin@example.com'; // Replace with your actual admin email

const PreviewPage = ({ memories, dedication }) => {
  const navigate = useNavigate();
  const [memoryList, setMemoryList] = useState(memories || []);
  const user = getAuth().currentUser;
  const isAdmin = user && user.email === adminEmail;

  console.log("memoryList", memoryList);
  console.log("memories", memories);
  const handleBack = () => navigate(-1);
  const handleGoHome = () => navigate('/');
  const handleSavePDF = () => {
    const doc = new jsPDF();
    let y = 10;

    if (dedication) {
      doc.text('Dedication:', 10, y);
      y += 10;
      doc.text(dedication, 10, y);
      y += 20;
    }

    memoryList.forEach((memory, index) => {
      doc.text(`Memory ${index + 1}`, 10, y);
      y += 10;
      doc.text(`Caption: ${memory.caption}`, 10, y);
      y += 10;
      doc.text(`Date: ${memory.date}`, 10, y);
      doc.text(`Category: ${memory.category}`, 10, y);
      y += 20;
    });

    doc.save('VaultedMemories.pdf');
  };

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "memories"), (snapshot) => {
      const fetchedMemories = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMemoryList(fetchedMemories);
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);



  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Preview Your Memory Book</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Dedication Page</h2>
          {dedication && (
            <div className="border p-2 rounded-md">
              <p className="text-gray-600">{dedication}</p>
            </div>
          )}
        </div>

        {memoryList?.map((memory, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Memory {index + 1}</h2>
            <img src={memory.photo} alt={memory.caption} className="w-full h-auto max-h-96 object-cover rounded-md mb-2" />
            <p className="text-gray-700">{memory.caption}</p>
            <p className="text-sm text-gray-500 mt-1">{memory.date} - {memory.category}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap justify-between gap-4">
        <button onClick={handleBack} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
          Back
        </button>

        <button onClick={handleGoHome} className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Go to Home
        </button>

        {isAdmin && (
          <button onClick={handleSavePDF} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Save as PDF
          </button>
        )}
      </div>
    </div>
  );
};

export default PreviewPage;
