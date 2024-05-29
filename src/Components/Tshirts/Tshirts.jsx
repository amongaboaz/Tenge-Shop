// src/Components/Tshirts/Tshirts.jsx
import React from 'react';
import './Tshirts.css'; // Import CSS if needed

import tshirt_1 from '../Assets/tshirt-1.jpg';
import tshirt_2 from '../Assets/tshirt-2.jpg';
import tshirt_3 from '../Assets/tshirt-3.jpg';
import tshirt_4 from '../Assets/tshirt-4.jpg';
import tshirt_5 from '../Assets/tshirt-5.jpg';
import tshirt_6 from '../Assets/tshirt-6.jpg';
import tshirt_7 from '../Assets/tshirt-7.jpg';
import tshirt_8 from '../Assets/tshirt-8.jpg';

const Tshirts = () => {
  return (
    <div className="tshirt-cards">
      <h1>Shop T-shirts</h1>
      {/* First row */}
      <div className="tshirt-row">
        <div className="tshirt-card">
          <img src={tshirt_1} alt="T-shirt 1" />
          <h2>T-shirt 1</h2>
          <p>Description of T-shirt 1</p>
          <button>Add to Cart</button>
        </div>
        <div className="tshirt-card">
          <img src={tshirt_2} alt="T-shirt 2" />
          <h2>T-shirt 2</h2>
          <p>Description of T-shirt 2</p>
          <button>Add to Cart</button>
        </div>
        <div className="tshirt-card">
          <img src={tshirt_3} alt="T-shirt 3" />
          <h2>T-shirt 3</h2>
          <p>Description of T-shirt 3</p>
          <button>Add to Cart</button>
        </div>
        <div className="tshirt-card">
          <img src={tshirt_4} alt="T-shirt 4" />
          <h2>T-shirt 4</h2>
          <p>Description of T-shirt 4</p>
          <button>Add to Cart</button>
        </div>
      </div>
      {/* Second row */}
      <div className="tshirt-row">
        <div className="tshirt-card">
          <img src={tshirt_5} alt="T-shirt 5" />
          <h2>T-shirt 5</h2>
          <p>Description of T-shirt 5</p>
          <button>Add to Cart</button>
        </div>
        <div className="tshirt-card">
          <img src={tshirt_6} alt="T-shirt 6" />
          <h2>T-shirt 6</h2>
          <p>Description of T-shirt 6</p>
          <button>Add to Cart</button>
        </div>
        <div className="tshirt-card">
          <img src={tshirt_7} alt="T-shirt 7" />
          <h2>T-shirt 7</h2>
          <p>Description of T-shirt 7</p>
          <button>Add to Cart</button>
        </div>
        <div className="tshirt-card">
          <img src={tshirt_8} alt="T-shirt 8" />
          <h2>T-shirt 8</h2>
          <p>Description of T-shirt 8</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Tshirts;
