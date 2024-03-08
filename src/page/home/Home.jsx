// import { useState } from 'react' // 'useState' no es un componente, estoy usando la funcionalidad
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from '../../components/carousel/Carousel';
import Cards from '../../components/cards/Cards';
import Information from '../../components/information/Information';
import Productos from '../../components/productos/Productos';

const Home = () => {
    
    return (
    <>
        <main>
            <CarouselHome/>
            
            <h2 className='text-center mt-5'>Más Productos</h2>
            <Cards/>

            <section className='m-5 text-center '>
                <Information/>
            </section>

            <Productos />           

        </main>

    </>
  )
}

export default Home