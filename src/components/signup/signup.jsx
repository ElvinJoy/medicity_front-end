import React, { useState } from 'react';
import axios from 'axios';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [error, setError] = useState('');
    const navigate = useNavigate();

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
            navigate('/appointment');
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error.message);
            setError('An error occurred during registration');
        }
    };

    return (
        <>
            <div className='con'>
                <span className='admin-icon-link'>Admin<Link to="/adminpanel" className="admin-icon-link">
                    <FaUser className="admin-icon" />
                </Link></span>
                <div className="container_signup">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up <span className='doctorLogin'>are you a doctor ? <Link to='/DoctorLoginForm'>click here</Link></span></h1>
                        <hr className='hori' />
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
                    <div className="text_signup">
                        Already have an account ? <span className='login_signup'><Link to="/loginForm">Login</Link></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
