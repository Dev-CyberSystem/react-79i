import { Button } from 'react-bootstrap';


export function ContadorBoton  (props) {
  return (
    <>
     <Button variant='success' onClick={props.incrementar}>Contador</Button>
    
    </>
  );
};

