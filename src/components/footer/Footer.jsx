import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <footer>
        <Container xl>
          <div className="row mt-3 border-top border-dark">
            <div className="col-md-4 text-white text-center">
              <h3 className="pt-3 mb-3">Categorías</h3>
              <nav className="d-flex flex-column">
                <a className="text-decoration-none text-white" href="#">
                  Home
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Market
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Games
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Recomendados
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Copyright
                </a>
              </nav>
            </div>
            <div className="col-md-4 text-white text-center">
              <h3 className="pt-3 mb-3">Sobre Nosotros</h3>
              <nav className="d-flex flex-column">
                <a className="text-decoration-none text-white" href="#">
                  Nuestra Historia
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Misión, Vision, Valores
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Carreras
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Política y Privacidad
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Términos de servicio
                </a>
              </nav>
            </div>
            <div className="col-md-4 text-white text-center">
              <h3 className="pt-3 mb-3">Soporte</h3>
              <nav className="d-flex flex-column">
                <a className="text-decoration-none text-white" href="#">
                  Preguntas Frecuentes
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Ayuda en linea
                </a>
                <a className="text-decoration-none text-white" href="#">
                  Confianza y Seguridad
                </a>
              </nav>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
