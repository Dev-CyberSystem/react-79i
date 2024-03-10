import { useContext, useState } from "react";
import { ProductsProvider } from "../../context/ProductosContext";
import { Table, Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import FormProductos from "../formProductos/FormProductos";

const TablaProductos = () => {
  const { productos, deleteProductos } = useContext(ProductsProvider);
  const [editarProductos, setEditarProductos] = useState(null)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleEdit = (producto) => {
    setEditarProductos(producto)
    setShow(true)
  }

  return (
    <>
      {productos.length === 0 ? (
        "No hay productos"
      ) : (
        <>
          <Table className="m-2 p-2" striped bordered hover>
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
                      <Button className="m-1 p-1" variant="warning" onClick={() => handleEdit(producto)}>Editar</Button>
                      <Button className="m-1 p-1" variant="danger" onClick={() => deleteProductos(producto.id)}>Eliminar</Button>
                    </td>
                  </tr>
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de edicion</Modal.Title>
        </Modal.Header>
        <Modal.Body> <FormProductos  editarProductos={editarProductos} handleClose = {handleClose}/> </Modal.Body>
       
      </Modal>
        </>
      )}
    </>
  );
};

export default TablaProductos;
