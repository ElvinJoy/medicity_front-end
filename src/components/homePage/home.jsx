import React from 'react';
import './home.css'
import img from '../../assets/slider2.jpg'
import { Outlet } from 'react-router-dom';

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
                            <span className='space1'><a href="/buttons/41" className="btn41-43 btn-41"><b>Get Appointment</b></a></span>
                            <span><a href="/buttons/41" className="btn41-43 btn-41"><b>About Us</b></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
