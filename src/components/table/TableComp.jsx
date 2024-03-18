import "./styleTableComp.css";
import { Table, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { UsersProvider } from "../../context/UsersContext";
import FormComp from "../form/FormComp";

const TableComp = () => {
  const { usersArr, suprUser } = useContext(UsersProvider);
  const [editUser, setEditUser] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleEdit = (userObj) => {
    setEditUser(userObj);
    setShow(true);
  }
  
  return (
    <>
      <Table
        striped
        hover
        responsive="md"
        className="border border-success border-opacity-100 text-center align-middle">
        <thead>
          <tr>
            <th key="N°" className="border border-success border-opacity-50">N°</th>
            <th key="NOMBRE" className="border border-success border-opacity-50">NOMBRE</th>
            <th key="ALIAS" className="border border-success border-opacity-50">ALIAS</th>
            <th key="TEL" className="border border-success border-opacity-50">TELÉFONO</th>
            <th key="EMAIL" className="border border-success border-opacity-50">EMAIL</th>
            <th key="ESTADO" className="border border-success border-opacity-50">NIVEL</th>
            <th key="ACCIONES" className="border border-success border-opacity-50">ACCIONES</th>
          </tr>
        </thead>
        <tbody>
          {usersArr.map((userObj, idx) => (
            <tr key={userObj.id}>
              <td key={"id"+userObj.id} className="border border-success border-opacity-50">
                {idx+1}
              </td>
              <td key={"name"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.name}
              </td>
              <td key={"username"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.username}
              </td>
              <td key={"email"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.email}
              </td>
              <td key={"phone"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.phone}
              </td>
              <td key={"isAdmin"+userObj.id} className="border-start border-success border-opacity-25">
                {userObj.isAdmin ?"ADMIN." :"USUARIO"}
              </td>
              <td key={"buttons"+userObj.id} className="border-start border-success border-opacity-25 text-nowrap">
                    <Button onClick={() => handleEdit(userObj)} className="" variant="warning">
                      Editar
                    </Button>
                    <Button onClick={() => suprUser(userObj)} className="ms-1" variant="danger">
                      Eliminar
                    </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormComp editUser={editUser} handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};
TableComp.propTypes = {
  usersArr: PropTypes.array,
};

export default TableComp;
