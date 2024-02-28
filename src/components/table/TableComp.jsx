import "./styleTableComp.css";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext } from "react";
import { UsersProvider } from "../../context/UsersContext";

const TableComp = () => {
    const {usersArr} = useContext(UsersProvider);
    console.log(usersArr[0]);
    console.table(usersArr);
    // const b = Object.keys(prodA)
    return (
        <>
            <Table responsive="md" className="border border-success border-opacity-100 text-center align-middle">
              <thead>
                <tr>
                  <th className="border border-success border-opacity-50" key={"colA"}>N°</th>
                  <th className="border border-success border-opacity-50" key={"colB"}>NOMBRE</th>
                  <th className="border border-success border-opacity-50" key={"colC"}>USUARIO</th>
                  <th className="border border-success border-opacity-50" key={"colD"}>TELÉFONO</th>
                  <th className="border border-success border-opacity-50" key={"colE"}>EMAIL</th>
                  <th className="border border-success border-opacity-50" key={"colE"}>ACCIONES</th>
                </tr>
              </thead>
              <tbody>
                  {usersArr.map((userObj, index) => (
                    <tr>
                      <td className="border border-success border-opacity-50" key={"colA"+userObj.address.zipcode}>{userObj.id}</td>
                      <td className="border-start border-success border-opacity-25" key={"colB"+userObj.address.zipcode}>{userObj.name} </td>
                      <td className="border-start border-success border-opacity-25" key={"colC"+userObj.address.zipcode}>{userObj.username} </td>
                      <td className="border-start border-success border-opacity-25" key={"colD"+userObj.address.zipcode}>{userObj.phone} </td>
                      <td className="border-start border-success border-opacity-25" key={"colE"+userObj.address.zipcode}>{userObj.email} </td>
                      <td className="border-start border-success border-opacity-25" key={"colE"+userObj.address.zipcode}>
                        <div className="row row-cols-1 row-cols-lg-2">
                        <div>
                          <Button variant="warning">Editar</Button>
                        </div>
                        <div>
                          <Button variant="danger">Eliminar</Button>
                        </div>
                        </div>
                      </td>
                    </tr>
                  ))}                  
                {/* <tr>
                  <td>2</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr>
                <tr>
                  <td>3</td>
                  {Array.from({ length: 12 }).map((_, index) => (
                    <td key={index}>Table cell {index}</td>
                  ))}
                </tr> */}
              </tbody>
            </Table>
        </>
    )
}
TableComp.propTypes= {
    usersArr: PropTypes.array
}

export default TableComp;