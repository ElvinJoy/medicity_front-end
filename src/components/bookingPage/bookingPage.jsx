import React, { useState } from 'react';
import './bookingPage.css';
import axios from 'axios';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    appointmentDate: '',
    appointmentTime: '',
    doctor: '',
    category: '',
  });

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the data to the backend endpoint for appointments
      const response = await axios.post('http://localhost:8000/appointment', formData);

      console.log('Response:', response.data);
      // Handle any further actions or redirects here if needed
    } catch (error) {
      console.error('Error:', error.message);
      setError('An error occurred during appointment booking');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container_booking">
      <form onSubmit={handleSubmit}>
        <h1>Book an Appointment</h1>

        <div className="ui form">
          <div className="field">
            <label>Name</label>
            <input
              className='input_booking'
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <input
              className='input_booking'
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              className='input_booking'
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Date for Appointment</label>
            <input
              className='input_booking'
              type="date"
              name="appointmentDate"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Time for Appointment</label>
            <input
              className='input_booking'
              type="time"
              name="appointmentTime"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Doctor</label>
            <input
              className='input_booking'
              type="text"
              name="doctor"
              placeholder="Preferred Doctor"
              onChange={handleChange}
            />
          </div>

          <div className="field">
            <label>Department</label>
            <input
              className='input_booking'
              type="text"
              name="category"
              placeholder="Appointment Category"
              onChange={handleChange}
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="fluid_ui_button_violet_booking">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
