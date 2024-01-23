import React, { useState } from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/testi-bg.jpg';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link to="https://www.instagram.com/">
        <img src={logo} alt="" className='logo' /> <span className='logo-name'>Medicity</span>
        
      </Link>
      <div>
        <ul id='navbar' className={clicked ? 'navbar active' : 'navbar'}>
          <li className='li'><NavLink to="/aboutus" className="bn5">About Us</NavLink></li>
          <li className='li'><NavLink to="/location" className="bn5">Location</NavLink></li>
          <li className='li'><NavLink to="/appointment" className="bn5">Appointment</NavLink></li>
          <li className='li'><NavLink to="/signup" className="bn5">Sign Up</NavLink></li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick}>
        <li id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></li>
      </div>
    </nav>
  );
};

export default Navbar;
