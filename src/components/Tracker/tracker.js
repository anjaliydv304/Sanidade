import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './tracker.css';

const Tracker = () => {
    const [date, setDate] = useState(new Date());
    const [log, setLog] = useState([]);

    const handleDateChange = (newDate) => {
        setDate(newDate);
        if (!log.includes(newDate.toDateString())) {
            setLog([...log, newDate.toDateString()]);
        }
    };

    return (
        <div className="tracker-container">
            <h1>Menstrual Cycle Tracker</h1>
            <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date, view }) =>
                    log.includes(date.toDateString()) ? 'highlight' : null
                }
            />
            <div className="log">
                <h2>Recorded Dates:</h2>
                <ul>
                    {log.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tracker;
