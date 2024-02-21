import { Card, Container, Row, Col, Button } from "react-bootstrap";
import "./styleCardsCtrlComp.css";
import PropTypes from 'prop-types'

const CardsCtrlComp = ({hookSet, monitor}) => {
  return (
    <>
      <Card className="text-center col-auto mx-auto">
        <Card.Header>Cantidad de cards a mostrar <br/> (Pág. Productos)</Card.Header>
        <Card.Body>
          <Container>
            <Row className="row row-cols-1 row-cols-md-2">
              <Col className="mx-auto p-0 my-1">
                <Card className="ctrl__screen col-4 mx-auto">
                  <Card.Text className="fs-5 text-center text-nowrap">
                    {monitor}
                  </Card.Text>
                </Card>
              </Col>
            </Row>
            <Row className="row row-cols-1 row-cols-md-2">
              <Col className=" ctrl__buttonCont mt-1">
                <Button className="ctrl__button" onClick={() => hookSet(1)+console.log("btn 'Aumentar' presionado en componente CardsCtrlComp.jsx")} >Aumentar</Button>
              </Col>
              <Col className=" ctrl__buttonCont mt-1">
                <Button className="ctrl__button" onClick={() => hookSet(-1)+console.log("btn 'Reducir' presionado en componente CardsCtrlComp.jsx")}>Reducir</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};
CardsCtrlComp.propTypes = {
  hookSet: PropTypes.func,
  monitor: PropTypes.number
}
export default CardsCtrlComp;
