import "./styleFormComp.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

const FormComp = () => {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`formulario enviado: ${nombre},${precio}`);
  };
  console.log(nombre, precio);
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            name="nombre"
            placeholder="Nombre del producto"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Precio</Form.Label>
          <Form.Control
            type="number"
            value={precio}
            onChange={(e) => {
              setPrecio(e.target.value);
            }}
            name="precio"
            placeholder="Precio del producto"
          />
        </Form.Group>
        <Button type="submit">Agregar Producto</Button>
      </Form>
    </>
  );
};
export default FormComp;
