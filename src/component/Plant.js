import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';
import {Link} from 'react-router-dom';
import AppNavbar from './navbar/AppNavbar';

class Plant extends Component {

    constructor(props) {
        super(props);
        this.state = {plants: []};
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('/plants')
            .then(response => response.json())
            .then(data => this.setState({plants: data}));
    }

    async remove(id) {
        await fetch(`/plants/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedPlants = [...this.state.plants].filter(i => i.id !== id);
            this.setState({plants: updatedPlants});
        });
    }

    render() {
        const {plants} = this.state;

        const plantsList = plants.map(plant => {
            return <tr key={plant.id}>
                <td style={{whiteSpace: 'nowrap'}}>{plant.name}</td>
                <td>{plant.description}</td>
                {/* <td>
                <ButtonGroup>
                    <Button size="sm" color="primary" tag={Link} to={"/plants/" + plant.id}>Edit</Button>
                    <Button size="sm" color="danger" onClick={() => this.remove(plant.id)}>Delete</Button>
                </ButtonGroup>
            </td> */}
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    {/* <div className="float-right">
                    <Button color="success" tag={Link} to="/plants/add">Add Plant</Button>
                </div> */}
                    <h3>Plants</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="30%">Name</th>
                            <th width="30%">description</th>
                            {/* <th width="40%">Actions</th> */}
                        </tr>
                        </thead>
                        <tbody>
                        {plantsList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Plant