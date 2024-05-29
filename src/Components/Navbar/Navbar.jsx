// src/Components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo_1 from '../Assets/logo.jpg'; // Update the path to your logo
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo_1} alt="Logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/t-shirts">T-shirts</Link></li>
        <li className="navbar-item"><Link to="/capes">Capes</Link></li>
        <li className="navbar-item"><Link to="/hoodies">Hoodies</Link></li>
        <li className="navbar-item"><Link to="/umbrellas">Umbrellas</Link></li> {/* Add this line */}
        <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
      </ul>
      <div className="navbar-cart">
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    </nav>
  );
};

export default Navbar;
