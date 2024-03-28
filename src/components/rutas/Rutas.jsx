import { Routes, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Admin from "../../page/admin/Admin";
import FormRegistro from "../registro/FormRegistro";

const Rutas = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<FormRegistro />} />
        {user && user.admin ? (
          <Route path="/api/admin" element={<Admin />} />
        ) : null}

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
};

export default Rutas;
