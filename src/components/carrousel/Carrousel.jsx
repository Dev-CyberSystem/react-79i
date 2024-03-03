import './styleCarrousel.css'
import imgUno from '../../../src/img/html.png';
import imgDos from '../../../src/img/css.jpeg';
import imgTres from '../../../src/img/bootstrap.png';
import imgCuatro from '../../../src/img/js.png';
import imgCinco from '../../../src/img/react.jpg';

const Carrousel = () => {
    return (
        <>
            <div className='containerDiseno'>
                <div className='disenoImg mt-3 mb-5'>
                    <img src={imgUno} alt="logo de html" />
                    <img src={imgDos} alt="logo de css" />
                    <img src={imgTres} alt="logo de bootstrap" />
                    <img src={imgCuatro} alt="logo de JS" />
                    <img src={imgCinco} alt="logo de react" />
                </div>
            </div>
        </>
    )
}

export default Carrousel