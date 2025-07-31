import React from 'react';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import  './Navbar.css';

const Navbar=()=>{

        return(
         
             <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                 <div className="container">
  <Link className="navbar-brand" to="/"><img src={logo} alt="Logo" style={{ height: '40px' }} /></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">About</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Services">Services</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Products">Products</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Industries">Industries</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Studies">Case Studies</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Technologies">Technologies</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Insights">Insights</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Careers">Careers</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Contact">Contact</Link>
      </li>
       </ul>
      <ul className="navbar-nav ms-auto">
     
      <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Signup">Signup</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/Search">Search</Link>
      </li>
     
    </ul>
         </div>
         </div>
         </nav>
        );
    }


export default Navbar;