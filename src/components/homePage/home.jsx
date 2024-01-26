import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import img from '../../assets/slider2.jpg';
import AboutUs from '../aboutus/aboutus';
import Signup from '../signup/signup';
import Location from '../location/location';
import BookingPage from '../bookingPage/bookingPage';

const Home = () => {
    return (
        <>
            <div className='container'>
                <img className='slider2' src={img} alt="image" />
                <div className='sec_container'>
                    <h1 className='intro'>We Provide <span className='medical'> Medical</span> Services <br />
                        That You Can <span className='trust'>Trust</span></h1>
                    <div className='buttons_home'>
                        <div>
                            <span className='space1'>
                                <Link to="/signup" className="btn41-43 btn-41"><b>Get Appointment</b></Link>
                            </span>
                            <span>
                                <Link to="/aboutus" className="btn41-43 btn-41"><b>About Us</b></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            {/* <Signup /> */}
            <Location />
            {/* <BookingPage /> */}
        </>
    );
};

export default Home;
