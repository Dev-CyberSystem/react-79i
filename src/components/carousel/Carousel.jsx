import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
//import './Carousel.css'
// import BoostrapIcon from '../../components/carousel/ExampleCarouselImage.png'

export function Carousel1() {
  return (
    <>
    <Carousel className='justify-content text-center center mb-3 p-2'>
      <Carousel.Item className='backgroundCarousel'>
      <Image src="https://picsum.photos/1920/1080?grayscale" className='w-75 h-100' fluid/>
      {/* <Image src={BoostrapIcon} /> */}
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://picsum.photos/1920/1080?grayscale" className='w-75 h-100' fluid/>
        <Carousel.Caption>
        <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src="https://picsum.photos/1920/1080?grayscale" className='w-75 h-100' fluid/>
        <Carousel.Caption>
        <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};