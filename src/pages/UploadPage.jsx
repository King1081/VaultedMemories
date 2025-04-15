import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
function UploadPage({ onMemoryAdded }) {
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const fileInputRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (photo) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(photo);
    }
  }, [photo]);

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };

  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleClear = () => {
    setPhoto(null);
    setCaption('');
    setCategory('');
    setDate('');
    setPreviewUrl('');
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (photo && caption && category && date) {
      try {
        const storageRef = ref(storage, `images/${photo.name}`);
        await uploadBytes(storageRef, photo);
        const imageUrl = await getDownloadURL(storageRef);

        const memory = {
          caption,
          category,
          date,
          imageUrl,
          createdAt: new Date(),
        };
        await addDoc(collection(db, "memories"), memory);
        onMemoryAdded(memory);
        handleClear();
      } catch (error) {
        console.error("Error adding memory: ", error);
      }
    }
  };

  const handleOpenFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-4">
      {/* Photo Preview */}
      <div className="w-full md:w-1/2">
        <div className="border border-gray-300 p-4 rounded-lg">
        {previewUrl ? (
            <img src={previewUrl} alt="Preview" className="w-full h-auto max-h-96 object-contain" />
          ) : (
            <div className="w-full h-96 flex items-center justify-center">
              <p className="text-gray-500">No photo selected</p>
            </div>
          )}
        </div>
        <button className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleOpenFileDialog}>
          Select photo
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handlePhotoChange}
          className="hidden"
        />
      </div>

       {/* Form */}
      <div className="w-full md:w-1/2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="caption" className="mb-1">Caption:</label>
            <input type="text" id="caption" value={caption} onChange={handleCaptionChange} className="border border-gray-300 p-2 rounded" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category" className="mb-1">Category:</label>
            <input type="text" id="category" value={category} onChange={handleCategoryChange} className="border border-gray-300 p-2 rounded" required />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date" className="mb-1">Date:</label>
            <input type="date" id="date" value={date} onChange={handleDateChange} className="border border-gray-300 p-2 rounded" required />
          </div>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add Memory
          </button>
          <button type="button" onClick={handleClear} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Clear
          </button>
          <div className="flex justify-start">
            <button type="button" onClick={() => navigate(-1)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
              Back
            </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default UploadPage;