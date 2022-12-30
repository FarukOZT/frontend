import React, { useState } from "react";
import "./navbar.css";

import { NavLink } from "react-router-dom";
import Logo from "../../logo192.png"
import { Component } from "react";
import Nav from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/ButtonGroup';
import NavDropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';

export default class AppNavbarDeneme extends Component {

 
  render(){

    return (
      <>
      <Navbar>
      <Container>
          <Nav className="me-auto">
          <NavLink to="/">Home</NavLink>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
      </>
      
    );
  }
  }
 
  

