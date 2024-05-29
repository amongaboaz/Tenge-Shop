import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-card">
          <h2>Our Vision</h2>
          <p>Our vision is to become the leading provider of high-quality, stylish, and affordable merchandise that empowers individuals to express their unique identities.</p>
        </div>
        <div className="footer-card">
          <h2>Our Mission</h2>
          <p>Our mission is to deliver exceptional products and services that exceed our customers' expectations. We are committed to sourcing the finest materials, embracing innovative designs, and maintaining the highest standards of quality. </p>
        </div>
        <div className="footer-card">
          <h2>Quick Links</h2>
          <ul className="footer-nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-card">
          <h2>Contact Information</h2>
          <p>Email: info@tengemerch.com</p>
          <p>Phone: +254 456 7890</p>
          <p>Address: 1224 Nairobi Westlands, Moi Avenue, SH 12345</p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
          <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
        </div>
        <p>&copy; 2024 Tenge Merchandise Shop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
