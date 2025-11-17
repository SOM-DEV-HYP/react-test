import React from 'react';
import './Footer.css';
import { FaTwitter, FaFacebookF, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import Logo from './logo.png'; 

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
           <div className="footer-logo">
              <img src={Logo} alt="BelleWest Logo" className="footer-logo-img" />
            </div>
            <p className="footer-desc">We have clothes that suits your style and which you’re proud to wear.<br/>From women to men.</p>
            <div className="footer-socials">
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaGithub /></a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>FEATURES</h4>
              <ul>
                <li><a href="#">Style Vibes</a></li>
                <li><a href="#">Collections</a></li>
                <li><a href="#">The Runway</a></li>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Trending</a></li>
              </ul>
            </div>
            <div>
              <h4>SHOPPING</h4>
              <ul>
                <li><a href="#">Your Cart</a></li>
                <li><a href="#">Your Order</a></li>
                <li><a href="#">Compared Items</a></li>
                <li><a href="#">Wishlist</a></li>
                <li><a href="#">Shipping Details</a></li>
              </ul>
            </div>
            <div>
              <h4>HELP</h4>
              <ul>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Delivery Details</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">FAQ’s</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-subscribe">
            <h4>Stay In Touch</h4>
            <p>Stay in touch to get special offers, free giveaways and once in a lifetime deals</p>
            <div className="subscribe-box">
              <FiMail className="mail-icon" size={20} />
              <input type="email" placeholder="Enter your email" />
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <div className="footer-payments">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/visa.svg" alt="Visa" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mastercard.svg" alt="Mastercard" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/paypal.svg" alt="PayPal" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/applepay.svg" alt="Apple Pay" />
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/googlepay.svg" alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
