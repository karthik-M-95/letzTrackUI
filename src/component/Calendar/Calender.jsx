
import React, {forwardRef, useState } from 'react';
import Calendar from 'react-calendar';
import { Button } from "react-bootstrap";
import '../../cssFile/Calendar.css';



// Function to return a calendar to select a date
export default function CalendarFun(props) {

    const [fdate, setFdate] = useState(new Date());
    function submitDate(){  
      props.method(fdate);
     }
     
    return (
    <div className='app'>
      <h1>Select Date</h1>
      
      <div>
        <Calendar 
          onChange={setFdate} 
          value={fdate} 
          selectRange={false}/>
          <Button onClick={submitDate} className="button">Confirm Date</Button> 
          <span>Selected Date:</span>{' '} {fdate.toDateString()}
      </div>
            
    </div>
    );
  }

//   <div className='app'>
//    <h1>React Calendar with Range</h1>
//    <div>
//      <Calendar 
//        onChange={setDate} 
//        value={date} 
//        selectRange={true}/>
//    </div>
//    {date.length > 0 ? (
//    <p>
//      <span>Start:</span>{' '} {date[0].toDateString()}
//      &nbsp; to &nbsp;
//      <span>End:</span> {date[1].toDateString()}
//    </p>
//         ) : (
//    <p>
//      <span>Default selected date:</span>{' '} {date.toDateString()}
//    </p>
//         )}
//  </div>