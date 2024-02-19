import Navbarbar from '../../components/navbar/Navbarbar';
import CarouselComp from '../../components/carousel/CarouselComp';
import CardsComp from '../../components/cards/CardsComp';
import SectionComp from '../../components/section/SectionComp';
import FooterComp from '../../components/footer/FooterComp';

const Home = () => {
  return (
    <>
    <Navbarbar/>
    <CarouselComp/>
    <CardsComp/>
    <SectionComp/>
    <FooterComp/>
       
    {/* 
      Landing page
      -Navbar
      -carrousel
      -cards
      -section (Informacion)
      -footer */}
    </>
  );
}
export default Home