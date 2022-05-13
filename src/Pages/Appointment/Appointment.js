import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner';
import AppointmentHave from './AppointmentHave';

const Appointment = () => {
    const [date, setDate] = useState(new Date())
    return (
        <div className='px-10'>
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AppointmentHave date={date}></AppointmentHave>
        </div>
    );
};

export default Appointment;