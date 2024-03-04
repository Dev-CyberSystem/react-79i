import "./styleFormComp.css";
import { Form, Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { UsersProvider } from "../../context/UsersContext";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

const FormComp = () => {
  //   const [nombre, setNombre] = useState("");
  //   const [precio, setPrecio] = useState("");
  const { addUser } = useContext(UsersProvider);

  const [user, setUser] = useState({
    id: uuidv4(),
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: "",
        },
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: "",
    },
  });

  const handleChange = (e) => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
    });
    }

    console.log(user)

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(user);
    Swal.fire({
        postion: "center",
        icon: "success",
        title: "El usuario fue almacenado",
        showConfirmButton: false,
        timer: 3000
    })
    setUser({
        id: uuidv4(),
        name: "",
        username: "",
        email: "",
        address: {
            street: "",
            suite: "",
            city: "",
            zipcode: "",
            geo: {
                lat: "",
                lng: ""
            },
        },
        phone: "",
        website: "",
        company: {
            name: "",
            catchPhrase: "",
            bs: ""
            }
    });
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
            placeholder="Sobrenombre de usuario" />
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
          <Form.Label className="mb-0">Teléfono</Form.Label>
          <Form.Control required
            type="number"
            value={user.phone}
            onChange={handleChange}
            name="phone"
            placeholder="Teléfono" />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="mb-0">Ciudad</Form.Label>
          <Form.Control
            type="text"
            value={user.address.city}
            onChange={handleChange}
            name="city"
            placeholder="Ciudad" />
        </Form.Group>
        <Button type="submit">Agregar usuario</Button>
      </Form>
    </>
  );
};
export default FormComp;
