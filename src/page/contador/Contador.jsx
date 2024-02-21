import { useState } from 'react'

const Contador = ({contador}) => {
    const [count, setcount] = useState(0)

    const handleIncrementar = () => {
        setcount(count + contador)
    }
    const handleDecrementar = () => {

        setcount(count - contador)
    }
    return (
        <div>
            <p>{contador}</p>
            <button onClick={handleIncrementar}>+</button>
            <button onClick={handleDecrementar}>-</button>
        </div>
    )
}

export default Contador
