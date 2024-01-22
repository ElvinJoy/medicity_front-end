import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { Link } from 'react-router-dom';


const Signup = (req, res) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        for (const key in formData) {
            if (!formData[key]) {
                setError(`Please fill in the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()}`);
                return;
            }
        }

        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {

            const response = await axios.post('http://localhost:8000/signup', formData);

            console.log('Response:', response.data);

            // if (response.data.error) {
            //      // Check if there is an error from the server-----------------
            //     setError(response.data.error);
            // } else {
            //      // If successful, redirect to "/appointment"------------------
            //     history.push('/appointment')
            // }
             

        } catch (error) {

            console.error('Error:', error.message);
            setError('An error occurred during registration');
        }
    };

    return (
        <>
            <div className="container_signup">
                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input
                                className='input_signup'
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>Email</label>
                            <input
                                className='input_signup'
                                type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>Phone Number</label>
                            <input
                                className='input_signup'
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>Password</label>
                            <input
                                className='input_signup'
                                type="password"
                                name="password"
                                placeholder="Password"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="field">
                            <label>Confirm Password</label>
                            <input
                                className='input_signup'
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                onChange={handleChange}
                            />
                        </div>

                        {error && <div className="error-message">{error}</div>}

                        <button type="submit" className="fluid_ui_button_blue_signup">
                            Submit
                        </button>
                    </div>
                </form>
                <div className="text">
                    Already have an account? <span className='login'><Link to="/loginForm">Login</Link></span>
                </div>
                <div className="video-container">
                    <video
                        className="video"
                        autoPlay
                        muted
                        loop
                        playsInline
                        src="../../assets/mushrooms.MP4"
                    />
                </div>
            </div>
        </>
    );
};

export default Signup;
