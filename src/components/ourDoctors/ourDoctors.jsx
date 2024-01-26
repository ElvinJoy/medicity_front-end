import React from 'react';
import './ourDoctors.css';
import waves from '../../assets/waves_blue.svg';
import doctor1 from '../../assets/doctor1.jpg'
import doctor2 from '../../assets/doctor2.jpg'
import doctor3 from '../../assets/doctor3.jpg'
import doctor4 from '../../assets/doctor4.jpg'
import doctor5 from '../../assets/doctor5.jpg'
import doctor6 from '../../assets/doctor6.jpg'


const OurDoctors = () => {
    return (
        <>
            <div className="card-container">
                <div className="card">
                    <img src={doctor1} alt="Image 1" />
                    <h2 className='h2_doctors'>Doctor 1</h2>
                    <p className='para_home'>This is the content of Doctor 1.</p>
                </div>
                <div className="card">
                    <img src={doctor2} alt="Image 2" />
                    <h2 className='h2_doctors'>Doctor 2</h2>
                    <p className='para_home'>This is the content of Doctor 2.</p>
                </div>
                <div className="card">
                    <img src={doctor3} alt="Image 3" />
                    <h2 className='h2_doctors'>Doctor 3</h2>
                    <p className='para_home'>This is the content of Doctor 3.</p>
                </div>
                <div className="card">
                    <img src={doctor4} alt="Image 4" />
                    <h2 className='h2_doctors'>Doctor 4</h2>
                    <p className='para_home'>This is the content of Doctor 4.</p>
                </div>
                <div className="card">
                    <img src={doctor5} alt="Image 5" />
                    <h2 className='h2_doctors'>Doctor 5</h2>
                    <p className='para_home'>This is the content of Doctor 5.</p>
                </div>
                <div className="card">
                    <img src={doctor6} alt="Image 6" />
                    <h2 className='h2_doctors'>Doctor 6</h2>
                    <p className='para_home'>This is the content of Doctor 6.</p>
                </div>
            </div>
        </>
    );
};

export default OurDoctors;
