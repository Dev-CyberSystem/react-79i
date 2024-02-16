import React from 'react'
import {Card,CardGroup} from "react-bootstrap"
import image1 from './react1.png';
import image2 from './react2.jpg'
import image3 from './react3.webp'
import './cards.css'
const Cards = () => {
  return (
    <div className='cards-box'>
    <CardGroup className='card-container'>
       
        <Card>
        <Card.Img variant="top" src={image1} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
       
        
        <Card>
        <Card.Img variant="top" src={image2} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
        
     
        
        <Card>
        <Card.Img variant="top" src={image3} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
         </Card>
        
    </CardGroup>
    </div>
  )
}

export default Cards
