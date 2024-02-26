import { Routes, Route } from "react-router-dom";
import Home from "../../page/home/Home";
import Products from "../../page/products/Products";
import Page404 from "../../page/page404/Page404";
import Admin from "../../page/admin/Admin"

const RoutesComp = ({prodQty, hookSet, hookReset, prodArr}) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products prodQty={prodQty} prodArr={prodArr} />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/admin" element={<Admin hookSet={hookSet} monitor={prodQty} hookReset={hookReset} prodArr={prodArr} />} />
      </Routes>
    </>
  );
};

export default RoutesComp;
