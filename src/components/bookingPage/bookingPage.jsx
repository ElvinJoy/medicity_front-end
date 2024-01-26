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
    department: '',
  });

  const [messages, setMessages] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleTimeChange = (e) => {
    setFormData((prevState) => ({ ...prevState, appointmentTime: e.target.value }));
  };

  const handleTimePeriodChange = (e) => {
    setSelectedTimePeriod(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.name || !formData.phoneNumber || !formData.email || !formData.appointmentDate || !formData.appointmentTime || !formData.department || !selectedTimePeriod) {
      setMessages(['Please fill in all the fields.']);
      return;
    }

    try {
      // Include selectedTimePeriod in the formData object
      const formDataWithTimePeriod = {
        ...formData,
        appointmentTime: `${formData.appointmentTime} ${selectedTimePeriod}`,
      };

      // Send the updated formData to the backend endpoint
      const response = await axios.post('http://localhost:8000/appointment/appointment', formDataWithTimePeriod);

      console.log('Response:', response.data);

      // Display success message and reset form
      setMessages(['Appointment booked successfully!']);
      setFormData({
        name: '',
        phoneNumber: '',
        email: '',
        appointmentDate: '',
        appointmentTime: '',
        department: '',
      });
      setSelectedTimePeriod('');
      setFormSubmitted(true);
    } catch (error) {
      console.error('Error:', error.message);
      setMessages(['An error occurred during appointment booking']);
    }
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
              value={formData.name}
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
                style={{ width: '50%' }}
                onChange={handleTimeChange}
              />
              <select
                className='input_booking'
                onChange={handleTimePeriodChange}
                value={selectedTimePeriod}
                style={{ width: '46%', marginLeft: '4%' }}
              >
                <option value="" >Select Time Period</option>
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label>Department</label>
            <select
              className='input_booking'
              name="department"
              onChange={handleChange}
            >
              <option value="" >Select Department</option>
              <option value="GeneralCheckup">General Checkup</option>
              <option value="Cardiology">Cardiology</option>
              <option value="Orthopedics">Orthopedics</option>
              <option value="Dermatology">Dermatology</option>
              <option value="Neurology">Neurology</option>
            </select>
          </div>

          {messages.length > 0 && (
            <div className={messages.some(msg => msg.toLowerCase().includes('error')) ? 'error-message' : 'success-message'}>
              {messages.map((msg, index) => (
                <p key={index}>{msg}</p>
              ))}
            </div>
          )}

          <button type="submit" className="fluid_ui_button_violet_booking">
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
