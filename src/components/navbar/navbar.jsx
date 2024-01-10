import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/wavelayer2_blue.svg'

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
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">about Us</a></li>
          <li><a href="#">Assignments</a></li>
          <li><a href="#">Signup</a></li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick}>
        <li id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></li>
      </div>
    </nav>
  );
};

export default Navbar;
