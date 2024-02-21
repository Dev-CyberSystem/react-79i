import Carousel from '../../components/carrousel/Carousel';
import Cards from '../../components/cards/Cards';
import SectionReact from '../../components/section/section';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <>
      <section>
        <Carousel />
        <Cards />
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
