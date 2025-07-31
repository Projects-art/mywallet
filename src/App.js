import React from  'react';

import { BrowserRouter,Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import About from './components/About';

import Careers from './components/Careers';
import Contact from './components/Contact';






function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />     
         <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
