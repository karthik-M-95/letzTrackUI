
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from "react-bootstrap";
import '../../cssFile/Calendar.css';

// Function to return a calendar to select range of date
export default function CalendarRange(props) {
    const [date, setDate] = useState(new Date());

    function submitDate(){
      props.method(date);
     }
    return (

      <div className='app'>
        <p>Select Range</p>
        <div className="calendarPickerform">
          <Calendar 
            onChange={setDate} 
            value={date} 
            selectRange={true}/>
            <Button onClick={submitDate} className="button">Confirm</Button>
            {date.length > 0 ? (
        <p>
          <span>Start:</span>{' '} {date[0].toDateString()}
          &nbsp; to &nbsp;
          <span>End:</span> {date[1].toDateString()}
        </p>
              ) : (
        <p>
          <span>Default selected date:</span>{' '} {date.toDateString()}
        </p>
              )}
        </div>
        
    </div>
    );
  }


