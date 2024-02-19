import React from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';

export function Cards1 () {
  return (
    <>
    <Container className='justify-content-around'>
    <Row className="justify-content-center">
      <Col xs={12} sm={6} md={4} className="mb-4">
        <Card className='bg-light' border="warning">
        <Card.Img variant="top" src="https://picsum.photos/1920/1080?grayscale" fluid />
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
        <Card className='bg-light' border="warning">
          <Card.Img variant="top" src="https://picsum.photos/1920/1080?grayscale" fluid />
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
        <Card className='bg-light' border="warning">
          <Card.Img variant="top" src="https://picsum.photos/1920/1080?grayscale" fluid />
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
    </>
  );
};
