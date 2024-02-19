import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { useState } from "react";
import "./styleNavegador.css"

const Navegador = () => {
  const [menuActivo, setMenuActivo] = useState(false);

  const toggleMenu = () => {
    setMenuActivo(!menuActivo);
  };
  return (
    <>
      <nav className={`navBar ${menuActivo ? 'active' : ''}`}>
        <div className="logo">
          <a href="/index.html">Navegador</a>
        </div>
        <ul className={`navBar__items ${menuActivo ? 'active' : ''}`}>
          <li><a href="/index.html">Inicio</a></li>
          <li><a href="/views/about.html">Nosotros</a></li>
          <li className="nav-item">
            <a className="nav-link" href="/views/login.html">Ingresar <i className="bi bi-box-arrow-in-right"></i></a>
          </li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}></div>
      </nav>
    </>
  );
  
};


export default Navegador;
