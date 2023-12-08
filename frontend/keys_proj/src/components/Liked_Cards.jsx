import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Liked_Card({ likes}) {

  return (
    <Card style={{ width: '18rem' }}>
      <Carousel>
        {likes.map((mlsId, index) => (
        <Carousel.Item key={index}>
            <img className="d-block w-100" src={mlsId} alt={`Slide ${index}`} draggable={false}/>
        </Carousel.Item>
        ))}
      </Carousel>
      <Card.Body>
        <Card.Title>""</Card.Title>
        <Card.Text>
          Private Remarks
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