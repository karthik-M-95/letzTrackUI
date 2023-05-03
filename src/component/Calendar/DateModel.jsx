import React , {useState} from "react";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../cssFile/Body.css'



export default function DateModel(props){
    
    const [fdate, setFdate] = useState(new Date());
    function submitDate(){
      props.method(fdate);
    
     }

     function onFormSubmit(event){
         event.preventDefault();
     }

    return(
        <div>
        <form onSubmit={ onFormSubmit }>
        <div className=" col-sm form-group datePickerform">  
          <DatePicker  
              selected={ fdate }  
              onChange={ setFdate }   
              dateFormat="MM/dd/yyyy"  
          />  
        </div> 
        <div className=" col-sm datePickerform"> <button onClick={submitDate} className="btn btn-primary">Confirm Date</button></div>
        </form>
        
        </div>
     
    )

}