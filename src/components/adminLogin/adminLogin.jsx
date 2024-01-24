import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './adminLogin.css';

const AdminLogin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [notAdminError, setNotAdminError] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (formData.email === 'admin@gmail.com' && formData.password === 'admin') {
            navigate('/adminPanel');
        } else {
            setNotAdminError(true);
        }
    };

    return (
        <>
            <div className="login-container_admin">
                <h2 className='adminLogin'>Admin Login</h2>
                <form onSubmit={handleSubmit}>
                    <label className='label_admin' htmlFor="email">Email:</label>
                    <input
                        className='inpput_admin'
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className='inpput_admin'
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                    />

                    {notAdminError && <p className='errmsg_admin' style={{ color: 'red' }}>You are not an admin.</p>}

                    <button className='button_admin' type="submit">Login</button>
                </form>
            </div>
        </>
    );
};

export default AdminLogin;
