import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export function Info() {
  return (
    <>
    <Container className="d-flex justify-content-center">
    <Table striped bordered hover className='my-2 w-75'>
      <thead>
        <tr>
          <th>#</th>
          <th>TeamName</th>
          <th>GamesPlayed</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Argentina</td>
          <td>3</td>
          <td>9</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Francia</td>
          <td>3</td>
          <td>6</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Poland</td>
          <td>3</td>
          <td>0</td>
        </tr>
      </tbody>
    </Table>
  </Container>
  </>
  );
};