// Carts.js

import React from 'react';
import './Cart.css'; 

const Cart = () => {
  
  const cartItems = [
    { id: 1, name: 'Cape 1', price: 20, image: '../Assets/cap10.jpg' },
    { id: 2, name: 'Hoodie 1', price: 30, image: '../Assets/hoodie-1.jpg' },
    { id: 3, name: 'T-shirt 1', price: 15, image: '../Assets/tshirt-5.jpg' },
    { id: 3, name: 'Umbrella 1', price: 15, image: '../Assets/umbrella-5.jpg' },
    
  ];

  return (
    <div className="carts">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={require(`../Assets/${item.image}`).default} alt={item.name} />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Price: ${item.price}</p>
              
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default Cart;
