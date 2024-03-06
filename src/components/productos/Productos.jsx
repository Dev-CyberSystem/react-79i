import Proptypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Productos = ({ productos }) => {
  return (
    <>
      <h1>Componente de Productos</h1>

      <Container>               
        {productos.length === 0  ? (
          <h2>No hay nada para mostrar</h2>   /* Validamos si hay productos en la tienda usando operador ternario */
        ) : (
          <Row>
            {productos.map(                     /*Si es que hay productos lo mostrare en card a cada uno*/
              (
                producto 
              ) => (
                <>
                  <Col xs={12} lg={3} md={4} sm={6}>
                    <Card style={{ width: "18rem" }} key={producto.id}>
                      <Card.Img variant="top" src="holder.js/100px180" />
                      <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>{producto.precio}</Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              )
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

Productos.prototype = {
  productos: Proptypes.array,
};

export default Productos;
