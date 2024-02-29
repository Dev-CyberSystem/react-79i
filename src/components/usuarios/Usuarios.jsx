import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { useContext } from 'react';
import './usuarios.css'
// import UsersContext from '../../contextProvider/UsersContext';
const Usuarios = ({name,email,id}) => {
  // const usuarios = useContext(UsersContext)
  // console.log(usuarios)
  return (
  <>
  <div className='contenedor-usuarios'>
      <Card style={{ width: '18rem',backgroundColor:"violet"}}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         {email}
        </Card.Text>
        <Card.Text>
         Usuario numero: {id}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
  </>
  )
}

export default Usuarios
