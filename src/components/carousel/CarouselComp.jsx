import { Carousel, Image, Container, Row, Col } from 'react-bootstrap';
import './styleCarouselComp.css';
const CarouselComp = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col className='col-auto mx-auto'>
          <Carousel className=''>
            <Carousel.Item className=''>
              <Image src='https://fastly.picsum.photos/id/104/1600/600.jpg?hmac=3rew2PkcGXsZ9bn79Gy4EuSpqbrchlm4qnVaPoiXqIM'></Image>
              {/* <ExampleCarouselImage text="First slide" /> */}
              <Carousel.Caption className='carousel__text'>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src='https://fastly.picsum.photos/id/284/1600/600.jpg?hmac=_g4jde9uooobT_vTs6QL1IXOczHnfPFJccN7NG0TeMY'></Image>
              {/* <ExampleCarouselImage text="Second slide" /> */}
              <Carousel.Caption className='carousel__text'>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src='https://fastly.picsum.photos/id/36/1600/600.jpg?hmac=BXVgvEqT6SHr8yAGVQge_5oxwp4Ofzy2Mg-4-Pt21TI'></Image>
              {/* <ExampleCarouselImage text="Third slide" /> */}
              <Carousel.Caption className='carousel__text'>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    </>
  )
};
export default CarouselComp;