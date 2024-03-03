import React from 'react'
import {UserProvider} from "../../context/UsersContext"
import { useContext ,useState} from 'react'
import { Form,Button } from 'react-bootstrap'
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

const FormUsers = ({editUser,handleClose}) => {
  const {updateUser,addUsers} = useContext(UserProvider)
const [usuario,setUsuario] = useState({
  id:editUser?editUser.id:uuidv4(),
  name:editUser?editUser.name:"",
  age:editUser?editUser.age:"",
  company:editUser?editUser.company:""
})
const handleChange = e =>{
  setUsuario({
    ...usuario,
    [e.target.name]:e.target.value
  })
}
const handleSubmit= e =>{
  e.preventDefault()
 if(editUser){
  updateUser(usuario)
  handleClose()
  Swal.fire({
    position:"center",
    icon:"success",
    title:"Usuario editado",
    showCloseButton:false,
    timer:1500
  })
  setUsuario({
    id:uuidv4(),
    nombre:"",
    edad:"",
    compania:""
  })
 }else{
  addUsers(usuario)
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Usuario agregado",
    showConfirmButton: false,
    timer: 1500,
  })
  setUsuario({
    id: uuidv4(),
    nombre: "",
    edad: "",
    compania: "",
  });
 }
}
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group >
          <Form.Label>Nombre</Form.Label>
          <Form.Control
          type='text'
          value={usuario.name}
          name='nombre'
          onChange={handleChange}
          placeholder='Nombre de usuario'
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Edad</Form.Label>
          <Form.Control
          type='number'
          value={usuario.age}
          name='edad'
          onChange={handleChange}
          placeholder='Edad de usuario'
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Compania</Form.Label>
          <Form.Control
          type='text'
          value={usuario.company}
          name='compania'
          onChange={handleChange}
          placeholder='Compania de usuario'
          />
        </Form.Group>
        {
          editUser ?(
            <Button type='submit' variant='warning'>
              Editar Usuario
            </Button>
          ):(
            <Button type='submit' variant='success'>Agregar Usuario</Button>
          )
        }
      </Form>

    </>
  )
}
FormUsers.propTypes = {
  editUser:PropTypes.object
}
export default FormUsers
