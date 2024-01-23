import React, { useState } from 'react';
import './doctor_login.css'


const DoctorLoginForm = () => {
    return (
        <div>
            <>
            <div className="container_doctor_login">
                <form>
                    <h1>Doctor Login</h1>
                    <div className="ui form">
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                            
                            />
                        </div>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                        
                            />
                        </div>
                    
                        <button type="submit" className="fluid_ui_button_blue_login">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
            
        </div>
    );
};

export default DoctorLoginForm;

