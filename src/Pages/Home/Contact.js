import React from 'react';
import PrimaryButton from '../Shared/PrimaryButton';
import appointment from '../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div style={{
            background:`url(${appointment})`,
 
        }} className='py-8'>
            <div className='text-center'>
            <h3 className='text-secondary text-xl font-bold '>Contact Us</h3>
            <h2 className='text-3xl text-white pb-4'>Stay connected with us</h2>
            </div>
            <div className='grid grid-cols-1 justify-items-center'>
            <input type="text" placeholder='Email Address' className='input w-full max-w-md' /><br/>
            <input type="text" placeholder='Subject' className='input w-full max-w-md'/><br/>
            <textarea rows={6} placeholder='Your message' className='input w-full max-w-md '></textarea><br/>
            <PrimaryButton>Get Started</PrimaryButton>
            {/* <button  className="btn btn-primary mb-8 text-white">Get Started</button> */}
            </div>
            
        </div>
    );
};

export default Contact;