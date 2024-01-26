// doctorLoginForm.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './doctor_login.css'

const DoctorLoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/doctorLoginForm/doctorLoginForm', formData);

      if (response.data.message === 'success') {
       
        const doctorData = {
          name: "John Doe",
          department: "Cardiology"
        };
      
        navigate('/doctorDashboard', { state: doctorData });

        
      } else {
        // Handle unsuccessful login
        setErrorMessage('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during doctor login:', error.message);
      // Handle network or server error
      setErrorMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="container_doctor_login">
      <form onSubmit={handleSubmit}>
        <h1>Doctor Login</h1>
        <div className="ui form">
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <button type="submit" className="fluid_ui_button_blue_login">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorLoginForm;
