import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './addDoctors.css';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    department: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
 
    if (!formData.name || !formData.department || !formData.email || !formData.password) {
      setError('All fields are required');
      setSuccessMessage('');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:8000/DoctorRegistration/DoctorRegistration', formData);
  
      console.log('Response:', response.data);
      setSuccessMessage('Doctor registration successful');
      setError('');
   
  

      setFormData({
        name: '',
        department: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.error('Error:', error.message);
  
      if (error.response && error.response.status === 400) {
       
        setError(error.response.data.error);
      } else {
        setError('An error occurred while registering the doctor');
      }
  
      setSuccessMessage('');
    }
  };
  

  return (
    <div className="container_doctorRegistration">
      <form onSubmit={handleSubmit}>
        <h1>Add Doctor</h1>

        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              className='input_doctorRegistration'
              type="text"
              name="name"
              placeholder="Doctor's Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Department</label>
            <input
              className='input_doctorRegistration'
              type="text"
              name="department"
              placeholder="Doctor's Department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              className='input_doctorRegistration'
              type="email"
              name="email"
              placeholder="Doctor's Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="field_Doctor">
            <label>Password</label>
            <input
              className='input_doctorRegistration'
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          {successMessage && <div className="success-message">{successMessage}</div>}

          <button type="submit" className="fluid_ui_button_blue_doctorRegistration">
            Register Doctor
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorRegistration;
