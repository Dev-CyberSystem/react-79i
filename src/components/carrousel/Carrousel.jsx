import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import imagen2 from '../../assets/img/carrousel2.jpg'


export function CarrouselHome() {
  return (
    <Carousel className='mx-auto d-block text-center  w-50 mt-3 '>
      <Carousel.Item>
      <Image src={imagen2} />
        <Carousel.Caption>
          <h3>Capacitacion</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={imagen2} />
        <Carousel.Caption>
          <h3>Empresas</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={imagen2} />
        <Carousel.Caption>
          <h3>Personal seleccionado</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};