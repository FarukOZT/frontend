import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Plant from './component/Plant';
import Home from './component/Home';
import AnimalDeneme from './component/AnimalDeneme';
import AppNavbarDeneme from './component/navbar/AppNavbarDeneme';
import Animal from './component/Animal';
import React from "react";

const AppRouter = () => {
    return(
        <div>
            <Router>
                <div className="col-md-6">
                    <h1 className="text-center" style={style}></h1>
                    <Switch>
                        <Route exact path='/'  component={Home}/>
                        <Route exact path='/animals' component={AnimalDeneme}/>
                        <Route exact path='/plants' component={Plant}/>

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

const style = {
    color: 'red',
    margin: '10px'
}

export default AppRouter;
