import { useContext, useState } from "react"
import { UsersProvider } from "../../context/UsersContext";
import { Table, Button, Modal } from "react-bootstrap";
import  FormRegistro from "../registro/FormRegistro";

const TablaUsuario = () => {

    const { usuarios, deleteUsuario } = useContext(UsersProvider);

    const [ editarUsuarios, setEditarUsuarios] = useState(null);

    const [ show, setShow] = useState(false);
    const handleClose = () => setShow(false);



    const handleEdit = (usuario) =>{
        setEditarUsuarios(usuario);
        setShow(true);
    }



  return (
   
    
    <>
      {usuarios.length === 0 ? (
        "No hay usuarios"
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario) => (
               
                  <tr key={usuario.id}>
                    <td>{usuario.id}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.email}</td>
                    <td>{usuario.isAdmin ? "Si" : "No"}</td>
                    <td>
                      <Button variant="warning" onClick={() => handleEdit(usuario)}>Editar</Button>
                      <Button variant="danger" onClick={() => deleteUsuario(usuario.id)}>Eliminar</Button>
                    </td>
                  </tr>
                
              ))}
            </tbody>
          </Table>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Edicion</Modal.Title>
        </Modal.Header>
        <Modal.Body> <FormRegistro editarUsuarios={editarUsuarios} handleClose= {handleClose} /> </Modal.Body> 
        
      </Modal>
        </>           //como queremos los datos de editar producto lo paso por props//
      )}
    
    
    </>
  );
};

export default TablaUsuario