import React from 'react'
import {Button,Card} from 'react-bootstrap'
import './section.css'
const Section = () => {
  return (
    <div className='div-section'>
      <div className='card-section'>
      <Card>
      <Card.Header>Information</Card.Header>
      <Card.Body>
        <Card.Title>Aprende react con rolling</Card.Title>
        <Card.Text>
          No te pierdas las mejores practicas y ensenanzas.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='card-section'>
      <Card>
      <Card.Header>Information</Card.Header>
      <Card.Body>
        <Card.Title>Aprende react con rolling</Card.Title>
        <Card.Text>
          No te pierdas las mejores practicas y ensenanzas.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
      <div className='card-section'>
      <Card>
      <Card.Header>Information</Card.Header>
      <Card.Body>
        <Card.Title>Aprende react con rolling</Card.Title>
        <Card.Text>
          No te pierdas las mejores practicas y ensenanzas.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      </div>
    </div>
  )
}

export default Section
