import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
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

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animals" element={<AnimalDeneme />} />
                        <Route path="/plants" element={<Plant />} />
                    </Routes>
                </BrowserRouter>


            </div>

        )
    }
}

export default App;