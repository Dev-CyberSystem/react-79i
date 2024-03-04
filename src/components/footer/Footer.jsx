import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light">
      <Container>
        <Row>
          <Col>
            <p>Sobre Nosotros</p>
          </Col>
          <Col className="text-right">
            <p>© 2024 Rolling Code</p>
          </Col>
          <Col className="text-right">
            <p>Contacto: info@rolling.com.ar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;