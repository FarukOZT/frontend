import React, {Component} from 'react';
import AppNavbar from './navbar/AppNavbar';
import {Link} from 'react-router-dom';
import {Button, Container} from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';
import "../image.css"

class Home extends Component {

    render() {
        return (
            <div>
                <AppNavbarDeneme/>
                <div>
                    <h1>HOS GELDINIZ </h1>
                    <img src= "https://img-s1.onedio.com/id-5520c6107ffd8bea618e1499/rev-0/w-600/h-334/f-gif/s-f5bd49d66b430391eb4ec4a59ac6c9f67d6f44e7.gif">

                    </img>
                </div>

            </div>
        );
    }
}

export default Home;