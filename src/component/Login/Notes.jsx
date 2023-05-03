// import React, { useState } from "react";
// import "./App.css";
// import validateField from "./components/Validate";
// const initialFormData = {
//   name: "",
//   email: "",
//   password: "",
//   confirmPassword: "",
//   gender: "",
//   hobbies: [],
//   country: "",
// };
// const Form = () => {
//   const [formData, setFormData] = useState(initialFormData);
//   const [formErrors, setFormErrors] = useState(initialFormData);
//   const handleChange = (event) => {
//     const { name, value, type } = event.target;
//     const fieldValue =
//       type === "checkbox"
//         ? formData.hobbies.includes(value)
//           ? formData.hobbies.filter((hobby) => hobby !== value)
//           : [...formData.hobbies, value]
//         : type === "radio"
//         ? value
//         : value.trim();
//     const error = validateField(name, fieldValue, formData);
//     setFormData({ ...formData, [name]: fieldValue });
//     setFormErrors({ ...formErrors, [name]: error });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newFormErrors = {};
//     Object.keys(formData).forEach((fieldName) => {
//       newFormErrors[fieldName] = validateField(
//         fieldName,
//         formData[fieldName],
//         formData
//       );
//     });
//     setFormErrors(newFormErrors);
//     if (Object.values(newFormErrors).some((error) => error)) {
//       return;
//     }
//     // Display form data in an alert box
//     const dataString = Object.keys(formData)
//       .map((fieldName) => `${fieldName}: ${formData[fieldName]}`)
//       .join("\n");
//     alert(`Form data:\n${dataString}`);
//     // Reset form data and errors
//     setFormData(initialFormData);
//     setFormErrors({});
//   };
//   return (
//     <form id="registration-form" onSubmit={handleSubmit}>
//           <h2 className="title">Registration Form</h2>
//       <div className="form-group">
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {formErrors.name && <span className="error">{formErrors.name}</span>}
//       </div>
//       <div className="form-group">
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {formErrors.email && <span className="error">{formErrors.email}</span>}
//       </div>
//       <div className="form-group">
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//         />
//         {formErrors.password && (
//           <span className="error">{formErrors.password}</span>
//         )}
//       </div>
//       <div className="form-group">
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input
//           type="password"
//           id="confirmPassword"
//           name="confirmPassword"
//           value={formData.confirmPassword}
//           onChange={handleChange}
//         />
//         {formErrors.confirmPassword && (
//           <span className="error">{formErrors.confirmPassword}</span>
//         )}
//       </div>
//       <div className="form-group">
//         <label>Gender:</label>
//         <div className="form-row">
//           <label htmlFor="male">Male</label>
//           <input
//             type="radio"
//             id="male"
//             name="gender"
//             value="male"
//             checked={formData.gender === "male"}
//             onChange={handleChange}
//           />
//           <label htmlFor="female">Female</label>
//           <input
//             type="radio"
//             id="female"
//             name="gender"
//             value="female"
//             checked={formData.gender === "female"}
//             onChange={handleChange}
//           />
//           <label htmlFor="other">Other</label>
//           <input
//             type="radio"
//             id="other"
//             name="gender"
//             value="other"
//             checked={formData.gender === "other"}
//             onChange={handleChange}
//           />
//         </div>
//         {formErrors.gender && (
//           <span className="error">{formErrors.gender}</span>
//         )}
//       </div>
//       <div className="form-group">
//         <label>Hobbies:</label>
//         <div className="form-row">
//           <label htmlFor="reading">Reading</label>
//           <input
//             type="checkbox"
//             id="reading"
//             name="hobbies"
//             value="reading"
//             checked={formData.hobbies.includes("reading")}
//             onChange={handleChange}
//           />
//           <label htmlFor="traveling">Traveling</label>
//           <input
//             type="checkbox"
//             id="traveling"
//             name="hobbies"
//             value="traveling"
//             checked={formData.hobbies.includes("traveling")}
//             onChange={handleChange}
//           />
//           <label htmlFor="sports">Sports</label>
//           <input
//             type="checkbox"
//             id="sports"
//             name="hobbies"
//             value="sports"
//             checked={formData.hobbies.includes("sports")}
//             onChange={handleChange}
//           />
//         </div>
//         {formErrors.hobbies && (
//           <span className="error">{formErrors.hobbies}</span>
//         )}
//       </div>
//       <div className="form-group">
//         <label htmlFor="country">Country:</label>
//         <select
//           id="country"
//           name="country"
//           value={formData.country}
//           onChange={handleChange}
//         >
//           <option value="">Select a country</option>
//           <option value="usa">USA</option>
//           <option value="canada">Canada</option>
//           <option value="uk">UK</option>
//         </select>
//         {formErrors.country && (
//           <span className="error">{formErrors.country}</span>
//         )}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// export default Form;

