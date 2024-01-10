import React from 'react';
import './loginForm.css'

const LoginForm = () => {
    return (
        <>
            <div className="container_loginForm">
                <form>
                    <h1>Login</h1>
                
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
                        
                        <button className="fluid_ui_button_blue_button">Submit</button>
                    </div>
                </form>
                <div className="text">
                    Don't have an account? <span className='signup'>Sign Up</span>
                </div>
            </div>
        </>
    );
};

export default LoginForm;
