import { CardGeneric } from '../../components/card/CardGeneric'
import { CarouselHome } from '../../components/carousel/Carousel'
import { Error } from '../../components/error/Error'
import { InfoSection } from '../../components/info/Info'
import Spinner from '../../components/spinner/Spinner'
import { GetPopularMovies } from '../../services/getPopularMovies'
import './Home.css'

const Home = () => {
	const { firstTen, isLoading, error } = GetPopularMovies()
	const carouselItems = firstTen?.slice(0, 3).map((item) => {
		return {
			title: item.original_title,
			id: item.id,
			img: item.backdrop_path,
			description: item.overview,
		}
	})

	const infoHome = {
		img: carouselItems[1]?.img,
		text: carouselItems[1]?.description,
	}

	return (
		<>
			<article className='container-fluid  my-2'>
				<section className='row'>
					<div className='col'>
						<CarouselHome
							itemsArray={carouselItems}
							interval={2000}></CarouselHome>
					</div>
				</section>
			</article>

			<h1 className='text-center py-2 text-light '>Peliculas destacadas</h1>
			{isLoading ? (
				<Spinner />
			) : (
				<article className='container-md mb-5 '>
					<section className='row'>
						{error ? (
							<Error errorMsg={error.response.data.status_message} />
						) : (
							<div className='col-12 d-flex flex-wrap justify-content-center align-items-stretch gap-4'>
								{firstTen.map((movie) => (
									<CardGeneric
										key={movie.id}
										cardImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
										cardTitle={movie.title}
										cardText={movie.overview}></CardGeneric>
								))}
							</div>
						)}
					</section>
				</article>
			)}

			<h2 className='text-center py-2 text-light '>Nuestra recomendacion</h2>
			{isLoading ? (
				<Spinner />
			) : (
				<article className='container-md mb-5 '>
					<InfoSection info={infoHome}></InfoSection>
				</article>
			)}
		</>
	)
}

export default Home
