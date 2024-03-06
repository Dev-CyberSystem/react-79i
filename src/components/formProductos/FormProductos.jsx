import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const FormProductos = () => {
    const [nombre, setNombre] = useState()
    const [precio, setPrecio] = useState()

    const handleSubmit = (e) => { 
        e.preventDefoult();
    }


  return (
   <>
   <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
         type="text"
         value={nombre} 
         onChange ={(e) => { setNombre(e.target.value) }}/*Capturamos todos los datos que estan en el value nombre*/
         name="nombre" 
         placeholder="Nombre del producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Precio</Form.Label>
        <Form.Control 
        type="number" 
        value={precio}
        onChange={(e) => { setPrecio(e.target.value) }} /*Capturamos todos los datos que estan en el value precio*/
        name="precio" 
        placeholder="Precio del producto" />
      </Form.Group>
      <Button type="submit" > Agregar Producto </Button>
    </Form>
   
   
   
   
   
   </>
  )
}

export default FormProductos