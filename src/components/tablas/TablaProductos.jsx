import { Button, Modal, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductosContext";
import FormProductos from "../formProductos/FormProductos";

const TablaProductos = () => {
    const { productos, deleteProducto } = useContext(ProductsProvider);

    const [ editarProducto, setEditarProducto ] = useState(null);

    // ------------->  MODAL  <-------------
    const [ show, setShow ] = useState(false);

    const handleEdit = ( producto ) => {
        setEditarProducto(producto);
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };
    // ----------------- >< -----------------

    return (
        <>
        {productos.length === 0 ? (
                <h1>No hay productos disponibles</h1>
            ) : (
                <>
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
                            <>
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.precio}</td>
                                <td>
                                    <Button variant="warning" onClick={ () => handleEdit(producto) }>Editar</Button>
                                    <Button variant="danger" onClick={ () => deleteProducto( producto.id) }>Eliminar</Button>
                                </td>
                            </tr>
                            </>
                        ))}
                    </tbody>
                </Table>


                <Modal show={ show } onHide={ handleClose }>
                    
                    <Modal.Header closeButton>
                        <Modal.Title>Formulario de Edición</Modal.Title>
                    </Modal.Header>
                        
                    <Modal.Body>
                        <FormProductos editarProducto={editarProducto} handleClose={handleClose}/>
                    </Modal.Body>

                </Modal>
                </>
            )
        }
        </>     
        
    )
}

export default TablaProductos