import React from "react";
import AllProduct from "./AllProduct";
import ProductsNavbar from "./ProductsNavbar";

const Products = () => {
  return (
    <div>
      <div className="font-bold text-[30px] text-[#292853] text-center pt-[43px]">
        Products
      </div>
      <ProductsNavbar />
      <AllProduct />
    </div>
  );
};

export default Products;
