import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AppNavbar from './navbar/AppNavbar';


class AnimalDeneme extends Component {

    state = {
        animals: []
      }
    
      componentDidMount() {
        axios.get(`/animals`)
          .then(res => {
            const animals = res.data;
            this.setState({ animals });
          })
      }
    
      render() {
     const {animals} = this.state;

const animalsList = animals.map(animal => {
         return <tr key={animal.id}>
             <td style={{whiteSpace: 'nowrap'}}>{animal.name}</td>
             <td>{animal.description}</td>
             {/* <td>
                 <ButtonGroup>
                     <Button size="sm" color="primary" tag={Link} to={"/animals" + animal.id}>Edit</Button>
                     <Button size="sm" color="danger" onClick={() => this.remove(animal.id)}>Delete</Button>
                 </ButtonGroup>
             </td> */}
         </tr>
     });

        return (
            <div>
                <AppNavbar/>
                <ul>
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
                </ul>
                

            </div>
          
        )
      }
}
export default AnimalDeneme