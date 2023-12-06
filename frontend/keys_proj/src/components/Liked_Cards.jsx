import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';

function Liked_Card({ cardData, likes, dislikes}) {

    useEffect(() => {
      console.log('Liked_Card re-rendered'); // Log when the component re-renders
  }, [likes, dislikes]);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"/src/assets/chicago1.jpeg"} />
      <Card.Body>
        <Card.Title>{cardData.mlsId}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
          <Button variant="danger" onClick={() => onSwipe('left')}>
            Dislike
          </Button>
          <Button variant="success" onClick={() => onSwipe('right')}>
            Like
          </Button>
        </Card.Footer>
    </Card>
  );
}

export default Liked_Card;