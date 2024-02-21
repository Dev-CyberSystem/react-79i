import { Button } from 'react-bootstrap';
import "../cards/styleCardsHome.css";


export function ContadorBoton  (props) {
  return (
    <>
     <Button className='btn-cardHome' onClick={props.incrementar}>Contador</Button>
    
    </>
  );
};

