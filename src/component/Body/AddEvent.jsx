import React,{useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap'
import '../../cssFile/Body.css'


 function AddEvent (props){
     console.log("Add Event modal")
        useEffect(()=>{
            console.log("In use Effect")
            if(props.value===true){
                document.body.style.overflow = 'hidden';
            }
            else{
                document.body.style.overflow = 'unset';
            }
        }, [props.value])
    function closeModal(event){
        props.method(event);
    }

     return (
         
        <div className="modal show addmodal"backdrop="static" keyboard={false} onClickOutside={closeModal} style={{ display: 'block', position: 'initial' }}>
          
            
                <Modal.Dialog backdrop="static" keyboard={false} >
                    <Modal.Header onClick={closeModal} closeButton>
                    <Modal.Title>Add new {props.value} plan</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                    <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            
            {/* <Modal show={props.value} onHide={closeModal}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
                Close
            </Button>
            <Button variant="primary" onClick={closeModal}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal> */}

        {/* <Modal
        show={props.value}
        onHide={closeModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal> */}
         </div>
     )
 }

 export default AddEvent;