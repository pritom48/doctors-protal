import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Book from './Book';
import BookingModal from './BookingModal';


const AppointmentHave = ({ date }) => {
    const [services, setservices] = useState([])
    const [treatment, settreatment] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setservices(data))
    }, [])

    return (
        <div>
            <h3 className='text-xl text-center text-secondary'>Available Appointments on {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    services.map(service => <Book
                        key={service._id}
                        settreatment={settreatment}
                        service={service}
                    ></Book>)
                }
            </div>
            {
                treatment && <BookingModal
                    date={date}
                    treatment={treatment}
                    settreatment={settreatment}
                ></BookingModal>
            }
        </div>
    );
};

export default AppointmentHave;