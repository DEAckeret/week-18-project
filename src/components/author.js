import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Author() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={"./images/man-image.svg"} />
      <Card.Body>
        <Card.Title>Mr. Knowsathingortwo</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" href="/Writers">Visit Profile</Button>
      </Card.Body>
    </Card>
  );
}

export default Author;