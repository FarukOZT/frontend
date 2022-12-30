import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import Animal from '../Animal';
import { NavLink } from "react-router-dom";

export default class AppNavbar extends Component {


    render() {
        return (
            
            <Navbar color="warning" success expand="lg">
                <Container>

                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/animals">Animal</NavLink>
                    <NavLink to="/plants">Plant</NavLink>

                </Container>


            </Navbar>
        )
    }

}