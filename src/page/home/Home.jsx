// import { useState } from 'react' // 'useState' no es un componente, estoy usando la funcionalidad
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from '../../components/carousel/Carousel';
import Cards from '../../components/cards/Cards';
import Information from '../../components/information/Information';
import Productos from '../../components/productos/Productos';
import { useState } from 'react';

const Home = () => {
    const funcionProps = () => {
        console.log("Funcion props, desde padre.")
    }

    const club = {
        nombre: "River",
        estadio: "Monumental"
    }

    const [count, setCount] = useState(0);
    console.log(count, "Estao inicial")
    return (
    <>
        <main>
            <CarouselHome/>

            
            <h2 className='text-center mt-5'>Más Productos</h2>
            <Cards/>

            <section className='m-5 text-center '>
                <Information/>
            </section>

            <Productos nombre={"braian"} count={count} funcionProps={()=>setCount(count+1)} club={club}/>

            <h1>Count desde padre: {count}</h1>

        </main>

    </>
  )
}

export default Home