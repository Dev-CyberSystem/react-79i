import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import adaptabilidad from "../../assets/img/adaptabilidad.png";
import honestidad from "../../assets/img/honestidad.png"
import profesionalismo from "../../assets/img/profesionalismo.png"
import './styleCardsHome.css'


export function CardsHome() {
  return (
    <>

    <div>
        <div className="row justify-content-center mt-4 ">
        <div className=" d-flex justify-content-evenly text-center w-50 rounded-top md-3 sm-1"> 
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={adaptabilidad} />
        <Card.Body>
          <Card.Title className="text-center">Adaptabilidad</Card.Title>
          <Card.Text className="d-flex justify-content-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn-cardHome" >Ver mas</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={honestidad} />
        <Card.Body>
          <Card.Title className="text-center">Honestidad</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn-cardHome">Ver mas</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={profesionalismo} />
        <Card.Body>
          <Card.Title className="text-center">Profesionalismo</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button className="btn-cardHome" >Ver mas</Button>
        </Card.Body>
      </Card>
      </div>
      </div>
    </div>
    
    </>
  );
}
