import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Animal from '../Animal';
import { Container,Navbar,Nav,NavLink,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'

export default class AppNavbar extends Component {


    render() {
        return (
                <Navbar variant="dark" bg="dark" expand="lg">
                  <Container fluid>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example">
                      <Nav>
                        <NavDropdown
                          id="nav-dropdown-dark-example"
                          menuVariant="dark"
                        >
                          <NavDropdown.Item href="animals">Animal</NavDropdown.Item>
                          <NavDropdown.Item href="plants">Plant</NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>
              );
    }

}