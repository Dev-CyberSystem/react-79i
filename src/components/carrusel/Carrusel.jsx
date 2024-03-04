import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src="../../src/assets/Carrusel/1.jpg" alt="carrusel image 1"
        style={{ width: '100%', maxHeight: '400px'}}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src="../../src/assets/Carrusel/2.jpg" alt="carrusel image 2"
        style={{ width: '100%', maxHeight: '400px'}}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img src="../../src/assets/Carrusel/3.jpg" alt="carrusel image 3"
        style={{ width: '100%', maxHeight: '400px'}}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carrusel;