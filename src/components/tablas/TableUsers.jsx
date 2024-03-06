/* eslint-disable no-unused-vars */
import Table from 'react-bootstrap/Table';
import { useContext } from 'react';
import { userProvider } from '../../context/UsersContext';

function TableUsers() {
  const { users } = useContext(userProvider);
  console.log(users);

  return (
    <>
      {users.length === 0 ? (
        'No hay usuarios'
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.company}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
export default TableUsers;
