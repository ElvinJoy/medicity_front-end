import React from 'react';
import './location.css';
import location from '../../assets/map.jpg';

const Location = () => {
  return (
    <div className="location-container">
      <img className='image1'  src={location} alt="image" />
      <div className="location-box">
        <p>MEDICITY HOSPITAL, NH BYPASS,<br/>
           THALORE, KURIACHIRA PO, THRISSUR 680006</p>
        <hr/>
        <a href="https://www.google.com/maps/@10.5078595,76.2363243,15z?entry=ttu" target="_blank" rel="noopener noreferrer">
          View on Map
        </a>
      </div>
    </div>
  );
};

export default Location;
