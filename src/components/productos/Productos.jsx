import { useContext } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { ProductsProvider } from "../../context/ProductosContext";
import PropTypes from "prop-types";

const Productos = () => {
  
  const { productos } = useContext(ProductsProvider);


  return (

    <>
      <h1>Componente de Productos</h1>

      <Container>
        {productos.length === 0 ? (
          <h2>Aqui no hay nada patron</h2>
        ) : (
          <Row key={productos}>
            {productos.map((producto) => (
              <>
                <Col xs={12} lg={3} md={4} sm={6}>
                  <Card style={{ width: "18rem" }} key={producto.id}>
                    <Card.Img variant="top" src={producto.images[0]} />
                    <Card.Body>
                      <Card.Title>{producto.title}</Card.Title>
                      <Card.Text>{producto.price}</Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </>
            ))}
        </Row>
        )}
      </Container>
    </>
  );
};

Productos.propTypes = {
  productos: PropTypes.array,
};

export default Productos;