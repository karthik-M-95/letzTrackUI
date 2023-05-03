import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Example(props) {
  const [show, setShow] = useState(props.state);
  console.log(props)

  const handleClose = (event) => setShow(props.method(event));
  

  return (
    <>

      <Modal
        show={props.state}
        onHide={handleClose}
        backdrop="static"
        keyboard={false} style={{opacity:1}}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      >
        <Modal.Header onClick={handleClose} closeButton>
          <Modal.Title>Add new {props.value} plan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="registration-form" onSubmit={handleClose}>
          <div className="form-group">
            <div><label htmlFor="name">Name :</label></div>
            <input type='text' id='eventType' name='eventType' placeholder='' />

          </div>
        
                  {/* <div className="form-group">
                        <div><label htmlFor="name">Name :</label></div>
                          
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            className="signIn-input"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          {formErrors.name && <span className="error">{formErrors.name}</span>}
                  </div> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<Example />);