import React from 'react';

const Book = ({ service, settreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">

            <div className="card-body items-center text-center">
                <h2 className="card-title text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <p>{slots[0]}</p>
                            : <p>NO SLOTS AVAILABLE</p>
                    }
                </p>
                <p>{slots.length}  {slots.length > 1 ? 'SPACES' : 'SPACE'} AVAILABLE</p>
                <div className="card-actions">
                    <label
                        onClick={() => settreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal"
                        className="btn btn-primary  bg-gradient-to-r from-primary to-secondary text-white font-bold">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Book;