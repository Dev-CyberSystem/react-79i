import { ContadorBoton } from "./ContadorBoton";
import 'react-bootstrap';
import { useState } from "react";

export function Contador () {
    const [contador , setContador] = useState (0);

    function incrementar () {
        setContador (contador + 1);
    }
  return (
    <>
    
    <section className="border-radius border-4 border-opacity-75 ">
    <div> 

    <p>{contador}</p>
    <ContadorBoton incrementar={incrementar}></ContadorBoton>
    </div>
    </section>
    </>
  );
};

