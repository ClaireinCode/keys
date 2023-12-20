import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Liked_Card({cardData, handleClick}) {
  const [commaPrice, setCommaPrice] = useState()

  const numberWithCommas = () => {
    setCommaPrice(cardData.listPrice.toLocaleString('en-US'));
  };

  useEffect(() => {
    numberWithCommas()
  }, [])

  return (
    <Card style={{ width: '18rem' }} className="liked_cards_base">
      <Carousel>
                {cardData.photos.map((photo, index) => (
                <Carousel.Item key={index} className='liked_card_pic'>
                    <img className="d-block w-100" src={photo} alt={`Slide ${index}`} draggable={false}/>
                </Carousel.Item>
                ))}
      </Carousel>
      <Card.Body>
        <Card.Title className="liked_card_title">${commaPrice}<br></br>{cardData.address.full}</Card.Title>
        <Card.Text className='liked_card_text'>
          Status: {cardData.mls.status}<br></br>Days on the Market: {cardData.mls.daysOnMarket}<br></br>{house.agent.contact.firstName} {house.agent.contact.lastName}<br></br>
          Cell: {house.agent.contact.cell}<br></br>Email: {house.agent.contact.email}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
          <Button onClick={() => handleClick(cardData.mlsId)} className='liked_buttons'>
            Details
          </Button>
        </Card.Footer>
    </Card>
  );
}

export default Liked_Card;