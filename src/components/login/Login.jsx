import { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { usuarios } = useContext(UsersProvider);

  console.log(usuarios, "usuarios en el login");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const user = usuarios.find(
        (user) => user.email === email && user.password === password
      );

      console.log(user, "user");
      if (user) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Bienvenido",
          showConfirmButton: false,
          timer: 1500,
        });

        localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
        handleClose();
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Usuario o contraseña incorrectos",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const registro = () => {
    navigate("/registro");
    handleClose();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
          />
        </Form.Group>

        <Form.Text>
          Todavia no te registraste? Hace click aqui{" "}
          <a onClick={registro}>Registrarse</a>
        </Form.Text>
        <Button type="submit" variant="success">
          Iniciar Sesión
        </Button>
      </Form>
    </>
  );
};

export default Login;