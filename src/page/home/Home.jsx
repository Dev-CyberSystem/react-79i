import Cards from "../../components/cards/Cards.jsx"
import Carrousel from "../../components/carrousel/Carrousel.jsx"
import Section from "../../components/section/Section.jsx"
import Productos from "../../components/productos/Productos.jsx"

const Home = () => {

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //     .then(response => response.json())
  //     .then(json => console.log(json)) 

  return (
    <>
    <section>
      <Carrousel />
    </section>
    <section>
      <Section />
      <h2 className="text-center">Tarea tres</h2>
      <Productos />
      <Cards />
    </section>
    </>
  )
}

export default Home
