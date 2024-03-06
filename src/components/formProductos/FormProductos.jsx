import { Button, Form } from "react-bootstrap";
import { useState } from "react";

const FormProductos = () => {
    
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    precio: "",
  });

   const handleChange = (e) => {  /* el handleChange ACTUALIZA el estado de producto */
     setProducto({
      ...producto, /*Recupera los datos del estado inicial de productos*/
      [e.target.name]: e.target.value,
     });
   }

    const handleSubmit = (e) => { 
        e.preventDefoult();
    }


  return (                                   /* siempre una funciion se va a llamar handle...*/
   <>
   <Form onSubmit={handleSubmit}> 
      <Form.Group className="mb-3" >
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
         type="text"
         value={producto.nombre} 
         onChange ={handleChange}/*Onchange hace el envio de los datos y empezar a guardarlo*/
         name="nombre" 
         placeholder="Nombre del producto" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Precio</Form.Label>
        <Form.Control 
        type="number" 
        value={producto.precio}
        onChange={handleChange} 
        name="precio" 
        placeholder="Precio del producto" />
      </Form.Group>
      <Button type="submit" > Agregar Producto </Button>
    </Form>
   
   
   
   
   
   </>
  )
}

export default FormProductos