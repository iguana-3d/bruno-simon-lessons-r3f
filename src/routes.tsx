import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Lesson45 from './pages/Lesson45';

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lesson-45" element={<Lesson45 />} />
    </Routes>
  );
};

export default MainRoutes;
