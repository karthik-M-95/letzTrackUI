import { Button } from "react-bootstrap";
import EventBody from "./EventBody";
import '../../cssFile/Body.css'
import { redirect } from "react-router-dom";


function EventsComponent(props){

    // console.log("Event component loaded");
    function fetchComponent(event){
       props.method(event.target.value)
       console.log(event.target.value)
   }
    return (
        <Button style={{borderRadius:0 }} className="eventsBody btn1" value={props.events} onClick={fetchComponent} variant='info' >{props.events}</Button>
       // <h5 className="eventsBody" >{props.event}</h5>
       
    );

}
export default EventsComponent;