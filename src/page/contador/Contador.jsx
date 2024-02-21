import { useState } from 'react'

const Contador = ({ contador }) => {
    const [count, setCount] = useState(contador);

    const handleIncrementar = () => {
        setCount(count + 1);
    };

    const handleDecrementar = () => {
        setCount(count - 1);
    };

    const handleReseteo = () => {
        setCount(contador);
    };

    return (
        <div className='text-center'>
            <h1>{count}</h1>
            <button onClick={handleIncrementar}> + </button>
            <button onClick={handleDecrementar}> - </button>
            <button onClick={handleReseteo}> Reset </button>
        </div>
    );
};

export default Contador
