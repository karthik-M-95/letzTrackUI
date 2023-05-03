import React, { useState } from "react";
import validateField from "./validate";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../../cssFile/Login.css";
import { Button } from "react-bootstrap";
import axios from 'axios';
import {Link, Outlet } from 'react-router-dom';


function Register(){
    
  const initialFormData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
 
    const [formData, setFormData] = useState(initialFormData);
    const [formErrors, setFormErrors] = useState(initialFormData);
    const handleChange = (event) => {
      const { name, value, type } = event.target;
          // field name + field value + object
      const error = validateField(name, value, formData);
      setFormData({ ...formData, [name]: value });
      setFormErrors({ ...formErrors, [name]: error });
    };
    const handleReset = (e) =>{
        setFormData(initialFormData);
        setFormErrors(initialFormData);
    
    }
    const handleSubmit = (e) => {
      e.preventDefault();
      const newFormErrors = {};
      Object.keys(formData).forEach((fieldName) => {
        newFormErrors[fieldName] = validateField(
          fieldName,
          formData[fieldName],
          formData
        );
      });
      setFormErrors(newFormErrors);
      if (Object.values(newFormErrors).some((error) => error)) {
        return;
      }
      // Display form data in an alert box
      const dataString = Object.keys(formData)
        .map((fieldName) => `${fieldName}: ${formData[fieldName]}`)
        .join("\n");
      alert(`Form data:\n${dataString}`);
      console.log(formData);
      // Reset form data and errors
      setFormData(initialFormData);
      setFormErrors({});
    };


    return (
      <>
        <div className="container-fluid signIn-div"  style= {{padding:"0px"}}>
          <div className="col-10 col-xs-6 col-sm-5 col-lg-4 signIn-box">
          <div className="col-12" > <h2 className="title form-header">Register</h2></div>
            <hr />
            <form id="registration-form" onSubmit={handleSubmit}>
                  
            <div className="form-group">
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
            </div>

            <div className="form-group ">
              <div><label htmlFor="email">Email:</label></div>
              
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter Email"
                className="signIn-input"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>

            <div className="form-group">
              <div><label htmlFor="password">Password:</label></div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
                className="signIn-input"
                value={formData.password}
                onChange={handleChange}
              />
              {formErrors.password && (
                <span className="error">{formErrors.password}</span>
              )}
            </div>
            <div className="form-group">
              <div><label htmlFor="confirmPassword">Confirm Password:</label></div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Retype password"
                className="signIn-input"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {formErrors.confirmPassword && (
                <span className="error">{formErrors.confirmPassword}</span>
              )}
            <hr />
            </div>
            <div className="form-group">
            <Button variant="primary" className="signIn-button" type="submit">Submit</Button>
            <Button variant="danger" onClick={handleReset} className="signIn-button" type="reset">Reset</Button>
            </div>
            <div >
              <p >Have an account ?<Link to="/login">Login</Link></p>
            </div>
          
            
          </form>
          
          </div>

        </div>
      </>
    )
}

export default Register;