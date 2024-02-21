import { Card } from "react-bootstrap"
import "./footer.css"
const Footer = () => {
  return (
    <>
     <Card className="card-footer">
      <Card.Header>Footer</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
           Copyright 2024
          </p>
          <footer className="blockquote-footer">
           Realizado por <span><b>Tomas williams</b></span>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
    </>
  )
}

export default Footer