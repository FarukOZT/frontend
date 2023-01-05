import React, { Component } from 'react';
import axios from "axios";
import "../App.css";
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './navbar/AppNavbar';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';

class Animal extends Component {

  constructor(props) {
    super(props);
    this.state = { animals: [] };
  }

  componentDidMount() {
    fetch('/animals')
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
  }

  render() {
    const { animals } = this.state;

    const animalsList = animals.map(animal => {
      return <tr key={animal.id}>
        <td style={{ whiteSpace: 'nowrap' }}>{animal.name}</td>
        <td>{animal.description}</td>
        <img src={animal.image} width="200px" height="200px"/>
      </tr>
    });

    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <h3>Animals</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="30%">Name</th>
                <th width="30%">description</th>
                <th width="30%">image</th>

                {/* <th width="40%">Actions</th> */}
              </tr>
            </thead>
            <tbody>
              {animalsList}
            </tbody>
          </Table>
        </Container>

      </div>

    )
  }
}

export default Animal;