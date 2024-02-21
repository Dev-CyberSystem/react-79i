import { ContadorBoton } from "./ContadorBoton";
import "react-bootstrap";
import { useState } from "react";
import "../cards/styleCardsHome.css";

export function Contador() {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }
  return (
    <>
      <div className="parrafo mx-auto d-block text-center w-50 mt-5 rounded-2 p-4">
        <div className="text-center  text-white bg-dark-subtle  mx-auto d-block w-50 rounded-2 p-2">
          <h3 className="text-dark">Botoncito</h3>

          <div>
            <p className="text-danger display-4 ">{contador}</p>
            <ContadorBoton incrementar={incrementar}></ContadorBoton>
          </div>
        </div>
      </div>
    </>
  );
}
