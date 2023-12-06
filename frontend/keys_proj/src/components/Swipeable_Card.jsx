import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import TinderCard from 'react-tinder-card';
import { useEffect } from 'react';

function Liked_Card({ cardData, onSwipeLeft, onSwipeRight, likes, dislikes}) {
    const onSwipe = (direction) => {
      console.log("you swiped:", direction)
      direction === 'left' ? onSwipeLeft() : onSwipeRight();
      console.log("check", direction)
    };

    const onCardLeftScreen = (myIdentifier) => {
      console.log(myIdentifier, 'left the screen')
    }
    useEffect(() => {
      console.log('Liked_Card re-rendered'); // Log when the component re-renders
  }, [likes, dislikes]);

  return (
    <TinderCard
      onSwipe={onSwipe} 
      onCardLeftScreen={() => onCardLeftScreen('fooBar')} 
      preventSwipe={['up', 'down']}
      >
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
    </TinderCard>
  );
}

export default Liked_Card;