import React from "react";
import { RiMessage2Line, RiPhoneLine, RiFacebookBoxFill } from "react-icons/ri";
import { MdOutlineLocationOn } from "react-icons/md";

const UpperNavbar = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center px-2 md:px-0">
        <div className="hidden md:flex"></div>
        <div className=" font-bipplo text-4xl text-[#00ADF1] py-2 pl-0 md:pl-24">
          <span>L</span>
          <span className="text-[#EB038D]">U</span>
          <span>M</span>
          <span className="text-[#EB038D]">E</span>
          <span>X</span>
        </div>
        <div className="flex gap-2 text-xl md:text-2xl text-[#292853]">
          <RiMessage2Line />
          <RiPhoneLine />
          <RiFacebookBoxFill />
          <MdOutlineLocationOn />
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
