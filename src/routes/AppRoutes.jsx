import { Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import CategoriesPage from '../pages/CategoriesPage.jsx';
import CategoryPage from '../pages/CategoryPage.jsx';
import UploadPage from '../pages/UploadPage.jsx';
import PreviewPage from '../pages/PreviewPage.jsx';
import PrintPage from '../pages/PrintPage.jsx';
import LoginPage from '../pages/LoginPage.jsx';

function AppRoutes({ memories, addMemory, updateMemory, deleteMemory, handleDragEnd, dedication, updateDedication, adminMode, isLoggedIn }) {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/categories/:categoryName" element={<CategoryPage />} />
      <Route path="/upload" element={<UploadPage memories={memories} addMemory={addMemory} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/preview" element={<PreviewPage memories={memories} dedication={dedication} />} />
      <Route
        path="/print-preview"
        element={
          isLoggedIn && adminMode ? (
            <PrintPage
              componentRef={{ current: null }} // Provide a ref
            />
          ) : (
            <div>Not authorized</div>
          )
        }
      />
      <Route path="*" element={<div>Page not found</div>} />
    </Routes>
  );
}

export default AppRoutes;