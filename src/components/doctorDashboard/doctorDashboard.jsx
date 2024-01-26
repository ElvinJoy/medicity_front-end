import React, { useState, useEffect } from 'react';

const DoctorDashboard = () => {
  const [doctorDetails, setDoctorDetails] = useState(null);

  // Define the parseCookie function
  const parseCookie = (cookieString) => {
    return cookieString.split(';').reduce((acc, cookie) => {
      const [key, value] = cookie.trim().split('=');
      try {
        acc[key] = JSON.parse(decodeURIComponent(value));
      } catch (e) {
        acc[key] = decodeURIComponent(value);
      }
      return acc;
    }, {});
  };

  useEffect(() => {
    // Get the cookie string
    const cookieString = document.cookie;

    // Parse the cookie string to retrieve doctorDetails
    const cookies = parseCookie(cookieString);

    console.log('Parsed Cookies:', cookies);

    // Check if doctorDetails exists in cookies
    if (cookies && cookies.doctorDetails) {
      setDoctorDetails(cookies.doctorDetails);
    } else {
      console.error('Doctor details not found in the cookie.');
    }
  }, []);

  return (
    <div>
      <h2>Doctor Details</h2>
      {doctorDetails ? (
        <ul>
          <li>Name: {doctorDetails.name}</li>
          <li>Department: {doctorDetails.department}</li>
          <li>Email: {doctorDetails.email}</li>
          {/* Add more items as needed */}
        </ul>
      ) : (
        <p>No doctor details found in the cookie.</p>
      )}
    </div>
  );
};

export default DoctorDashboard;
