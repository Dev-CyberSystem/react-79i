import "./styleTableComp.css";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UsersProvider } from "../../context/UsersContext";

const TableComp = () => {
  const { usersArr } = useContext(UsersProvider);
  return (
    <>
      <Table
        responsive="md"
        className="border border-success border-opacity-100 text-center align-middle">
        <thead>
          <tr>
            <th className="border border-success border-opacity-50" key={"w"}>
              N°
            </th>
            <th
              className="border border-success border-opacity-50"
              key={"cerB"}>
              NOMBRE
            </th>
            <th
              className="border border-success border-opacity-50"
              key={"cgweglCxzc"}>
              USUARIO
            </th>
            <th
              className="border border-success border-opacity-50"
              key={"coggwelD"}>
              TELÉFONO
            </th>
            <th
              className="border border-success border-opacity-50"
              key={"cogewE"}>
              EMAIL
            </th>
            <th
              className="border border-success border-opacity-50"
              key={"cokmytlE"}>
              ACCIONES
            </th>
          </tr>
        </thead>
        <tbody>
          {usersArr.map((userObj, index) => (
            <tr>
              <td
                className="border border-success border-opacity-50"
                key={"ctyfvlA" + userObj.address.zipcode}>
                {userObj.id}
              </td>
              <td
                className="border-start border-success border-opacity-25"
                key={"c3g" + userObj.address.zipcode}>
                {userObj.name}
              </td>
              <td
                className="border-start border-success border-opacity-25"
                key={"c3g" + userObj.address.zipcode}>
                {userObj.username}
              </td>
              <td
                className="border-start border-success border-opacity-25"
                key={"colgsqD" + userObj.address.zipcode}>
                {userObj.phone}
              </td>
              <td
                className="border-start border-success border-opacity-25"
                key={"qweolE" + userObj.address.zipcode}>
                {userObj.email}
              </td>
              <td
                className="border-start border-success border-opacity-25"
                key={"coddfv" + userObj.address.zipcode}>
                <div className="row row-cols-1 row-cols-lg-2">
                  <div>
                    <Button className="my-1" variant="warning">Editar</Button>
                  </div>
                  <div>
                    <Button className="my-1" variant="danger">Eliminar</Button>
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
