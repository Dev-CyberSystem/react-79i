import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from './components/navbar/NavbarComp';
import FooterComp from './components/footer/FooterComp';
import RoutesComp from './components/routes/RoutesComp'
import DataContext from './context/DataContext';

function App() {

  return (
    <>
      <DataContext>
        <NavbarComp/>
        <RoutesComp/>
        <FooterComp/>
      </DataContext>
    </>
  );
}
export default App;
