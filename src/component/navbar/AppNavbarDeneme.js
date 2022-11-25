import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


export default class AppNavbarDeneme extends Component {

    render() {    

    return (
        <nav className="Nav">
          <div className="Nav__container">
            <Link to="/" className="Nav__brand">
            </Link>

            <div className="Nav__right">
              <ul className="Nav__item-wrapper">
                <li className="Nav__item">
                  <Link className="Nav__link" to="/animals">Animal</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path2">Link 2</Link>
                </li>
                <li className="Nav__item">
                  <Link className="Nav__link" to="/path3">Link 3</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );

    }
}