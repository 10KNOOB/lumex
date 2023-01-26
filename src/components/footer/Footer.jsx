import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#292853] py-10">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-10 place-items-center">
          <div className="text-[#FBF5F2]">
            <h1 className="py-2 underline">Help Line</h1>
            <h1>+088-01733121212</h1>
            <h1>lumex@gmail.com</h1>
            <h1>+088-01733121212</h1>
            <h1>+088-01733121212</h1>
          </div>
          <ul className="text-[#FBF5F2] flex flex-col justify-end w-20 ">
            <li className="hover:border-b-2 duration-300 border-[#EB038D]">
              Home
            </li>
            <li className="hover:border-b-2 duration-300 border-[#EB038D]">
              About Us
            </li>
            <li className="hover:border-b-2 duration-300 border-[#EB038D]">
              Products
            </li>
            <li className="hover:border-b-2 duration-300 border-[#EB038D]">
              Contac Us
            </li>
          </ul>
          <div>
            <div className=" font-bipplo text-4xl text-[#00ADF1] py-2 pl-0 md:pl-24">
              <span>L</span>
              <span className="text-[#EB038D]">U</span>
              <span>M</span>
              <span className="text-[#EB038D]">E</span>
              <span>X</span>
            </div>
            <div className="text-[#FBF5F2] flex justify-end">
              All rights recived ©
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
