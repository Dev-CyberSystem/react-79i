import React from 'react'


export function ContadorBoton (props) {
  console.log(props)

  return (
    <>
    {/* <p>{props.incrementar}</p> */}
    <button onClick={props.incrementar}>INCREMENTAR</button>
    </>
  );
};
