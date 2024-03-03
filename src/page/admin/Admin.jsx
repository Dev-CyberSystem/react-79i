import { Container, Row, Col, Button, Card } from "react-bootstrap";
import CardsCtrlComp from "../../components/cardsControl/CardsCtrlComp";
import CardsComp from "../../components/cards/CardsComp";
import TableComp from "../../components/table/TableComp";
import FormComp from "../../components/form/FormComp"
import PropTypes from "prop-types";
import { useContext } from "react";
import { DataProvider } from "../../context/DataContext";

const Admin = () => {
  const { hookSet } = useContext(DataProvider);
  return (
    <>
      <Container fluid className="admin__body">
        <Row>
          <Card className="bg-warning mb-1">
            <h1 className="text-center my-0">ADMIN PANEL</h1>
          </Card>
        </Row>
        <Row>
          <Card className="bg-secondary my-1 py-0 text-primary-emphasis bg-primary-subtle border border-primary-subtle">
            <h4 className="text-center p-0 m-0">SECCIÓN USUARIOS</h4>
          </Card>
        </Row>
        <Row>
          <Col className="col-9">
            <TableComp />
          </Col>
          <Col className="col-3">
            <FormComp/>
          </Col>
        </Row>
        <Row>
          <Card className="bg-secondary mb-1 mt-4 text-primary-emphasis bg-primary-subtle border border-primary-subtle">
            <h4 className="text-center p-0 m-0">SECCIÓN PRODUCTOS</h4>
          </Card>
        </Row>
        <Row>
          <Col className="col-9">
            <Card>
              <Card.Header className="text-center my-0 py-0">
                <h5 className="py-0 my-0">VISTA PREVIA</h5>
              </Card.Header>
              <CardsComp />
            </Card>
          </Col>
          <Col className="col-3 mx-auto">
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
