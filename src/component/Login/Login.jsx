import React,{ Component , useState } from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../cssFile/Login.css";
import {Link , Outlet} from 'react-router-dom';
import Header from "./Header"

function Login(){

  const [data,setData]=useState({
    username:"",
    password:""
  })
  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(data.username);
    window.prompt("form submitted: id "+ data.username +" password "+ data.password)
  }
 
  const handleChange =(event) =>{
    let { name, value } = event.target;
    console.log(value);
   setData({ ...data, [name]: value })
}

    return (
      <>
      <div style={{ padding:"0px" }}className="container-fluid ">
        <div className="container-login100">
        <div className="col-10 col-md-6 col-lg-4 login-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-group login-element">
              <label htmlFor="name">Username:</label>
              <input
                style={{ width: "100%" }}
                type="text"
                className="form-control wrap-input100"
                onChange={handleChange}
                id="username"
                placeholder="Enter Name"
                name="username"
                value={data.username}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input
                style={{ width: "100%" }}
                type="password"
                className="form-control wrap-input100"
                onChange={handleChange}
                id="password"
                value={data.password}
                placeholder="Enter password"
                name="password"
              />
            </div>
            <button type="submit" className="btn btn-primary login-button">
              Login
            </button>
            <p className="login-bs1">Don't have an account <Link to="/register">Sign up</Link><span> | <Link>Forgot Password</Link></span></p>
          </form> 
          </div>
        </div>
        </div>
      </>
      
      
);
    
}

export default Login;