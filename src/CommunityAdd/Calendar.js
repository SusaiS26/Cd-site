import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css';

function CalendarComponent({ handleDateChange }) {
  return (
    <div className='calendar-container'>
      <Calendar onChange={handleDateChange} value={null} /> {/* Pass the handleDateChange prop */}
    </div>
  );
}

export default CalendarComponent;