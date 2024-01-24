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
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('AM'); // Default to AM

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

  const handleTimeChange = (e) => {
    setFormData({ ...formData, appointmentTime: e.target.value });
  };

  const handleTimePeriodChange = (e) => {
    setSelectedTimePeriod(e.target.value);
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
            <div style={{ display: 'flex', width: '100%' }}>
              <input
                className='input_booking'
                type="time"
                name="appointmentTime"
                style={{ width: '100%' }}
                onChange={handleTimeChange}
              />
              <select
                className='input_booking'
                onChange={handleTimePeriodChange}
                value={selectedTimePeriod}
                style={{ width: '26%', marginLeft: '4%' }}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>


          <div className="field">
            <label>Department</label>
            <select
              className='input_booking'
              name="category"
              onChange={handleChange}
            >
              <option value="" disabled>Select Department</option>
              <option value="General Checkup">General Checkup</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
              <option value="Ophthalmology">Ophthalmology</option>
            </select>
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
