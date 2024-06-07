// 
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header">
      <div className="navbar">
        <div className="brand">
          <h2>Brand</h2>
        </div>
        <div className="links">
          <Link to="/" className="btn">Home</Link>
          <Link to="/places" className="btn">Places</Link>
          <Link to="/events" className="btn">Events</Link>
          <Link to="/contact" className="btn">Contact</Link>
          <Link to="/about" className="btn">About</Link>
        </div>
      </div>
    </div>
  );
}

