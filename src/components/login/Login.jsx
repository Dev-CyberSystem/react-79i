import { Button, Form } from "bootstrap"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom";
import { UsersProvider } from "../../context/UsersContext";
import Swal from "sweetalert2";

const Login = ({handleClose}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { usuarios } = useContext(UsersProvider);

  const navigate = useNavigate();


  const handleSubmit = (e) =>{
    e.preventDefault();
    try {
      const user = usuarios.find((user) => user.email === email && user.password === password); //find: obtiene las coincidencia del mismo email y possword.

      if (user){
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
          title: "Usuario y contraseña Incorrecto",
          showConfirmButton: false,
          timer: 1500,
      });
      }
    } catch (error) {
      
      
    }

  };

  const registro = () =>{
    navigate("/registro");
    handleClose();
  };


  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email"
        value={email}
        onChange={(e) => setUsuario( e.target.value)}
        name="email"
        placeholder="Email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control 
        type="password"
        value={password}
        onChange={(e) => setPassword( e.target.value)}
        name="password"
        placeholder="Contraseña"
        />
      </Form.Group>
      <Form.Text>
        <a onClick={registro}>Registrarse</a>
      </Form.Text>


      <Button type="submit" variant="success">
          Iniciar Sesion
      </Button>
    </Form>
    
    
    
    </>
  )
}

export default Login