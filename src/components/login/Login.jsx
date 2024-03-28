import { useContext, useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";

// eslint-disable-next-line react/prop-types
const Login = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUsuario, usuarioLogueado } = useContext(UsersProvider);

  console.log(usuarioLogueado, "usuarios en el login");

  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioLogueado) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Bienvenido",
        showConfirmButton: false,
        timer: 1500,
      });

      const usuario = {
        nombre: usuarioLogueado.nombre,
        apellido: usuarioLogueado.apellido,
        email: usuarioLogueado.email,
        admin: usuarioLogueado.admin,
      };

      localStorage.setItem("user", JSON.stringify(usuario));
      
      handleClose();
    } 
  }, [usuarioLogueado, handleClose]);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      loginUsuario({ email, password });
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
