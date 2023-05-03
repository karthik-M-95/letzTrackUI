import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom';
// import {Nav , Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Navigator from "./Navigator"
import EventsComp from "../Body/EventComponent";
import Events from "../jsonFiles/Events";


function Header(){

    return(
    <>
    <Navigator 
        value={Events}
    />
    </>
    );
    }
export default Header;