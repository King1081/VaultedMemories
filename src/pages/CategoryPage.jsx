import React from 'react';
import { useParams } from 'react-router-dom'; // Correct import

function CategoryPage() {
  const { categoryName } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        {categoryName
          ? `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} Category`
          : 'Category'}
      </h1>
      <p className="text-gray-600">
        {categoryName
          ? `Explore our collection of memories related to ${categoryName}.`
          : 'Please select a category from the previous page.'}
      </p>
      {/* Add more content specific to the category here */}
    </div>
  );
}

export default CategoryPage;