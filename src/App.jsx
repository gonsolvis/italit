import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './NavFooter/Nav';
import Footer from './NavFooter/Footer';
import HomePage from './HomePage/HomePage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 
function App() {
  return (
    <Router>
      <div className='appComp'>
        <Nav />
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
