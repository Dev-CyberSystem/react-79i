import { Routes, Route } from "react-router-dom";
import Home from "../page/home/Home";
import Admin from "../page/admin/Admin";
import AdminUsers from "../page/adminUsers/AdminUsers";

const Rutas = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminUsers" element={<AdminUsers />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Rutas;