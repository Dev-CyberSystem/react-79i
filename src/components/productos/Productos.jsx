import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react";
import { productosProvider } from '../../context/ProductosContext'

function Productos() {
    const { productos } = useContext(productosProvider);

    return (
        <>
            <h3 className="text-center mt-3 mb-3">Productos</h3>

            {productos.length === 0 ? (
                <h3 className="text-center mt-3 mb-3">No hay productos</h3>
            ) : (
                productos.map((producto) => (
                    <div className="text-center me-3 ms-3">
                        <Card style={{ width: '18rem' }} key={producto.id}>
                        <Card.Img variant="top" src={producto.imagen} />
                        <Card.Body>
                            <Card.Title>{producto.nombre}</Card.Title> {/* Asumiendo que producto.nombre es el nombre del producto */}
                            <Card.Text>{producto.precio}</Card.Text>
                            <Button variant="primary">comprar</Button>
                        </Card.Body>
                    </Card>
                    </div>
                ))
            )}
        </>
    );
}

Productos.propTypes = {
    productos: PropTypes.array
};

export default Productos;
