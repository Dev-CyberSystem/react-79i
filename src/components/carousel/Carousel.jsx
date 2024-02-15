import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

export const CarouselHome = () => {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={1000}>
					<Image
						src='https://picsum.photos/600/400'
						className='d-block mx-auto '
						alt='carousel imagen'
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<Image
						src='https://picsum.photos/600/400?blur'
						className='d-block mx-auto '
						alt='carousel imagen'
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src='https://picsum.photos/600/400?grayscale'
						className='d-block mx-auto '
						alt='carousel imagen'
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</>
	)
}
