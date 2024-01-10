import React from 'react';
import { Link, Outlet } from "react-router-dom";
import './navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    Medicity
                </div>
                <input type="checkbox" id="click" />
                <label for="click" className="menu-btn">
                    <i class="fas fa-bars"></i>
                </label>
                <ul>
                    <li><a className="active" href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Contact us">Contact us</a></li>
                    <li><a href="#Appoinments">Appoinments</a></li>
                    <li><a href="#sign up">sign up</a></li>
                </ul>
            </nav>

        </div>
    );
};

export default Navbar;


