import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Plant from './component/Plant';
import Home from './component/Home';
import AnimalDeneme from './component/AnimalDeneme';
import AppNavbarDeneme from './component/navbar/AppNavbarDeneme';
import Animal from './component/Animal';
import React from "react";

const AppRouter = () => {
    return(
        <div>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}></h1>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/animals" element={<Animal />} />
                        <Route path="/plants" element={<Plant />} />

                    </Routes>
                </div>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;
