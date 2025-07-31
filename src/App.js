import React from  'react';

import { BrowserRouter,Routes, Route } from "react-router-dom";

import './App.css';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Industries from './components/Industries';
import Studies from './components/Studies';
import Technologies from './components/Technologies';
import Insights from './components/Insights';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
         <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
