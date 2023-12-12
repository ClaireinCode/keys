import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Liked_Card({cardData, handleDoubleClick}) {
  console.log("is this printing??", cardData)

  return (
    <Card style={{ width: '18rem' }} className="liked_cards_base" onDoubleClick={handleDoubleClick(cardData.mlsId)}>
      <Carousel>
        <Carousel.Item>
          {cardData ? 
            (<img className="d-block w-100" src={cardData.photos} alt={`Slide`} draggable={false}/>) : ("No photo available")}
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>${cardData.listPrice}</Card.Title>
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