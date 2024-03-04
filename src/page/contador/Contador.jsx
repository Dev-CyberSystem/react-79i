import { useState } from 'react'
import Button from 'react-bootstrap/Button';

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
        <>
            <div className='text-center mb-3'>
                <h1 className='mt-3'>{count}</h1>
                <Button variant="secondary" className='me-3 ms-3' onClick={handleIncrementar}><strong>Incrementar</strong></Button>
                <Button variant="secondary" className='me-3 ms-3' onClick={handleDecrementar}><strong>Decrementar</strong></Button>
            </div>
            <div className='text-center'>
                <Button variant="warning" onClick={handleReseteo}>Reset</Button>
            </div>
        </>
    );
};

export default Contador
