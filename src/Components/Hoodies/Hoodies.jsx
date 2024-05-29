// src/Components/Hoodies/Hoodies.jsx
import React from 'react';
import './Hoodies.css';

import hoodie_1 from '../Assets/hoodie-1.jpg';
import hoodie_2 from '../Assets/hoodie-2.jpg';
import hoodie_3 from '../Assets/hoodie-3.jpg';
import hoodie_4 from '../Assets/hoodie-4.jpg';
import hoodie_5 from '../Assets/hoodie-5.jpg';
import hoodie_6 from '../Assets/hoodie-6.jpg';
import hoodie_7 from '../Assets/hoodie-7.jpg';
import hoodie_8 from '../Assets/hoodie-8.jpg';

const Hoodies = () => {
  return (
    <div className="hoodie-cards">
      <h1>Shop Hoodies</h1>
      {/* First row */}
      <div className="hoodie-row">
        <div className="hoodie-card">
          <img src={hoodie_1} alt="Hoodie 1" />
          <h2>Hoodie 1</h2>
          <p>Description of Hoodie 1</p>
          <button>Add to Cart</button>
        </div>
        <div className="hoodie-card">
          <img src={hoodie_2} alt="Hoodie 2" />
          <h2>Hoodie 2</h2>
          <p>Description of Hoodie 2</p>
          <button>Add to Cart</button>
        </div>
        <div className="hoodie-card">
          <img src={hoodie_3} alt="Hoodie 3" />
          <h2>Hoodie 3</h2>
          <p>Description of Hoodie 3</p>
          <button>Add to Cart</button>
        </div>
        <div className="hoodie-card">
          <img src={hoodie_4} alt="Hoodie 4" />
          <h2>Hoodie 4</h2>
          <p>Description of Hoodie 4</p>
          <button>Add to Cart</button>
        </div>
      </div>
      {/* Second row */}
      <div className="hoodie-row">
        <div className="hoodie-card">
          <img src={hoodie_5} alt="Hoodie 5" />
          <h2>Hoodie 5</h2>
          <p>Description of Hoodie 5</p>
          <button>Add to Cart</button>
        </div>
        <div className="hoodie-card">
          <img src={hoodie_6} alt="Hoodie 6" />
          <h2>Hoodie 6</h2>
          <p>Description of Hoodie 6</p>
          <button>Add to Cart</button>
        </div>
        <div className="hoodie-card">
          <img src={hoodie_7} alt="Hoodie 7" />
          <h2>Hoodie 7</h2>
          <p>Description of Hoodie 7</p>
          <button>Add to Cart</button>
        </div>
        <div className="hoodie-card">
          <img src={hoodie_8} alt="Hoodie 8" />
          <h2>Hoodie 8</h2>
          <p>Description of Hoodie 8</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Hoodies;
