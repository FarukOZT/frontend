import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes ,Route,
  useParams,
  Form,
} from "react-router-dom";
import { UncontrolledDropdown,Navbar,NavItem,NavLink,NavbarBrand,DropdownMenu,DropdownToggle,Collapse,DropdownItem,NavbarToggler,Nav } from 'reactstrap'

import Home from '../Home';
import Animal from "../AnimalDeneme";
import Plant from "../Plant";
import useCollapse from 'react-collapsed';
import AccordionSection from './AccordionSection';
import PropTypes from 'prop-types';
import navbar from "./navbar.css"

class AppNavbarDeneme extends Component  {

  constructor(props) {
    super(props)
    this.state = {
    }
    this.myFunction = this.myFunction.bind(this);
  }
  myFunction(x) {
    x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  render(){
  return(
  <div>
  
  <div className="topnav">
    <div >
    <button className="active" onClick={this.myFunction}>Menu</button>
    <div id="myLinks">
      <a href="animals">Animal</a>
      <a href="plants">Plants</a>
      <a href="/">Home</a>
    </div>
        
    </div>
  </div>
  
  
  
  </div>
  )}}
export default AppNavbarDeneme;

