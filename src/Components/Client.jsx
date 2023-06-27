import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Client(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>Interest : {props.interest}</li>
                <li>Amount : {props.amount}</li>
                <li>Date : {props.date}</li>
            </ul>
        </Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  );
}

export default Client;