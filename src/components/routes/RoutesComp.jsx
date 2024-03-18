import { Routes, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Products from "../../page/products/Products";
import Page404 from "../../page/page404/Page404";
import Admin from "../../page/admin/Admin"
import RegisterForm from "../register/RegisterForm";

const RoutesComp = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/register" element={<RegisterForm/>} />
        <Route path="*" element={<Page404/>} />
      </Routes>
    </>
  );
};

export default RoutesComp;
