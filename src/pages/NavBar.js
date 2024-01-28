import React from 'react';
import './NavBar.css'
import AA from '../assets/aalogowhite.png'
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={AA} alt="" />
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;