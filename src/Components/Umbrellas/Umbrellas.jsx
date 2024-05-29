// src/Components/Umbrellas/Umbrellas.jsx
import React from 'react';
import './Umbrellas.css'; // Import CSS if needed

import umbrella_1 from '../Assets/umbrella-1.jpg';
import umbrella_2 from '../Assets/umbrella-2.jpg';
import umbrella_3 from '../Assets/umbrella-3.jpg';
import umbrella_4 from '../Assets/umbrella-4.jpg';
import umbrella_5 from '../Assets/umbrella-5.jpg';
import umbrella_6 from '../Assets/umbrella-6.jpg';
import umbrella_7 from '../Assets/umbrella-7.jpg';
import umbrella_8 from '../Assets/umbrella-8.jpg';

const Umbrellas = () => {
  return (
    <div className="umbrella-cards">
      <h1>Shop Umbrellas</h1>
      {/* First row */}
      <div className="umbrella-row">
        <div className="umbrella-card">
          <img src={umbrella_1} alt="Umbrella 1" />
          <h2>Umbrella 1</h2>
          <p>Description of Umbrella 1</p>
          <button>Add to Cart</button>
        </div>
        <div className="umbrella-card">
          <img src={umbrella_2} alt="Umbrella 2" />
          <h2>Umbrella 2</h2>
          <p>Description of Umbrella 2</p>
          <button>Add to Cart</button>
        </div>
        <div className="umbrella-card">
          <img src={umbrella_3} alt="Umbrella 3" />
          <h2>Umbrella 3</h2>
          <p>Description of Umbrella 3</p>
          <button>Add to Cart</button>
        </div>
        <div className="umbrella-card">
          <img src={umbrella_4} alt="Umbrella 4" />
          <h2>Umbrella 4</h2>
          <p>Description of Umbrella 4</p>
          <button>Add to Cart</button>
        </div>
      </div>
      {/* Second row */}
      <div className="umbrella-row">
        <div className="umbrella-card">
          <img src={umbrella_5} alt="Umbrella 5" />
          <h2>Umbrella 5</h2>
          <p>Description of Umbrella 5</p>
          <button>Add to Cart</button>
        </div>
        <div className="umbrella-card">
          <img src={umbrella_6} alt="Umbrella 6" />
          <h2>Umbrella 6</h2>
          <p>Description of Umbrella 6</p>
          <button>Add to Cart</button>
        </div>
        <div className="umbrella-card">
          <img src={umbrella_7} alt="Umbrella 7" />
          <h2>Umbrella 7</h2>
          <p>Description of Umbrella 7</p>
          <button>Add to Cart</button>
        </div>
        <div className="umbrella-card">
          <img src={umbrella_8} alt="Umbrella 8" />
          <h2>Umbrella 8</h2>
          <p>Description of Umbrella 8</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Umbrellas;
