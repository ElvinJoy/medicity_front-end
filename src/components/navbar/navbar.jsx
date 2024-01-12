import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/Medicity Logo - Original - 5000x5000.png'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <a href="#">
        <img src={logo} alt="" className='logo' /> <span className='logo-name'>Medicity</span>
      </a>
      <div>
        <ul id='navbar' className={clicked ? 'navbar active' : 'navbar'}>
          <li><a href="/" class="bn5">About Us</a></li>
          <li><a href="/" class="bn5">Contact Us</a></li>
          <li><a href="/" class="bn5">Appoinment</a></li>
          <li><a href="/" class="bn5">Sign Up</a></li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick}>
        <li id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></li>
      </div>
    </nav>
  );
};

export default Navbar;
