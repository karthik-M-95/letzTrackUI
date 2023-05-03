import React,{useState} from "react";
import EventsComp from "./EventComponent";
import "../../cssFile/Body.css";
import Events from "../jsonFiles/Events";
import { Button } from "react-bootstrap";
import EventBody from "./EventBody";
import Header from '../Login/Header'


function MainContent(){
    // console.log("Main component loaded");
    const[eventValue, setEventValue]= useState("");

    function addEventValue(props){
        console.log(props)
        setEventValue(props);
    }
    const styleCol ={
        paddingRight: "0.2rem"
    }
    return(
        <div className="Container-fluid">
            <div className="row" id="compBody" >
                <div style={{styleCol}} className="col-xs-4 col-md-3 Content ">
                
                     <h3 className="eventCompTitle">Category</h3>
                    
                    {Events.map(x=>(
                            <EventsComp 
                                key={x.id}
                                events={x.value}
                                method={addEventValue}
                        />
                        ))
                    }
                    <Button variant="primary" className="button">Add Category</Button>     
                </div>
                <div className="col-xs col-md content2">
                    <EventBody  name={eventValue}/>
                </div>

            </div>
        
        </div>
        
    );
}
export default MainContent;