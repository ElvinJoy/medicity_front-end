import React from 'react';
import { Link } from 'react-router-dom';
import './adminPanel.css';

const AdminWelcome = () => {
  // You can get the admin information from your authentication system
  // For simplicity, let's assume you have an admin object with a name
  const admin = { name: 'Admin' };

  return (
    <div className="container_adminWelcome">
      <h1>Welcome, {admin.name}!</h1>
      <p>This is the admin panel. You have access to manage the hospital website.</p>

      <div className="admin-actions">
        <Link to="/DoctorRegistration" className="fluid_ui_button_blue">
          Add Doctor
        </Link>
      </div>

      <div className="logout_adminWelcome">
        <span className='logout_adminWelcome_text'>
        <Link to="/adminLogin" className="logout">
         Logout
        </Link>
        </span>
      </div>
    </div>
  );
};

export default AdminWelcome;
