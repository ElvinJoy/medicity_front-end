import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/images.png';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
      <Link to="/navbar">
        <img src={logo} alt="" className='logo' /> <span className='logo-name'>Medicity</span>
      </Link>
      <div>
        <ul id='navbar' className={clicked ? 'navbar active' : 'navbar'}>
          <li className='li'><Link to="/aboutus" className="bn5">About Us</Link></li>
          <li className='li'><Link to="/contactus" className="bn5">Contact Us</Link></li>
          <li className='li'><Link to="/appointment" className="bn5">Appointment</Link></li>
          <li className='li'><Link to="/signup" className="bn5">Sign Up</Link></li>
        </ul>
      </div>
      <div id='mobile' onClick={handleClick}>
        <li id='bar' className={clicked ? 'fas fa-times' : 'fas fa-bars'}></li>
      </div>
    </nav>
  );
};

export default Navbar;
