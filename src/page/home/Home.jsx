import { CardGeneric } from '../../components/card/CardGeneric'
import { CarouselHome } from '../../components/carousel/Carousel'
import { Error } from '../../components/error/Error'
import { InfoSection } from '../../components/info/Info'
import Spinner from '../../components/spinner/Spinner'
import useFetch from '../../hooks/useFetch.hook'
import './Home.css'

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2'
const Home = () => {
	const { data, isLoading, error } = useFetch(url)

	if (error) {
		return <Error errorMsg={error.response.data.status_message}></Error>
	}

	if (!data.results || isLoading) {
		return <Spinner></Spinner>
	}

	const carouselItems = data.results?.slice(0, 3).map((item) => {
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
			<article className='container-md mb-5 '>
				<section className='row'>
					<div className='col-12 d-flex flex-wrap justify-content-center align-items-stretch gap-4'>
						{data.results.slice(0, 10).map((movie) => (
							<CardGeneric
								key={movie.id}
								elementId={movie.id}
								cardImg={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
								cardTitle={movie.title}
								cardText={movie.overview}></CardGeneric>
						))}
					</div>
				</section>
			</article>

			<h2 className='text-center py-2 text-light '>Nuestra recomendacion</h2>
			<article className='container-md mb-5 '>
				<InfoSection info={infoHome}></InfoSection>
			</article>
		</>
	)
}

export default Home
