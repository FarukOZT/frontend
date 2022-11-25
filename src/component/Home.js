import React, {Component} from 'react';
import AppNavbar from './navbar/AppNavbar';
import {Link} from 'react-router-dom';
import {Button, Container} from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';

class Home extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/animals">animal</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Home;