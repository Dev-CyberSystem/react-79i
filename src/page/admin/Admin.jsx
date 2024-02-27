import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CardsCtrlComp from "../../components/cardsControl/CardsCtrlComp";
import CardsComp from "../../components/cards/CardsComp";
import PropTypes from "prop-types"
import { useContext } from "react";
import { DataProvider } from "../../context/DataContext"

const Admin = () => {
  const { hookReset } = useContext(DataProvider);
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
          <Card>
            <Card.Header className="text-center my-0 py-0">
              <h5 className="py-0 my-0">VISTA PREVIA</h5>
            </Card.Header>
            <CardsComp />
          </Card>
          </Col>
          <Col className="col-4 mx-auto">
            <Row>
              <CardsCtrlComp />
            </Row>
            <Row>
              <Button
                className="ctrl__button col-auto mx-auto"
                onClick={() =>
                  hookReset() +
                  console.log("btn 'Restablecer' presionado en página Admin.jsx")
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
Admin.propTypes = {
  hookReset: PropTypes.func
}
export default Admin;
