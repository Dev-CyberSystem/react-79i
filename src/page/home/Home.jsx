import Cards from "../../components/cards/Cards"
import Carrousel from "../../components/carrousel/Carrousel"
import Section from "../../components/section/Section"

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
