import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsersProvider } from "../../context/UsersContext";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const { addUser } = useContext(UsersProvider);
  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    username: "",
    email: "",
    password: "",
    city:"",
    phone: "",
    website:"",
    isAdmin: false,
  })

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    setUser({
      id: uuidv4(),
      name: "",
      username: "",
      email: "",
      password: "",
      city:"",
      phone: "",
      website:"",
      isAdmin: false,
    });
    navigate('/')
  };
  
  return (
    <>
    <Container>
      <Row>
        <Col xs={8} sm={8} md={6} xxl={6} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Nombre</Form.Label>
              <Form.Control required
                type="text"
                value={user.name}
                onChange={handleChange}
                name="name"
                placeholder="Nombre" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Alias</Form.Label>
              <Form.Control required
                type="text"
                value={user.username}
                onChange={handleChange}
                name="username"
                placeholder="Alias" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Contraseña</Form.Label>
              <Form.Control required
                type="password"
                value={user.password}
                onChange={handleChange}
                name="password"
                placeholder="Contraseña" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Email</Form.Label>
              <Form.Control required
                type="email"
                value={user.email}
                onChange={handleChange}
                name="email"
                placeholder="Email" />
            </Form.Group>


            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Ciudad</Form.Label>
              <Form.Control required
                type="text"
                value={user.city}
                onChange={handleChange}
                name="city"
                placeholder="Ciudad" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Teléfono</Form.Label>
              <Form.Control required
                type="phone"
                value={user.phone}
                onChange={handleChange}
                name="phone"
                placeholder="Teléfono" />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Sitio Web</Form.Label>
              <Form.Control
                type="text"
                value={user.website}
                onChange={handleChange}
                name="website"
                placeholder="Sitio Web" />
            </Form.Group>

            <Button variant="success" type="submit" className="mt-2">Registrarse</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};
export default RegisterForm;
