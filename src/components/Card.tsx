import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards() {
  return (
    <Card className='d-grid gap-2 col-2 mx-auto' style={{ width: '32rem' }}>
      <Card.Img variant="top" src="https://files.tecnoblog.net/wp-content/uploads/2022/01/dark-souls-3-edited.jpeg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;