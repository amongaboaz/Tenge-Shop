// src/CapeCards.js
import React from 'react';
import './Capes.css';
import cape_9 from '../Assets/cap9.jpg';
import cape_8 from '../Assets/cap8.jpg';
import cape_7 from '../Assets/cap7.jpg';
import cape_6 from '../Assets/cap6.jpg';
import cape_5 from '../Assets/cap5.jpg';
import cape_4 from '../Assets/cap4.jpg';
import cape_3 from '../Assets/cap3.jpg';
import cape_2 from '../Assets/cap2.jpg';

const Capes = () => {
  return (
    <div className="cape-cards">
      <h1>Shop Capes</h1>
      {/* First row */}
      <div className="cape-row">
        <div className="cape-card">
          <img src={cape_2} alt="Cape 1" />
          <h2>Cape 1</h2>
          <p>Description of Cape 1</p>
          <button>Add to Cart</button>
        </div>
        <div className="cape-card">
          <img src={cape_3} alt="Cape 2" />
          <h2>Cape 2</h2>
          <p>Description of Cape 2</p>
          <button>Add to Cart</button>
        </div>
        <div className="cape-card">
          <img src={cape_4} alt="Cape 3" />
          <h2>Cape 3</h2>
          <p>Description of Cape 3</p>
          <button>Add to Cart</button>
        </div>
        <div className="cape-card">
          <img src={cape_5} alt="Cape 4" />
          <h2>Cape 4</h2>
          <p>Description of Cape 4</p>
          <button>Add to Cart</button>
        </div>
      </div>
      {/* Second row */}
      <div className="cape-row">
        <div className="cape-card">
          <img src={cape_6} alt="Cape 5" />
          <h2>Cape 5</h2>
          <p>Description of Cape 5</p>
          <button>Add to Cart</button>
        </div>
        <div className="cape-card">
          <img src={cape_7} alt="Cape 6" />
          <h2>Cape 6</h2>
          <p>Description of Cape 6</p>
          <button>Add to Cart</button>
        </div>
        <div className="cape-card">
          <img src={cape_8} alt="Cape 7" />
          <h2>Cape 7</h2>
          <p>Description of Cape 7</p>
          <button>Add to Cart</button>
        </div>
        <div className="cape-card">
          <img src={cape_9} alt="Cape 8" />
          <h2>Cape 8</h2>
          <p>Description of Cape 8</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Capes;
