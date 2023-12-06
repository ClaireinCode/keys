import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useSwipeable } from 'react-swipeable';

function Liked_Card({ cardData, onSwipeLeft, onSwipeRight }) {
    const handleSwipe = (direction) => {
      direction === 'left' ? onSwipeLeft() : onSwipeRight();
    };


  return (
    <Swipeable
      onSwipedLeft={() => handleSwipe('left')}
      onSwipedRight={() => handleSwipe('right')}
      >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={cardData.photos} />
      <Card.Body>
        <Card.Title>{cardData.originalListPrice}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer>
          <Button variant="danger" onClick={() => handleSwipe('left')}>
            Dislike
          </Button>
          <Button variant="success" onClick={() => handleSwipe('right')}>
            Like
          </Button>
        </Card.Footer>
    </Card>
    </Swipeable>
  );
}

export default Liked_Card;