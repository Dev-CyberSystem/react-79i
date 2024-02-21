import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from './components/navbar/NavbarComp';
import FooterComp from './components/footer/FooterComp';
import RoutesComp from './components/routes/RoutesComp'
import { useState } from "react"; 

function App() {
  const defaultQty = 1;
  const [prodQty, setProdQty] = useState(defaultQty);

  const hookSet = (qty) => {
    setProdQty(prodQty + qty)
    console.log(`hook actualizado en App.jsx, valor:${prodQty+qty}`)
  }

  const hookReset = () => {
    setProdQty(defaultQty)
    console.log(`hook restablecido en App.jsx, valor:${defaultQty}`)
  }
  
  return (
    <>
    <NavbarComp/>
    <RoutesComp prodQty={prodQty} hookSet={hookSet} hookReset={hookReset} />
    <FooterComp/>
    </>
  );
}

export default App;
