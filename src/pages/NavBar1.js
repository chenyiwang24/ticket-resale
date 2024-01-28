import React from 'react';
import './NavBar1.css'
import AA from '../assets/a-icon.png'
const NavBar1 = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={AA} alt="" />
      </div>
      <div></div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar1;