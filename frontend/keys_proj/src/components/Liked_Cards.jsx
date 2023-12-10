import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Liked_Card({cardData, key}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={house.photos[0]} alt={`Slide ${house.photos[1]}`} draggable={false}/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>""</Card.Title>
        <Card.Text>
          {house.privateRemarks}
        </Card.Text>
        <Link to="/house_contact"><button>Contact</button></Link>
      </Card.Body>
      <Card.Footer>
          <Button variant="danger">
            Details
          </Button>
        </Card.Footer>
    </Card>
  );
}

export default Liked_Card;