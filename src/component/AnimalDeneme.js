import React,{ Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import AppNavbar from './navbar/AppNavbar';
import Carousel from 'react-bootstrap/Carousel';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../image.css";
import Slider from "react-slick";
import { Container } from 'reactstrap';
import AppNavbarDeneme from './navbar/AppNavbarDeneme';


class AnimalDeneme extends Component {
    constructor(props) {
        super(props);
        this.state = { animals: [] };
      }
    
      componentDidMount() {
        fetch('/animals')
          .then(response => response.json())
          .then(data => this.setState({ animals: data }));
      }
    render(){
    const { animals,setDefaultImage } = this.state;

    const animalsList = animals.map(animal => {
      return <tr key={animal.id}>
        <td style={{ whiteSpace: 'nowrap' }}>{animal.name}</td>
        <td>{animal.description}</td>
        <img src={animal.image} width="100px" height="100px"/>
      </tr>
    });
   
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
        const handleErrorImage = (data) => {
            setDefaultImage((prev) => ({
              ...prev,
              [data.target.alt]: data.target.alt,
            }));
          };
  return (
    
    <div>
        <AppNavbarDeneme/>
        <Container>
      <Slider {...settings}>
        {animals.map((animal) => (
          <div >
            <div className="card-top">
                <h1>Animals</h1>
              <img
                src={
                  animal.image
                }
                alt={animal.name}
                onError={handleErrorImage}
              />
              <h1>{animal.name}</h1>
            </div>
            <div className="card-bottom">
              <h3>{animal.description}</h3>
              <span className="category">{animal.category}</span>
            </div>
          </div>
        ))}
      </Slider>
      </Container>
    </div>
    )
}
}

export default AnimalDeneme;