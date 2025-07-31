import React from 'react';
import '../css/Footer.css';
import {Link} from 'react-router-dom';
import  './Navbar.css';

const Footer=()=>{

        return(
       <div className="footer">
        {/* <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 position fixed margin 20px py-3 fixed-bottom"></nav> */}
             <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed bottom-0 w-full mb-2 py-3">
                 <div className="container">
  <Link className="navbar-brand" to="">***</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarCollapse mx-auto">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="">Facebook </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="">Twitter</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="">LinkedIn</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="">Instagram</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to=""> &copy; {new Date().getFullYear()} Softwallet Pvt.Ltd All rights reserved.</Link>
      </li>
     
    </ul>
         </div>
         </div>
         </nav>
         </div>
         
        );
    }


export default Footer;