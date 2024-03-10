import { useContext, useState } from "react";
import { Button, Form, Container, Row, Col } from "bootstrap";
import { Row } from "react-bootstrap";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";
import { v4 as uuidv4} from "uuid";
import { useNavigate } from "react-router-dom";




const FormRegistro = () => {
  const { addUSer } = useContext(UsersProvider);

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
    addUSer(usuario);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Usuario registrado",
      showConfirmButton: false,
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
    <>
      <Container>
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
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    value={usuario.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                  />
                </Form.Group>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  value={usuario.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Contraseña"
                />
              </Form.Group>
              <Button type="submit" variant="success">
                Registrarse
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FormRegistro;
