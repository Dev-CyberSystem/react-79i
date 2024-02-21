import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "./styleCardsCtrlComp.css";

const CardsCtrlComp = ({hookSet, monitor}) => {
  // const [count, setCount] = useState(0);
  // console.log(count, "desde componente CardsCtrlComp")
  return (
    <>
      <Card className="text-center">
        <Card.Header>Cantidad de cards a mostrar (Pág. Productos)</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col className="col-2 p-0 my-1">
                <Card>
                  <Card.Text className="fs-5 text-center text-nowrap">
                    {monitor}
                  </Card.Text>
                </Card>
              </Col>
              <Col className="col-5 ctrl__buttonCont">
                <Button className="ctrl__button" onClick={() => hookSet(1)+console.log("btn 'Aumentar' presionado en componente CardsCtrlComp.jsx")} >Aumentar</Button>
              </Col>
              <Col className="col-5 ctrl__buttonCont">
                <Button className="ctrl__button" onClick={() => hookSet(-1)+console.log("btn 'Reducir' presionado en componente CardsCtrlComp.jsx")}>Reducir</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsCtrlComp;
