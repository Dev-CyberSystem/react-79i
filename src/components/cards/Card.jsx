import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import '../cards/Card.css';

export function Cards1 () {
  return (
    <Container className='justify-content-evenly'>
    <Row className="m-2 p-2">
      <Col xs={12} sm={6} md={4} className="mb-4">
        <Card className='cardsSize'>
        <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} className="mb-4">
        <Card className='cardsSize'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12} sm={6} md={4} className="mb-4">
        <Card className='cardsSize'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </Container>
  );
};
