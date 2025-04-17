import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto pt-4 pb-3 w-100">
      <div className="container">
        <div className="row">
          
          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li><Link to="/service" className="text-light text-decoration-none">Service</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4">
            <h5>Contact</h5>
            <p>Email: info@carservice.com</p>
            <p>Phone: +254-712-345678</p>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <a href="#" className="text-light me-3"><i className="fab fa-facebook fa-lg"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-twitter fa-lg"></i></a>
            <a href="#" className="text-light me-3"><i className="fab fa-instagram fa-lg"></i></a>
            <a href="#" className="text-light"><i className="fab fa-linkedin fa-lg"></i></a>
          </div>

        </div>

        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} Car Service Booking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
