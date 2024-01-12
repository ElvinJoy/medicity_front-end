import React, { useState } from 'react';
import './aboutus.css';
import image from '../../assets/hero-banner.png';

const AboutUs = () => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className='body'>
      <section className='about-us'>
        <div className='about'>
          <img src={image} className='picture' alt='about us' />
          <div className='text'>
            <h2>About Us</h2>
            <p className='paragraph_about'>
              {showFullText
                ? `At MEDICITY, we are committed to providing the highest quality healthcare services to the residents of Kochi and its surrounding areas. With state-of-the-art facilities and a team of experienced doctors, nurses, and support staff, we strive to deliver exceptional medical care to every patient who walks through our doors.
                Our hospital offers a wide range of specialties and services, including general medicine, surgery, pediatrics, gynecology, orthopedics, and more. We believe in a patient-centered approach, focusing on individual needs and personalized treatment plans. Our team of dedicated professionals is here to ensure your well-being and recovery.
                As a leading healthcare provider in Kochi, we are committed to continuous improvement and innovation. We regularly invest in the latest medical technology and keep up with the advancements in the field to offer our patients the best possible care. At MEDICITY, your health and satisfaction are our top priorities.`
                : `At MEDICITY, we are committed to providing the highest quality healthcare services to the residents of Kochi and its surrounding areas. With state-of-the-art facilities and a team of experienced doctors, nurses, and support staff, we strive to deliver exceptional medical care to every patient who walks through our doors.`}
            </p>
            {!showFullText && (
              <div className='data'>
                <button onClick={toggleReadMore} className='Read_More'>
                  Read More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
