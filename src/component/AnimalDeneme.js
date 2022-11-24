import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';
import {Link} from 'react-router-dom';
import axios from 'axios';
import AppNavbar from './navbar/AppNavbar';


class AnimalDeneme extends Component {

    constructor(props) {
        super(props);
        this.state = {animals: []};
    }

    componentDidMount() {
        fetch('/animals')
            .then(response => response.json())
            .then(data => this.setState({animals: data}));
    }

    render() {
        const {animals} = this.state;

        const animalsList = animals.map(animal => {
            return <tr key={animal.id}>
                <td style={{whiteSpace: 'nowrap'}}>{animal.name}</td>
                <td>{animal.description}</td>

            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">description</th>
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

export default AnimalDeneme