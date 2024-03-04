import "./styleTableComp.css";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UsersProvider } from "../../context/UsersContext";

const TableComp = () => {
  const { usersArr, suprUser } = useContext(UsersProvider);
  return (
    <>
      <Table
        striped
        hover
        responsive="md"
        className="border border-success border-opacity-100 text-center align-middle">
        <thead>
          <tr>
            <th key="342f2f2f" className="border border-success border-opacity-50">N°</th>
            <th key="5g5j77j" className="border border-success border-opacity-50">NOMBRE</th>
            <th key="243h78" className="border border-success border-opacity-50">USUARIO</th>
            <th key="7j48ih" className="border border-success border-opacity-50">TELÉFONO</th>
            <th key="68755hggh" className="border border-success border-opacity-50">EMAIL</th>
            <th key="345urgh65" className="border border-success border-opacity-50">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {usersArr.map((userObj) => (
            <tr key={userObj.id}>
              <td key={"id"+userObj.id} className="border border-success border-opacity-50">
                {userObj.id}
              </td>
              <td key={"name"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.name}
              </td>
              <td key={"username"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.username}
              </td>
              <td key={"phone"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.phone}
              </td>
              <td key={"email"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.email}
              </td>
              <td key={"buttons"+userObj.id} className="border-start border-success border-opacity-25">
                <div className="row row-cols-1 row-cols-lg-2">
                  <div>
                    <Button className="my-1" variant="warning">
                      Editar
                    </Button>
                  </div>
                  <div>
                    <Button onClick={() => suprUser(userObj.id)} className="my-1" variant="danger">
                      Eliminar
                    </Button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};
TableComp.propTypes = {
  usersArr: PropTypes.array,
};

export default TableComp;
