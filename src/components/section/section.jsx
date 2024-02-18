import { Container, Row, Col } from 'react-bootstrap';
import './styleSection.css';

function SectionReact() {
  return (
    <Container>
      <Row className="mt-3 mb-5">
        <Col className="col-12  bg-section  rounded-2 text-light px-3">
          <h2 className="row ms-4 mt-3">Section</h2>
          <div className="border-top border-dark ">
            <h5 className=" mt-4">Descricion de la pagina</h5>
            <p className="fw-bold  mt-3">
              Una página de juegos es un sitio web dedicado a proporcionar una
              amplia variedad de juegos para que los usuarios disfruten en
              línea. Estas páginas suelen ofrecer una amplia gama de opciones de
              juegos, desde juegos casuales y simples hasta juegos más complejos
              y desafiantes. Aquí hay una descripción general de los elementos
              comunes que podrías encontrar en una página de juegos:
            </p>
          </div>
          <div className="border-top border-dark mb-3 "></div>
          <div className="mt-3">
            <p>
              <span className="fw-bold">1. Catálogo de juegos: </span>
              La página suele tener un extenso catálogo de juegos organizados
              por género, tipo, popularidad, etc. Esto puede incluir juegos de
              acción, estrategia, aventura, puzzles, deportes, multijugador,
              entre otros.
            </p>
          </div>
          <div className="mt-3">
            <p>
              <span className="fw-bold">2. Exploración y búsqueda: </span>
              Los usuarios pueden explorar y buscar juegos según sus
              preferencias. Pueden utilizar filtros para encontrar juegos por
              categoría, plataforma, popularidad, etc. También pueden buscar
              juegos específicos por nombre.
            </p>
          </div>
          <div className="mt-3">
            <p>
              <span className="fw-bold">3.Juegos en línea: </span>
              La página permite a los usuarios jugar directamente en el
              navegador web sin necesidad de descargar o instalar ningún
              software adicional. Los juegos suelen estar integrados en la
              página y se ejecutan utilizando tecnologías web como HTML5,
              JavaScript y CSS3.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default SectionReact;
