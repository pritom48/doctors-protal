import React from 'react';
import colck from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 text-white gap-4 px-5 '>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary pl-5">
                    <figure><img className='p' src={colck} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Opening Hours</h2>
                        <p>Click the button to listen.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-accent bg-base-100 shadow-xl pl-5">
                    <figure><img src={marker} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Visit our location</h2>
                        <p>Brooklyn, NY 10036, United States</p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-primary to-secondary pl-5">
                    <figure><img src={phone} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Contact us now</h2>
                        <p>+000 123 456789</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;