import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CardsCtrlComp from "../../components/cardsControl/CardsCtrlComp";
// import { useState } from "react";
// import RoutesComp from '../../components/routes/RoutesComp';
// import { Routes, Route } from "react-router-dom";
import Products from "../products/Products.jsx";
import CardsComp from "../../components/cards/CardsComp.jsx";

const Admin = ({ hookSet, monitor, hookReset }) => {
  // const [count, setCount] = useState(10);

  // const hookSet = (qty) => {
  //     setCount(count+qty)
  //     console.log(count+qty)
  // }

  return (
    <>
      <Container fluid className="admin__body">
        <Row>
          <Card className="bg-warning mb-4">
            <h1 className="text-center p-0 m-0">ADMIN PANEL</h1>
          </Card>
        </Row>
        <Row>
          <Col className="col-8">
            <CardsComp prodQty={monitor} />
          </Col>
          <Col className="col-4 mx-auto">
            <Row>
              <CardsCtrlComp hookSet={hookSet} monitor={monitor} />
            </Row>
            <Row>
              <Button
                className="ctrl__button col-auto mx-auto"
                onClick={() =>
                  hookReset() +
                  console.log("btn 'Restablecer' presionado en page Admin.jsx")
                }>
                Restablecer
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Admin;
