import React from 'react'
import "./contador.css"
const Contador = ({estado,sumandoUno,restandoUno}) => {
  
    return (
    <div className='caja-contador'>
        <h1>Pagina de contador</h1>
        <h2>Contador: {estado}</h2>
        <button onClick={sumandoUno}>Suma el contador en uno</button>
        <button onClick={restandoUno}>Resta el contador en uno</button>
    </div>
  )
}

export default Contador
