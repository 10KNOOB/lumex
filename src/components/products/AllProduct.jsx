import React, { useState } from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AllProductsData } from "../../data/AllProductsData";

const AllProduct = () => {
  const [heart, setHeart] = useState(false);
  const handleNav = () => {
    setHeart(!heart);
  };
  return (
    <div className="container mt-[43px]">
      <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {AllProductsData.map((record) => {
          return (
            <div className="h-[471px] w-[250px]" key={record.id}>
              <img
                src={record.img}
                alt=""
                className="bg-[#D9D9D9] w-[250px] h-[300px] object-contain rounded-lg"
              />

              <div className="text-[14px] text-[#292853] ">
                <div className="flex justify-between pt-2">
                  <span>Thread 3/4’’</span>
                  <span>Price: {record.price}</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="cursor-pointer underline">
                    View products
                  </span>
                  <span onClick={handleNav}>
                    {heart ? (
                      <AiOutlineHeart size={20} className="text-[#EB038D]" />
                    ) : (
                      <AiFillHeart size={20} className="text-[#EB038D]" />
                    )}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