// const validateField = (name, value, formData) => {
//     switch (name) {
//       case "name":
//         if (value.length === 0) {
//           return "Name is required";
//         }
//         if (value.length < 3) {
//           return "Name Should be Atleast 3 characters Long";
//         }
//         return "";
//       case "email":
//         if (!value) {
//           return "Email is required";
//         }
//         if (!/\S+@\S+\.\S+/.test(value)) {
//           return "Email is invalid";
//         }
//         return "";
//       case "password":
//         if (!value) {
//           return "Password is required";
//         }
//         if (value.length < 8) {
//           return "Password must be at least 8 characters";
//         }
//         return "";
//       case "confirmPassword":
//         if (!value) {
//           return "Confirm Password is required";
//         }
//         if (value !== formData.password) {
//           return "Passwords do not match";
//         }
//         return "";
        
//       case "gender":
//         if (!value) {
//           return "Gender is required";
//         }
//         return "";
//       case "hobbies":
//         if (!value.length) {
//           return "Hobbies are required";
//         }
//         return "";
//       case "country":
//         if (!value) {
//           return "Country is required";
//         }
//         return "";
//       default:
//         return "";
//     }
//   };
// export default validateField;

/* <>
<div className="container-fluid form-background">
  <div className="row container-login100  justify-content-center">
  <div className="col-md-7 col-lg-5  ">
        <div className="login-wrap p-4 p-md-5">
          <div className="icon d-flex align-items-center justify-content-center">
            <span className="fa fa-user-o"></span>
          </div>
          <h3 className="text-center mb-4 login100-form-title">Sign In</h3>
          <form action="#" className="login-form">
            <div className="form-group wrap-input100 ">
              <input type="text" className="form-control input100 rounded-left" placeholder="Username" required />
            </div>
            <div className="form-group wrap-input100 d-flex">
              <input type="password" className="form-control input100 rounded-left" placeholder="Password" required />
            </div>
            <div className="form-group">
              <button type="submit" className="form-control btn btn-primary rounded submit px-3">Login</button>
            </div>
            <div className="form-group d-md-flex">
              <div className="w-50">
                <label className="checkbox- label-checkbox100 checkbox-primary" >Remember Me 
                  <input type="checkbox" checked />
                  <span className="checkmark"></span>
                  </label>
              </div>
              <div className="w-50 text-md-right">
                <a href="#">Forgot Password</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div> 
</> */

/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
<Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link>
        {' '}
        <Link className="text-decoration-none text-white" to="/">
          Home
        </Link>
      </Nav.Link>
      <Nav.Link>
        {' '}
        <Link className="text-decoration-none text-white" to="/login">
          About
        </Link>
      </Nav.Link>
      <Nav.Link>
        {' '}
        <Link className="text-decoration-none text-white" to="/register">
          Contact Us
        </Link>
      </Nav.Link>
    </Nav>
    <Nav className="gap-2">
      <Nav.Link className="btn btn-primary" href="login">Login</Nav.Link>
      <Nav.Link eventKey={2} className="btn btn-light text-black" href="register">
        Sign up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Container>
