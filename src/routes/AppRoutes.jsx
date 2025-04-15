import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../pages/LandingPage.jsx';
import CategoriesPage from '../pages/CategoriesPage.jsx';
import CategoryPage from '../pages/CategoryPage.jsx';
import UploadPage from '../pages/UploadPage.jsx';
import PreviewPage from '../pages/PreviewPage.jsx';
import PrintPage from '../pages/PrintPage.jsx';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/categories/:categoryName" element={<CategoryPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/preview" element={<PreviewPage />} />
        <Route path="/print-preview" element={<PrintPage />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;