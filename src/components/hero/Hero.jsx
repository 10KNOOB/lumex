import React from "react";
import { RiArrowDownLine } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="container">
      <div className="font-bold text-[30px] md:text-[60px] text-[#292853] text-center pt-8 md:pt-[58px]">
        WELCOME TO <span className="text-[#00ADF1]">L</span>
        <span className="text-[#EB038D]">U</span>
        <span className="text-[#00ADF1]">M</span>
        <span className="text-[#EB038D]">E</span>
        <span className="text-[#00ADF1]">X</span>
      </div>
      <div className="text-center text-[#292853] text-base md:text-[24px] font-normal">
        Integrity is the capital of business
      </div>
      <div className="text-[#292853] pt-8 md:pt-[39px] max-w-3xl  mx-auto text-center text-[14px] md:text-[16px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto
      </div>
      <div className="flex justify-center pt-[39px] gap-5">
        <button className="px-10 py-1 border-2 rounded-full border-[#292853] hover:bg-[#EB038D] shadow-lg duration-300 text-sm md:text-base">
          About Us
        </button>
        <button className="px-5 py-1 border-2 rounded-full border-[#292853] bg-[#EB038D] hover:bg-transparent shadow-lg duration-300 text-sm md:text-base">
          View Products
        </button>
      </div>
      <div className="flex justify-center pt-[73px]">
        <RiArrowDownLine className="text-4xl text-[#292853] hover:translate-y-4 duration-300" />
      </div>
    </div>
  );
};

export default Hero;
