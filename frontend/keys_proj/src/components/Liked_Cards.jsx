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
                {cardData.photos.map((photo, index) => (
                <Carousel.Item key={index} className='liked_card_pic'>
                    <img className="d-block w-100" src={photo} alt={`Slide ${index}`} draggable={false}/>
                </Carousel.Item>
                ))}
      </Carousel>
      <Card.Body>
        <Card.Title className="liked_card_title">${cardData.listPrice}<br></br>{cardData.address.full}</Card.Title>
        <Card.Text>
          Status: {cardData.mls.status}<br></br>Days on the Market: {cardData.mls.daysOnMarket}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
          <Button variant="danger" onClick={handleDoubleClick(cardData.mlsId)}>
            Details
          </Button>
          <Link to="/house_contact"><Button>Contact</Button></Link>
        </Card.Footer>
    </Card>
  );
}

export default Liked_Card;