import { CardGeneric } from '../../components/card/CardGeneric'
import { cards } from '../../components/card/cards'
import { CarouselHome } from '../../components/carousel/Carousel'
import { InfoSection } from '../../components/info/Info'
import { infoHome } from '../../components/info/infoHome'
import './Home.css'
const Home = () => {
	return (
		<>
			{/* 
      Landing page
      -Navbar
      -carrousel
      -cards
      -section (Informacion)
    -footer */}

			<h1 className='text-center text-decoration-underline  my-4'>Home</h1>

			<article className='container-md mb-5 '>
				<section className='row'>
					<div className='col'>
						<CarouselHome></CarouselHome>
					</div>
				</section>
			</article>

			<article className='container-md mb-5 '>
				<section className='row'>
					<div className='col-12 d-flex flex-wrap justify-content-center align-items-center gap-4'>
						{cards.map((card) => (
							<CardGeneric
								key={card.id}
								cardImg={card.imagen}
								cardTitle={card.title}
								cardText={card.text}></CardGeneric>
						))}
					</div>
				</section>
			</article>

			<article className='container-md mb-5 '>
				<InfoSection info={infoHome}></InfoSection>
			</article>
		</>
	)
}

export default Home
