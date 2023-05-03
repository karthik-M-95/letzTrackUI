import React, {ReactDOM,useState} from "react";
import CalendarRange from "../Calendar/CalendarRange";
import DateModel from "../Calendar/DateModel";
import { Button } from "react-bootstrap";
import AddEvent from "./AddEvent";
import AddModal from "./AddModal";
import {useParams} from 'react-router-dom' 
import '../../cssFile/Body.css' 
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css';

function EventBody(){
    let params = useParams();
    const [eventName,setEventName]= useState(params.name)
    const present = new Date();
    const[date,setdate] = useState(present)
    const[modalState, setModalState]= useState(false);
    const [option, setOption] = useState('today');
    const [range, setRange] = useState({
        startDate: "",
        endDate: ""
      });
    
    function updateDate(props) {
        if(option ==='date'){
            setdate(props);
        } 
        if(option ==='selectRange'){
            setRange({
                startDate: props[0],
                endDate: props[1]
            })
        } 
    }
    function updateValue(event){
            setOption(event.target.value);
            if(event.target.value==='today'){
                setdate(present);
            }
            else {
                setdate("");
            }    
    }

    function addEvent(event){
        setModalState(!modalState);
   
    }
    
    return(
        <div className="container-fluid eventComponent">
            <div className="row">
                <div className="col-sm" id="eventBody">
                    <h3>Let's take a look at your {eventName} plans</h3>
                    <label >Select Option</label>   
                                <select className="dateLabel"  onChange={updateValue} value={option} name="dateOption" id="dateOption">
                                    <option  default value='today'>View Today</option>
                                    <option value="date">Choose Date</option>
                                    <option value="selectRange">Choose Range</option>
                                </select>
                                <hr />
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-4" id="DateViewer">
                    { option==='date' && <DateModel method={updateDate}/>}
                    {option ==='selectRange' && <CalendarRange value={date} method={updateDate} />}
                </div>
                <div className='col-sm-8'>
                    <div className='row'> 
                    <span> <p>Display the events <Button onClick={addEvent} className="pull-right" variant='primary'> Add new {eventName} </Button> </p> 
                         </span>                    
                    </div>
                    </div>
            
            </div>
            {modalState && <AddModal state={modalState} value={eventName} method={addEvent} />} 

        </div>

        
    )
}
export default EventBody;
// onChange={() => console.log("Value changed")}
        
        // <div className="row">
        //                 <div className="col-xs-2">
        //                 <h2>div 1</h2>
        //                     {/* <label for="languages">List of Languages:</label>   
        //                     <select name="language" id="language">
        //                         <option value="javascript">JavaScript</option>
        //                         <option value="python">Python</option>
        //                         <option value="c++">C++</option>
        //                         <option value="java">Java</option>
        //                     </select> */}
        //                 </div>
        //                 <div className="col-xs-2">
        //                     <h2>div 2</h2>
        //                 </div>
        //                 <div className="col-xs-2">
        //                     <h2>div3</h2>
        //                 </div>
        //             </div>

                {/* <div className="row" style={{paddingRight:"0px"}}>
        {(eventName==="") ? <h5>Select an Event</h5> : 
        <>
            <div className="col-sm" id="eventBody">
            <h5>{eventName}</h5>
            <label >Select Date</label>   
                                <select className="dateLabel"  onChange={updateValue} value={option} name="dateOption" id="dateOption">
                                    <option  default value='today'>Today</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="selectDate">SelectDate</option>
                                    <option value="selectRange">SelectRange</option>
                                </select>
                <div >
                    <Button variant="primary" onClick={<AddEvent value={eventName} />} className="button">Add {eventName}</Button> 
                </div>
            </div>
            
            <div className="col-sm" id="eventBody">
                {   (option==="selectRange") && <div className="col-sm"> <CalendarRange value={date} method={updateDate} /> </div> }
                {   (option==="selectDate") && <div className="col-sm">  <Calendar value={date} method={updateDate} />    </div>  }
      
            </div>
        </>
        }
        </div> */}