import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export const UsuariosProvider = createContext();

const UsuariosContext = ( {children} ) => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect( () => {
        obtenerDatos();
    }, []);

    // ------------->  GET  <-------------
    const obtenerDatos = async () => {
        try{
            const response = await axios.get("http://localhost:8005/users");
            setUsuarios(response.data);
        }catch(error){
            console.error(error);
        }
    };

    // ------------->  POST  <-------------
    const addUsuario = async (usuario) => {
        try{
            const response = await axios.post("http://localhost:8005/users", usuario);
            setUsuarios([...usuarios, response.data]);
        }catch(error){
            console.error(error);
        }
    };

    // ------------->  DELETE  <-------------
    const deleteUsuario = async (id) => {
        try{
            await axios.delete(`http://localhost:8005/users/${id}`);
            setUsuarios( usuarios.filter( (usuario) => usuario.id !== id ));
        }catch(error){
            console.error(error);
        }
    };

    // ------------->  PUT  <-------------
    const updateUsuario = async (usuario) => {
        try{
            await axios.put(`http://localhost:8005/users/${usuario.id}`, usuario);
            await obtenerDatos();
        }catch(error){
            console.error(error);
        }
    };

    // ------------->  LOGOUT  <-------------
    const logOut = () => {
        localStorage.removeItem("user");
        window.location.href = "/";
    };

    return (
        <UsuariosProvider.Provider value={ { usuarios, addUsuario, updateUsuario, deleteUsuario, logOut } }>
            {children} {" "}
        </UsuariosProvider.Provider>
    )
}

UsuariosContext.propTypes = {
    children: PropTypes.object
}

export default UsuariosContext