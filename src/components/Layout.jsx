import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "../css/layout.css";
const Layout =()=>{
   
    return(
        <>
        
        <div className="logo">
        
          <div className="boxing">
        <center><h3>FITOH</h3></center>
        <h5>autoparts y multiservicios</h5>
        </div>
        </div>
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          
          <div className="ullinks">
          
            <div className="lilinks">
            <NavLink to="/" className="links">Home</NavLink>
            <NavLink to="/list" className="links">List</NavLink>
            <NavLink to="/about" className="links">About</NavLink>
            </div>
          
          </div>
        </Container>
      </Navbar>
      </>
    );
};


export default Layout;