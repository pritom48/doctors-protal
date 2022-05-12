import React from 'react';
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{ background: `url(${background})` }} className='flex justify-center items-center mx-10 my-16'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h2 className='text-xl text-primary'>Appointment</h2>
                <h1 className='text-3xl text-white py-4'>Make an Appointment</h1>
                <p className='text-white pr-5 py-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde architecto fuga eaque nihil officiis eos porro officia eveniet iste libero dolore dicta earum tempore quae pariatur nesciunt enim quidem molestias a cumque, voluptate magni beatae necessitatibus! Ipsa illo possimus exercitationem!</p>
                <button class="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-bold my-5">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;