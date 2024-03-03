/* eslint-disable no-unused-vars */
import Carousel from '../components/carrousel/Carousel';
import { Container, Row, Col } from 'react-bootstrap';
import Cards from '../components/cards/Cards';
import SectionReact from '../components/section/section';
import Footer from '../components/footer/Footer';
import { obtenerDatos, formatearDinero } from '../utils/funcionesUtiles';
import CardComponent from '../components/cardFetch/Card';
import { useState, useEffect } from 'react';

const Home = () => {
  const [juegos, setJuegos] = useState([]);

  useEffect(() => {
    const fetchJuegos = async () => {
      try {
        const juegosData = await obtenerDatos();
        setJuegos(juegosData);
      } catch (error) {
        console.error('Error al obtener juegos:', error);
      }
    };

    fetchJuegos();
  }, []);

  const title1 = juegos.length > 0 ? juegos[0].name : '';
  const price1 = juegos.length > 0 ? juegos[0].price : '';

  return (
    <>
      <section>
        <Carousel />
        <Container>
          <Row className="d-flex flex-row justify-content-center mt-4 mb-3 p-5">
            <Col className="col-3">
              <CardComponent title={title1} price={formatearDinero(price1)} />
            </Col>
          </Row>
        </Container>
        <SectionReact />
      </section>
      <Footer />
    </>
  );
};

export default Home;

//Empezando la tarea de react
/* 
      Landing page
      -Navbar
      -carrousel
      -cards
      -section (Información)
      -footer */
