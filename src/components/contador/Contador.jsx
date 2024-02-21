import React, { useState } from 'react';

const Contador = () => {

    const [count, setCount] = useState(0);

    const incrementador = () => {
      setCount(count + 1);
    };
  
    return (
      <div>
        <h1>Contador: {count}</h1>
        <button onClick={incrementador}>Incrementar</button>
      </div>
    );
}

export default Contador