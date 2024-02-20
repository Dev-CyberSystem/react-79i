import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from './components/navbar/NavbarComp';
import FooterComp from './components/footer/FooterComp';
import RoutesComp from './components/routes/RoutesComp'

function App() {
  return (
    <>
    <NavbarComp/>
    <RoutesComp/>
    <FooterComp/>
    </>
  );
}

export default App;
