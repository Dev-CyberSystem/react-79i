import { Container, Row, Col } from 'react-bootstrap';
import './styleSectionComp.css'

const SectionComp = () => {
  return (
    <>
    <Container fluid className='section'>
        <Row>
          <Col className='section__col section__col_1 mx-auto col-12 col-sm-10 col-md-3'>
            <Row>
            <div className='col-auto mx-auto'>
            <img className='img-fluid my-2 rounded-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Mantid_August_2007-2.jpg/250px-Mantid_August_2007-2.jpg" alt="foto-mantis-religiosa" />
            </div>
            </Row>
            <p>Mantis religiosa es el nombre científico de una especie de insecto mantodeo de la familia Mantidae comúnmente llamado santateresa, silbata, mamboretá, campamocha, tatadiós o simplemente mantis. Tiene una amplia distribución geográfica en todo el Viejo Mundo (Eurasia y África), con numerosas subespecies según las regiones. Se introdujo en Norteamérica en 1899, en un barco con plantones, y a pesar de ser una especie introducida, es el insecto oficial del estado estadounidense de Connecticut.</p>
          </Col>
          <Col className='section__col section__col_2 mx-auto col-12 col-sm-10 col-md-9'>
            <h3>Comportamiento</h3>
            <p>Alcanzan un año de vida, durante el cual mudan seis veces antes de convertirse en adultos. Para mudar se suspenden de una rama, se desprenden de la cubierta exterior o exuvia y salen por la parte anterior de la última cutícula. <br/>
              Este insecto no es venenoso. Utiliza sus fuertes patas delanteras para atrapar a sus presas y devorarlas vivas.</p>
            <h3>Descripcion</h3>
            <p>
              Es un insecto de tamaño mediano de aproximadamente 6 a 7 cm, con un tórax largo y unas antenas delgadas. Tiene dos grandes ojos compuestos y tres ojos simples pequeños entre ellos. La cabeza puede girar hasta 180°. Sus patas delanteras, que mantiene recogidas delante de la cabeza, están provistas de espinas para sujetar a sus presas.<br/>
              Son animales solitarios excepto en la época de reproducción, cuando macho y hembra se buscan para aparearse. Cuando hay más de un macho cerca de una hembra, éstos se pelean y solo uno se aparea. Las hembras son más grandes que los machos. En la mayoría de ocasiones, durante o tras el apareamiento, la hembra se come al macho.<br/>
              Pueden ser de color verde o pardo con distintos matices. El color del adulto lo determina el medio en el que habita durante su última muda (por ejemplo, amarillo, si se trata de paja seca, o verde, si es hierba fresca).<br/>
              Es el único insecto conocido que cuenta con un único oído que está localizado. en el tórax.</p>
          </Col>
        </Row>
    </Container>
    </>
  )
}

export default SectionComp;