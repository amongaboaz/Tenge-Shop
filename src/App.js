// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Tshirts from './Components/Tshirts/Tshirts'; 
import Capes from './Components/Capes/Capes';
import Hoodies from './Components/Hoodies/Hoodies'; 
import Umbrellas from './Components/Umbrellas/Umbrellas'; 
import Contact from './Components/Contact Us/Contact Us';
import Footer from './Components/Footer/Footer';
import './App.css';


const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/t-shirts" element={<Tshirts />} />
          <Route path="/capes" element={<Capes />} />
          <Route path="/hoodies" element={<Hoodies />} />
          <Route path="/umbrellas" element={<Umbrellas />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
       
        <Footer />
      </div>
    </Router>
  );
};

export default App;
