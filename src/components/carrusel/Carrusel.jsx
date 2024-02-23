import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import ZapatillaTres from '../../assets/carrusel/zapatilla-tres.jpg'
import './styleCarrusel.css'


const Carrusel = () => {
  return ( 
    <Carousel data-bs-theme="dark" className='carrusel'>
    <Carousel.Item>
      <img 
        className="d-block w-100 rounded-4"
        src={ZapatillaTres}
        alt="First slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded-4"
        src={ZapatillaTres}
        alt="Second slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 rounded-4"
        src={ZapatillaTres}
        alt="Third slide"
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  )
}

export default Carrusel