import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import "./styleCardsCtrlComp.css";

const CardsCtrlComp = () => {
  return (
    <>
      <Card className="text-center">
        <Card.Header>Cantidad de cards por página (Pág. Productos)</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col className="col-2 p-0 my-1">
                <Card>
                  <Card.Text className="fs-5 text-center text-nowrap">
                    20
                  </Card.Text>
                </Card>
              </Col>
              <Col className="col-5 ctrl__buttonCont">
                <Button className="ctrl__button" onClick={() => setCount(count + 1)}>Aumentar</Button>
              </Col>
              <Col className="col-5 ctrl__buttonCont">
                <Button className="ctrl__button" onClick={() => setCount(count - 1)}>Reducir</Button>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardsCtrlComp;
