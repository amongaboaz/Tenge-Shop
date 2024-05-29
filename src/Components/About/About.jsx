import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './About.css';

import hoodie_1 from '../Assets/hoodie-1.jpg';
import cape_1 from '../Assets/cape-1.jpg';
import umberella_1 from '../Assets/umberella-1.jpg';
import t_shirts from '../Assets/t-shirt-1.jpg';

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-header">
        <h1>Tenge Merchandise Shop</h1>
        <p>New Stock Available</p>
      </div>
      <div className="about-cards">
        <div className="about-card">
          <img src={cape_1} alt="Capes" />
          <h2>Capes</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at neque eget libero facilisis vehicula.</p>
          <Link to="/capes"> 
            <button className="about-button">Capes</button>
          </Link>
        </div>
        <div className="about-card">
          <img src={hoodie_1} alt="Hoodies" />
          <h2>Hoodies</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at neque eget libero facilisis vehicula.</p>
          <Link to="/hoodies"> 
            <button className="about-button">Hoodies</button>
          </Link>
        </div>
        <div className="about-card">
          <img src={t_shirts} alt="T-shirts" />
          <h2>T-shirts</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at neque eget libero facilisis vehicula.</p>
          <Link to="/t-shirts"> 
            <button className="about-button">T-shirts</button>
          </Link>
        </div>
        <div className="about-card">
          <img src={umberella_1} alt="Umbrellas" />
          <h2>Umbrellas</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at neque eget libero facilisis vehicula.</p>
          <Link to="/umbrellas"> 
            <button className="about-button">Umbrellas</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
