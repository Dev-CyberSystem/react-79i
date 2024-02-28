import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CardsCtrlComp from "../../components/cardsControl/CardsCtrlComp";
import CardsComp from "../../components/cards/CardsComp";
import TableComp from "../../components/table/TableComp";
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataProvider } from "../../context/DataContext";

const Admin = () => {
  const { hookSet } = useContext(DataProvider);
  return (
    <>
      <Container fluid className="admin__body">
        <Row className="mb-3">
          <Card className="bg-warning mb-4">
            <h1 className="text-center p-0 m-0">ADMIN PANEL</h1>
          </Card>
        </Row>
        <Row>
          <Col>
            <TableComp />
          </Col>
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
                  hookSet("=10") + console.log("Replace btn pressed")
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
  hookReset: PropTypes.func,
};
export default Admin;