</Navbar> */

 /* <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                <a class="navbar-brand" href="#">WebSiteName</a>
                </div>
                <ul class="nav navbar-nav">
                <li class="active"><a href="#">Home</a></li>
                <li><Link to="login">Home</Link></li>
                <li><Link to="register"> About Us </Link></li>
                <li><Link to="events"> Contact Us </Link></li>
                </ul>
            </div>
            </nav> */

         
        
    //    <div>
    //        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
    //             {/* <!-- Brand/logo --> */}
    //             <a className="navbar-brand" href="#">Logo</a>
                
                
    //             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    //                 <span className="navbar-toggler-icon"></span>
    //             </button>

    //         {/* <!-- Navbar links -->  */}
    //         <div className="collapse navbar-collapse" id="collapsibleNavbar"> 
    //             <ul className="navbar-nav">
    //                 <li className="nav-item">
                    
   
    //                 <a className="nav-link" href="#">Link 1</a>
    //                 </li>
    //                 <li className="nav-item">
    //                 <a className="nav-link" href="#">Link 2</a>
    //                 </li>
    //                 <li className="nav-item">
    //                 <a className="nav-link" href="#">Link 3</a>
    //                 </li>
    //             </ul>
    //         </div>

    //         </nav>
    //    </div>


import {useState, useEffect} from 'react';
import {Link , Outlet} from "react-router-dom";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';
function Notes() {

//   const [name,setName] = useState("Jack")
//   const [age,setAge] = useState(20)
//   const [count, setCount] = useState(0);

// //   useEffect(() => {
// //     setTimeout(() => {
// //       setCount((count) => count + 1);
// //     }, 1000);
// //   },[age]);

//   useEffect(()=>{
//    console.log("use Effect called")
//   },[age])
//   return (
//   <div>
//         <h1>Your Name is: {name}</h1><br/>
//         <h1>Your Age is: {age} </h1><br/>
//         <h1>I've rendered {count} times!</h1>;
//         <button className="btn btn-primary" onClick={()=>setName("Tom")}>Update Name</button>&nbsp;&nbsp
//         <button className="btn btn-primary" onClick={()=>setAge(age+1)}>Increment Age</button>
//         </div>
//         // return () => clearTimeout(timer)
//  );
// }
{/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="navbar-header">
        <a class="navbar-brand" href="/">WebSiteName</a>
        </div>
        <ul class="nav navbar-nav">
        <li class="active"><a href="#">Home</a></li>
        <li><a href="#">Page 1</a></li>
        <li><a href="#">Page 2</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
        <li><a href="register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
        <li><a href="login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
        </ul>
    </div>
    </nav> */}
     //     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    //     <div class="container-fluid">
    //       <a class="navbar-brand" href="#">Navbar</a>
    //       <button
    //         class="navbar-toggler"
    //         type="button"
    //         data-mdb-toggle="collapse"
    //         data-mdb-target="#navbarNavAltMarkup"
    //         aria-controls="navbarNavAltMarkup"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //         <i class="fas fa-bars"></i>
    //       </button>
    //       <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    //         <div class="navbar-nav">
    //           <a class="nav-link active" aria-current="page" href="/">Home</a>
    //           <a class="nav-link" to="/login">Login</a>
    //           <a class="nav-link" href="/register">Pricing</a>
    //           <a class="nav-link disabled">Disabled</a>
    //           <Link to="/login">Login2</Link>
    //           <Outlet />
    //         </div>
    //       </div>
    //     </div>
    //   </nav>

return (

  // <Navbar bg="primary" expand="md">    
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />  
  //     <Navbar.Collapse id="basic-navbar-nav">  
  //       <Nav className="me-auto">  
  //         <Nav.Link as={Link} to="login">Home</Nav.Link>  
  //         <Nav.Link href="#link">Link</Nav.Link>  
  //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">  
  //           <NavDropdown.Item href="#action/3.1">Dropdown Item 1</NavDropdown.Item>  
  //           <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
  //           <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
  //           <NavDropdown.Divider />  
  //           <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>
              
  //         </NavDropdown>  
  //         <Nav.Link href="/login">Login</Nav.Link>
  //         <Outlet></Outlet>
  //       </Nav>  
  //     </Navbar.Collapse>   
  // </Navbar> 
  <nav>
    <Link to="login">Home</Link> |
    <Link to="register"> About Us </Link> |
    <Link to="events"> Contact Us </Link>
    <Outlet/>
</nav>
)
}
export default Notes;


