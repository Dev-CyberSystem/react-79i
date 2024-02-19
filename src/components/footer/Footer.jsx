import { Facebook, Twitter, Whatsapp, Linkedin } from "react-bootstrap-icons"
import "./styleFooter.css"

const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Nombre</h4>
            <ul>
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">servicios</a></li>
              <li><a href="#">Politicas privacidad</a></li>
              <li><a href="#">afiliarse </a></li>
            </ul>           
          </div>
          <div className="footer-col">
            <h4>centro ayuda</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">metodos de pago</a></li>
              <li><a href="#">Devoluciones</a></li>
            </ul>            
          </div>
          <div className="footer-col">
            <h4>Tienda Online</h4>
            <ul>
              <li><a href="#">item 1</a></li>
              <li><a href="#">item 2</a></li>
              <li><a href="#">item 3</a></li>
              <li><a href="#">item 4 </a></li>
            </ul>            
          </div>
          <div className="footer-col">
            <h4>Siguenos</h4>
            <div className="social-links">
              <a href="#"><Facebook></Facebook></a>
              <a href="#"><Twitter></Twitter></a>
              <a href="#"><Whatsapp></Whatsapp></a>
              <a href="#"><Linkedin></Linkedin></a>
            </div>            
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer