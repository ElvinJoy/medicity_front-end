import React from 'react';
import './signup.css'

const Signup = () => {
    return (
        <>

            <div className="container_signup">
                <form>
                    <h1>Sign Up</h1>

                    <div className="ui form">
                        <div className="field">
                            <label>Name</label>
                            <input
                                className='input_signup'
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                            />
                        </div>

                        <div className="field">
                            <label>Email</label>
                            <input
                                className='input_signup'
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                        </div>

                        <div className="field">
                            <label>Password</label>
                            <input
                                className='input_signup'
                                type="password"
                                name="password"
                                placeholder="Password"
                            />
                        </div>

                        <div className="field">
                            <label>Confirm Password</label>
                            <input
                                className='input_signup'
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                            />
                        </div>

                        <button className="fluid_ui_button_blue_signup">Submit</button>
                    </div>
                </form>
                <div className="text">
                    Already have an account? <span className='login'>Login</span>
                </div>
            </div>{" "}

        </>
    );
};

export default Signup;