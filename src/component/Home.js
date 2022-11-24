import React, { Component } from 'react';
import AppNavbar from './navbar/AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';
import Header from '../png';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                {/* <Button color="link"><Link to="/">Home</Link></Button>
                <Button color="link"><Link to="/animals">Animals</Link></Button>
                <Button color="link"><Link to="/plants">Plants</Link></Button> */}
                </Container>
            </div>
        );
    }
}

function App() {
  return (
    <div>
      {/* Logo is an actual React component */}
      <Header />
    </div>
  );
}
export default Home;