import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Plant from './component/Plant';
import Home from './component/Home';
import AnimalDeneme from './component/AnimalDeneme';
import AppNavbarDeneme from './component/navbar/AppNavbarDeneme';
import Animal from './component/Animal';
class App extends Component {
  

  render() {
    return (
      <div className="main">

        <Router>

          <Switch>

            <Route path='/' exact={true} component={Home}/>
            <Route exact path='/animals' component={Animal}/>
            <Route path='/plants'exact={true} component={Plant}/>
          </Switch>

        </Router>
      </div>

    )
  }
}

export default App;