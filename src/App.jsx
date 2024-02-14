import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vamos a ver el partido de River</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Cuantos goles hace River?? {count}
        </button>
        <button onClick={() => setCount((count) => count - 10)}>
          Cuantos goles hace River?? {count}
        </button>
        <p>
          Total de Goles!! {count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
