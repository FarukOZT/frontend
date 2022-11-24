import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import {Link} from 'react-router-dom';
import Animal from '../Animal';
import { NavLink } from "react-router-dom";

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: true};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Navbar color="dark" dark expand="md">
                {/* <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
                <NavbarBrand tag={Link} to="/animals">Animal</NavbarBrand>
                <NavbarBrand tag={Link} to="/plants">Plants</NavbarBrand> */}
                    <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                    <NavLink to="/animals">Animals</NavLink>
                    </li>
                    <li>
                    <NavLink to="/plants">plants</NavLink>
                    </li>
            </Navbar>
    )}
}