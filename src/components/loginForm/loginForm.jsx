import React, { useState } from 'react';
import './loginForm.css';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';

const LoginForm = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', formData);

      // Check if the login was successful
      if (response.data.message === 'success') {
        console.log('Login successful');
        // Redirect the user to another page (replace '/' with the desired route)
        navigate('/');
      } else if (response.data.message === 'Incorrect password') {
        setError('Incorrect password');
      } else {
        setError('No record exists');
      }
    } catch (error) {
      console.error('Error:', error.message);
      setError('An error occurred during login');
    }
  };

  return (
    <>
      <div className="container_loginForm">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="ui form">
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>

            {error && <div className="error-message">{error}</div>}

            <button type="submit" className="fluid_ui_button_blue_login">
              Log In
            </button>
          </div>
        </form>
        <div className="text">
          Don't have an account? <span className='signup'><Link to='/signup'>Sign Up</Link></span>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
