import React, {Component} from 'react';
import axios from "axios";
import "../App.css";
import {Navbar} from 'reactstrap';
import AppNavbar from './navbar/AppNavbar';

class Animal extends Component {

    state = {
        animals: []
    }

    componentDidMount() {
        axios.get(`/animals`)
            .then(res => {
                const animals = res.data;
                this.setState({animals});
            })
    }


    render() {
        const {animals} = this.state;

        return (
            <div class="card-body">
                <AppNavbar/>
                <div className="col-md-6">
                    <h4>Employees List</h4>

                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {

                                        animals.map((animal) => (

                                            <tr>
                                                <td>{animal.name}</td>
                                                <td>{animal.description}</td>
                                            </tr>

                                        ))
                                    }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Animal;