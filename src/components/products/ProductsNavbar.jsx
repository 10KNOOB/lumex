import React from "react";

const ProductsNavbar = () => {
  return (
    <div className="container mt-[37px]">
      <ul className="flex gap-x-4 md:gap-x-10 text-[14px] md:text-[16px] text-[#292853]">
        <li>All products</li>
        <li>Thread</li>
        <li>Socket</li>
        <li>Electrical</li>
      </ul>
    </div>
  );
};

export default ProductsNavbar;
