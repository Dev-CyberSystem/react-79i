import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";
import "./styleLogin.css";

const Login = ({ handleClose }) => {
  const { usersArr } = useContext(UsersProvider);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    try {
      const userMatch = usersArr.find((userObj) => userObj.email===email && userObj.password===password)
      if(userMatch){
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bienvenido ${userMatch.name}`,
          showConfirmButton: false,
          timer: 2000
        });
        localStorage.setItem("loggedUser", JSON.stringify(userMatch))
        navigate('/');
      } else if(userMatch===undefined){
        Swal.fire({
          position: "center",
          icon: "error",
          title: `Datos incorrectos`,
          showConfirmButton: false,
          timer: 2000
        });
      }
    } catch(ev) {
      console.log(ev)
    }
  };

  const register = () => {
  }
  
  return (
    <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Email</Form.Label>
              <Form.Control required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label className="mb-0">Contraseña</Form.Label>
              <Form.Control required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                placeholder="Contraseña" />
            </Form.Group>
            <Button variant="success" type="submit" className="mt-2">Iniciar sesión</Button>
            <Form.Text className="ms-3">Todavía no te registraste? Hace click <a className="textLink" onClick={ () => navigate('/register')+handleClose() }>aquí</a></Form.Text>
        </Form>
    </>
  )
}
export default Login