import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavbarComp from './components/navbar/NavbarComp';
import FooterComp from './components/footer/FooterComp';
import RoutesComp from './components/routes/RoutesComp'
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const defaultQty = 10;
  const [prodQty, setProdQty] = useState(defaultQty);
  const [prodArr, setProdArr] = useState([]);
  
  const hookSet = (qty) => {
    setProdQty(prodQty + qty)
    console.log(`hook actualizado en App.jsx, valor:${prodQty+qty}`)
  }
  
  const hookReset = () => {
    setProdQty(defaultQty)
    console.log(`hook restablecido en App.jsx, valor:${defaultQty}`)
  }
  
  useEffect(() => {
    const getData = async () => {
      try {
        const serverData = await axios.get("https://jsonplaceholder.typicode.com/users");
        setProdArr(serverData.data)
      }
      catch(ev) {
        console.warn(`==> ${ev}`)
      }
    }
    getData();
  }, [prodQty]);
  
  console.log(prodArr)

  return (
    <>
    <NavbarComp/>
    <RoutesComp prodQty={prodQty} hookSet={hookSet} hookReset={hookReset} prodArr={prodArr} />
    <FooterComp/>
    </>
  );
}

export default App;
