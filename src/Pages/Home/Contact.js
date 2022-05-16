import React from 'react';
import background from '../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section className='flex flex-col justify-center items-center my-28 mx-10 py-10' style={{ background: `url(${background})` }}>
            <div>
                <h2 className='text-xl text-center text-primary'>Contact Us</h2>
                <h1 className='text-3xl text-center text-white'>Stay connected with us</h1>
            </div>
            <div className='grid w-80'>
                <input className='my-3 p-2 rounded-lg' type="email" name="email" placeholder='Email Address' id="" />
                <input className='p-2 rounded-lg' type="text" placeholder='Subject' />
                <textarea className='my-3 rounded-lg p-2' name="" placeholder='Your Massage' id="" cols="30" rows="10"></textarea>
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold ">Submit</button>
            </div>
        </section>
    );
};

export default Contact;