import React from 'react'
import { ContadorBoton } from './ContadorBoton';
import { useState } from 'react';

export function ContadorPadreBoton () {

  const [contador,setContador] = useState(0);

  function incrementar () {
    setContador(contador + 1);
  };

  return (
    <>
    <div> CONTADOR PADRE </div>
    <p>{contador}</p>
    <ContadorBoton incrementar={incrementar}></ContadorBoton>
    </>
  );
};
