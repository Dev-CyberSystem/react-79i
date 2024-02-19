import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Carousel = () =>{
return (
    <>
    <h1 className='text-center pt-5 mt-5 text-white'>Carousel </h1>
    <Swiper className='mt-5'
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide>
            <img src="src\assets\hermosos-paisajes-paisajes-naturales-hacen-que-personas-relajen-disfruten-fondo-pantalla_912113-244689.avif" alt="paisaje 1" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\assets\cuadro-paisaje-montana-atardecer-fondo_865982-462.avif" alt="paisaje 2" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\assets\paisaje-rio-montana-nubes-arboles_208581-1900.avif" alt="paisaje 3" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\assets\hermoso-paisaje-montana-lago-bosque-pintura-arte-digital_900706-14677.avif" alt="paisaje 4" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\assets\pintura-paisaje-montana-puesta-sol-fondo_933478-7.avif" alt="paisaje 5" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\assets\pintura-paisaje-montana-rio-montanas-al-fondo_920872-19.avif" alt="paisaje 6" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="src\assets\pintura-paisaje-montana-rio-f_670382-25635.avif" alt="paisaje 7" />
        </SwiperSlide>
        ...
    </Swiper>
    </>
  );
}

export default Carousel;
