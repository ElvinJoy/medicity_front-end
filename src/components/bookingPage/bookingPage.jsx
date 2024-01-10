import React from 'react';
import './bookingPage.css';

const Booking = () => {
    return (
        <div className="container_booking">
            <form>
                <h1>Book an Appointment</h1>

                <div className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input
                            className='input_booking'
                            type="text"
                            name="name"
                            placeholder="Your Name"
                        />
                    </div>

                    <div className="field">
                        <label>Phone Number</label>
                        <input
                            className='input_booking'
                            type="tel"
                            name="phoneNumber"
                            placeholder="Phone Number"
                        />
                    </div>

                    <div className="field">
                        <label>Email</label>
                        <input
                            className='input_booking'
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="field">
                        <label>Date for Appointment</label>
                        <input
                            className='input_booking'
                            type="date"
                            name="appointmentDate"
                        />
                    </div>

                    <div className="field">
                        <label>Time for Appointment</label>
                        <input
                            className='input_booking'
                            type="time"
                            name="appointmentTime"
                        />
                    </div>

                    <div className="field">
                        <label>Doctor</label>
                        <input
                            className='input_booking'
                            type="text"
                            name="doctor"
                            placeholder="Preferred Doctor"
                        />
                    </div>

                    <div className="field">
                        <label>Category</label>
                        <input
                            className='input_booking'
                            type="text"
                            name="category"
                            placeholder="Appointment Category"
                        />
                    </div>

                    <button className="fluid_ui_button_violet_booking">Book Appointment</button>
                </div>
            </form>
        </div>
    );
};

export default Booking;
