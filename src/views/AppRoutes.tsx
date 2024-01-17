import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BridalShower from './pages/BridalShower';
import Home from './pages/Home';
import NavBar from './NavBar';
import Footer from './Footer';

function AppRoutes() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bridal-shower" element={<BridalShower />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;