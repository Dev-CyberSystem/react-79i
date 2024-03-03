import React from 'react'
import {Table, Button,Modal} from "react-bootstrap"
import { UserProvider } from '../../context/UsersContext'
import { useContext,useState } from 'react'
import FormUsers from "../formUsuarios/FormUsers"

const TablaUsuarios = () => {
  const {usuarios,deleteUser} = useContext(UserProvider)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [editUser,setEditUser] = useState(null)
  const handleEdit = (usuario) => {
    setEditUser(usuario)
    setShow(true)
  }
  return (
    <>
     {
      usuarios.length === 0 ? 
      <div>No hay usuarios por el momento</div>:
    <>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id usuario</th>
          <th>Nombre usuario</th>
          <th>Edad usuario</th>
          <th>Compania donde trabaja</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(
          usuario=>(
            <>
            <tr>
              <td>{usuario.id}</td>
              <td>{usuario.name}</td>
              <td>{usuario.age}</td>
              <td>{usuario.company}</td>
              <td><Button variant='warning' onClick={()=>handleEdit(usuario.id)}>Editar</Button></td>
              <td><Button variant='danger' onClick={()=>deleteUser(usuario.id)}>Eliminar</Button></td>
            </tr>
            </>
          )
        )}
      </tbody>
    </Table>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Formulario de edicion</Modal.Title>
    </Modal.Header>
    <Modal.Body> <FormUsers editarUsuario = {editUser} handleClose={handleClose}/> </Modal.Body>
   
  </Modal>
  </>} 
    </>
  )
}

export default TablaUsuarios
