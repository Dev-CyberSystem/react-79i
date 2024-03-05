import { useState, useContext } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const FormRegistro = () => {
  const { addUser } = useContext(UsersProvider);

  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    id: uuidv4(),
    nombre: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(usuario);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario registrado",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
    setUsuario({
      id: uuidv4(),
      nombre: "",
      email: "",
      password: "",
      isAdmin: false,
    });
  };

  return (
    <Container fluid>
      <Row>
        <Col md={6} sm={12} lg={4} xl={4}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={usuario.nombre}
                onChange={handleChange}
                name="nombre"
                placeholder="Nombre del usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={usuario.email}
                name="email"
                onChange={handleChange}
                placeholder="Email del usuario"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={usuario.password}
                name="password"
                onChange={handleChange}
                placeholder="Contraseña del usuario"
              />
            </Form.Group>
            <Button type="submit" variant="success">
              Registrarse
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormRegistro;
