import "./styleFormComp.css";
import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsersProvider } from "../../context/UsersContext";
import { v4 as uuidv4 } from "uuid";

const FormComp = ({editUser, handleClose}) => {
  
  const { addUser, updateUser } = useContext(UsersProvider);

  const [user, setUser] = useState({
    id: editUser ? editUser.id : uuidv4(),
    name: editUser ? editUser.name : "",
    username: editUser ? editUser.username : "",
    email: editUser ? editUser.email : "",
    password: editUser ? editUser.password : "",
    city: editUser ? editUser.city : "",
    phone: editUser ? editUser.phone : "",
    website: editUser ? editUser.website : "",
    isAdmin: editUser ? editUser.isAdmin : false
  });

  const resetUserState = () => {
      setUser({
        id: uuidv4(),
        name: "",
        username: "",
        email: "",
        password:"",
        city: "",
        phone: "",
        website: "",
        isAdmin: false
      });
  };

  const handleChange = (e) => {
    if(e.target.type==="checkbox"){
      setUser({
        ...user,
        [e.target.name]: e.target.checked,
    });
    } else {
      setUser({
          ...user,
          [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editUser) {
      updateUser(user);
      handleClose();
      resetUserState()
    } else {
      addUser(user);
      resetUserState()
    }
  };

  return (
    <>
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
          <Form.Label className="mb-0">Sobrenombre de usuario</Form.Label>
          <Form.Control required
            type="text"
            value={user.username}
            onChange={handleChange}
            name="username"
            placeholder="Alias" />
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
          <Form.Control
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
        <Form.Group className="mb-2">
          <Form.Label className="mb-0">Administrador</Form.Label>
          <Form.Check
            type="checkbox"
            label="Admin"
            checked={user.isAdmin}
            onChange={handleChange}
            name="isAdmin" />
        </Form.Group>
        {editUser 
        ?<Button variant="warning" type="submit">Guardar cambios</Button> 
        :<Button variant="success" type="submit">Agregar usuario</Button>
        }
      </Form>
    </>
  );
};
export default FormComp;
