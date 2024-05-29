// src/Components/Contact Us/ContactUs.jsx
import React from 'react';
import './Contact Us.css';

const ContactUs = () => {
  return (
    <div id="contact" className="contact">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
