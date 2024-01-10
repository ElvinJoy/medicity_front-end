import React, { useState } from 'react';
import './bookingPage.css'; // You can create a separate CSS file for styling

const BookingPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        date: '',
        doctor: '',
        category: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your booking logic here, e.g., sending the data to a server
        console.log('Booking submitted:', formData);
    };

    return (
        <div className="booking-container">
            <form onSubmit={handleSubmit}>
                <h1>Book an Appointment</h1>

                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Doctor:</label>
                    <select
                        name="doctor"
                        value={formData.doctor}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a Doctor</option>
                        <option value="Dr. Smith">Dr. Smith</option>
                        <option value="Dr. Johnson">Dr. Johnson</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label>Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="" disabled>Select a Category</option>
                        <option value="General Checkup">General Checkup</option>
                        <option value="Dental">Dental</option>
                        {/* Add more options as needed */}
                    </select>
                </div>

                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default BookingPage;
