import React, {Component} from 'react';
import AppNavbar from './navbar/AppNavbar';
import {Link} from 'react-router-dom';
import {Button, Container} from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';

class Home extends Component {

    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>

                </Container>
            </div>
        );
    }
}

export default Home;