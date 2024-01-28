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
        <li><a href="/home">Home</a></li>
        <li><a href="https://www.aa.com/i18n/customer-service/about-us/about-us.jsp">About</a></li>
        <li><a href="https://www.aa.com/i18n/customer-service/contact-american/american-customer-service.jsp">Services</a></li>
        <li><a href="https://www.aa.com/i18n/customer-service/contact-american/reservations-and-ticket-changes.jsp">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavBar;