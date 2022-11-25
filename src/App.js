import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Plant from './component/Plant';
import Home from './component/Home';
import AnimalDeneme from './component/AnimalDeneme';
import AppNavbarDeneme from './component/navbar/AppNavbarDeneme';
import Animal from './component/Animal';
import AppNavbar from './component/navbar/AppNavbar';
import AppRouter from './AppRouter';

class App extends Component {


    render() {
        return (
            <div className="main">
                
                <Router>
                    <AppNavbar></AppNavbar>
                    <Switch>

                        <AppRouter/>
                        
                    </Switch>

                </Router>
            </div>

        )
    }
}

export default App;