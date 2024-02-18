import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import AlanWakeImg from '../../assets/img/cards/alan wake.jpg';
import lolImg from '../../assets/img/cards/lol.jpg';
import hadesImg from '../../assets/img/cards/hades.jpg';

function Cards() {
  return (
    <Container>
      <Row className="d-flex flex-row justify-content-center mt-4 mb-3 p-5">
        <Col className="col-3">
          <Card className="bg-transparent text-white border-0">
            <Card.Img src={AlanWakeImg} className="rounded-4" />
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Titulo de la Card</Card.Text>
              <div>
                <Button className="btn btn-light fw-bold">JUEGO CARD</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
          <Card className="bg-transparent text-white border-0">
            <Card.Img src={hadesImg} className="rounded-4" />
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Titulo de la Card</Card.Text>
              <div>
                <Button className="btn btn-light fw-bold">JUEGO CARD</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-3">
          <Card className="bg-transparent text-white border-0">
            <Card.Img src={lolImg} className="rounded-4" />
            <Card.Body className="text-center">
              <Card.Title>Card Title</Card.Title>
              <Card.Text>Titulo de la Card</Card.Text>
              <div>
                <Button className="btn btn-light fw-bold">JUEGO CARD</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
