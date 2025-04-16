import React, { useState } from 'react';

const ImageUploadForm = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-pink-600 mb-4 text-center">
          Upload Your Image
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="image-upload"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Choose an image
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-900 border border-pink-300 rounded-lg cursor-pointer bg-pink-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>
          {image && (
            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Preview:</p>
              <img
                src={image}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg border border-pink-300"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-pink-600 transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUploadForm;