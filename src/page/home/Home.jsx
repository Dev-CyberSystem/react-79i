import Cards from "../../components/cards/Cards.jsx"
import Carrousel from "../../components/carrousel/Carrousel.jsx"
import Section from "../../components/section/Section.jsx"

const Home = () => {
  return (
    <>
    <section>
      <Carrousel />
    </section>
    <section>
      <Section />
      <Cards />
    </section>
    </>
  )
}

export default Home
