import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styleProductos.css'
import { Container } from 'react-bootstrap';
import ZapatillaProducto from '../../assets/productos/zapatilla-productos.jpg'

export const Productos = () => {
  return (
    <>
    <Container className='productos'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={ZapatillaProducto} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Ver Mas</Button>
    </Card.Body>
  </Card>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ZapatillaProducto} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver mas</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={ZapatillaProducto} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Ver Mas</Button>
      </Card.Body>
    </Card>
  </Container>
  </>
  )
}