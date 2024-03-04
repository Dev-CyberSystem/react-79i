import { useContext } from "react";
import { productosProvider } from '../../context/ProductosContext'
import { Table, Button } from 'react-bootstrap';

const TablaProductos = () => {

    const { productos } = useContext(productosProvider);

    return (
        <>
            {productos.length === 0 ? (
                <h3 className="text-center mt-3 mb-3">No hay productos</h3>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productos.map((producto) => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <Button variant="warning" className="me-1 ms-1">editar</Button>
                                    <Button variant="danger" className="me-1 ms-1">eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </>
    )
}

export default TablaProductos;

