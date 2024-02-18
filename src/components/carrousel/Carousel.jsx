import { Carousel, Container, Row } from 'react-bootstrap';
import fc24Img from '../../assets/img/carrousel/fc24.jpg';
import valorantImg from '../../assets/img/carrousel/valorant.jpg';
import horizonImg from '../../assets/img/carrousel/horizon.jpg';

function Carrousel() {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center">
        <div className="col-10 mt-5 ">
          <Carousel data-bs-theme="light">
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4"
                src={fc24Img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>FC 24</h5>
                <p className="fw-bold">Juego de Deporte</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4"
                src={valorantImg}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>VALORANT</h5>
                <p className="fw-bold">Juego de Disparos</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 rounded-4"
                src={horizonImg}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>HORIZON</h5>
                <p className="fw-bold">Juego de Aventura</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </Row>
    </Container>
  );
}

export default Carrousel;
