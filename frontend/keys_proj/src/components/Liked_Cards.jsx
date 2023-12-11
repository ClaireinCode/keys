import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Liked_Card({cardData, key}) {
  console.log(cardData)

  return (
    <Card style={{ width: '18rem' }}>
      <Carousel>
        <Carousel.Item>
            <img className="d-block w-100" src={cardData.photos} alt={`Slide`} draggable={false}/>
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>{cardData.listPrice}</Card.Title>
        <Card.Text>
          {cardData.privateRemarks}
        </Card.Text>
        {/* <Link to="/house_contact"><button>Contact</button></Link> */}
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