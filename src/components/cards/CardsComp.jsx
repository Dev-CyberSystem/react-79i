import "./styleCardsComp.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { DataProvider } from "../../context/DataContext";
import { useContext } from "react";

const CardsComp = () => {
  const { prodQty, prodArr } = useContext(DataProvider);
  const trimmedArr = [...prodArr];
  trimmedArr.splice(prodQty);
  return (
    <>
      <Container fluid className="cardGroup text-center">
        <Row xs={1} sm={2} md={3} lg={4} className="cardGroup__cardRow">
          {trimmedArr.map((item, idx) => (
            <Col className="cardGroup__cardCol g-4 mt-0 mb-4 mx-auto" key={idx}>
              <Card className="cardGroup__card h-100">
                <Card.Header className="py-1 px-0 fw-bold fs-5">
                  {item.title}
                </Card.Header>
                <Card.Img
                  className="cardGroup__img"
                  variant="top"
                  src={item.images}
                />
                <Card.Body>
                  <article className="cardGroup__article">
                    <p className="lead m-0">Descripción:</p>
                    <p>{item.description}</p>
                  </article>
                  <article>
                    <p className="lead m-0">Disponible hasta:</p>
                    <p>{item.updatedAt}</p>
                  </article>
                  <article className="">
                    <p className="lead m-0">Categoria:</p>
                    <p className="m-0">{item.category.name}</p>
                  </article>
                </Card.Body>
                <Card.Footer className="py-0">
                  <small className="fs-3">{`$ ${item.price},00`}</small>
                </Card.Footer>
                <Card.Footer className="py-0">
                  <small>{item.category.creationAt}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
CardsComp.propTypes = {
  prodQty: PropTypes.number,
  prodArr: PropTypes.array,
};
export default CardsComp;
