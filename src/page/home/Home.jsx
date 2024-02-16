import { CardGeneric } from '../../components/card/CardGeneric'
import { CarouselHome } from '../../components/carousel/Carousel'
import './Home.css'
const Home = () => {
	const cards = [
		{
			id: 1,
			imagen: 'https://picsum.photos/200/150',
			title: 'Generic Title',
			text: 'Lorem ipsum dolor sit amet. Eos mollitia vero aut galisum molestias sit quasi explicabo ut minima omnis 33 quis illo et neque animi',
		},
		{
			id: 2,
			imagen: 'https://picsum.photos/200/150',
			title: 'Generic Title',
			text: 'Lorem ipsum dolor sit amet. Eos mollitia vero aut galisum molestias sit quasi explicabo ut minima omnis 33 quis illo et neque animi',
		},
		{
			id: 3,
			imagen: 'https://picsum.photos/200/150',
			title: 'Generic Title',
			text: 'Lorem ipsum dolor sit amet. Eos mollitia vero aut galisum molestias sit quasi explicabo ut minima omnis 33 quis illo et neque animi',
		},
		{
			id: 4,
			imagen: 'https://picsum.photos/200/150',
			title: 'Generic Title',
			text: 'Lorem ipsum dolor sit amet. Eos mollitia vero aut galisum molestias sit quasi explicabo ut minima omnis 33 quis illo et neque animi',
		},
		{
			id: 5,
			imagen: 'https://picsum.photos/200/150',
			title: 'Generic Title',
			text: 'Lorem ipsum dolor sit amet. Eos mollitia vero aut galisum molestias sit quasi explicabo ut minima omnis 33 quis illo et neque animi',
		},
		{
			id: 6,
			imagen: 'https://picsum.photos/200/150',
			title: 'Generic Title',
			text: 'Lorem ipsum dolor sit amet. Eos mollitia vero aut galisum molestias sit quasi explicabo ut minima omnis 33 quis illo et neque animi',
		},
	]
	return (
		<>
			{/* 
      Landing page
      -Navbar
      -carrousel
      -cards
      -section (Informacion)
    -footer */}

			<h1 className='text-center'>Home</h1>
			<article className='container-md mb-5 '>
				<section className='row'>
					<div className='col'>
						<CarouselHome></CarouselHome>
					</div>
				</section>
			</article>

			<article className='container-md'>
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
		</>
	)
}

export default Home
