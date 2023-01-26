import React, { useState } from "react";
import UpperNavbar from "./UpperNavbar";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";

import TopRight from "../../image/top-right.png";
import LeftBottom from "../../image/bottom-left.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="">
      {/* background image */}
      <div className="relative hidden md:flex">
        <div className="right-0 absolute -z-10">
          <img src={TopRight} alt="" className="w-82" />
        </div>
        <div className="left-0 top-32 absolute -z-10">
          <img src={LeftBottom} alt="" className="w-96" />
        </div>
      </div>

      {/* Upper Navbar */}
      <UpperNavbar />

      {/* main navbar */}

      <div className=" bg-[#D9D9D9] z-10">
        <div className="container flex justify-between h-[45px] px-2 md:px-0">
          <nav className="md:flex justify-center items-center gap-x-10 text-[14px] text-[#292853] hidden ">
            <NavLink to="/" className="hover:border-b-2 border-[#EB038D] py-3">
              Home
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:border-b-2 border-[#EB038D] py-3"
            >
              About us
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:border-b-2 border-[#EB038D] py-3"
            >
              Product
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:border-b-2 border-[#EB038D] py-3"
            >
              Contact Us
            </NavLink>
          </nav>

          <div
            className={
              nav
                ? "fixed h-screen left-0 top-0 w-[80%] text-white ease-in duration-500 backdrop-blur-lg z-40 flex md:hidden"
                : "fixed h-screen left-[-100%] w-[80%] top-0 ease-in duration-500 backdrop-blur-lg z-40"
            }
          >
            <nav className="px-5 py-10 text-[14px] text-[#292853] flex flex-col">
              <div className=" font-bipplo text-4xl text-[#00ADF1] py-2">
                <span>L</span>
                <span className="text-[#EB038D]">U</span>
                <span>M</span>
                <span className="text-[#EB038D]">E</span>
                <span>X</span>
              </div>
              <NavLink
                to="/"
                className="hover:border-b-2 border-[#EB038D] py-3"
              >
                Home
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:border-b-2 border-[#EB038D] py-3"
              >
                About Us
              </NavLink>
              <NavLink
                to="/contact"
                className="hover:border-b-2 border-[#EB038D] py-3"
              >
                Product
              </NavLink>

              <NavLink
                to="/contact"
                className="hover:border-b-2 border-[#EB038D] py-3"
              >
                Contact
              </NavLink>
            </nav>
          </div>

          <div className="flex justify-center items-center gap-x-5 text-[14px] text-[#292853]">
            <span className="hover:border-b-2 border-[#EB038D] py-3">
              Login
            </span>
            <span className="hover:border-b-2 border-[#EB038D] py-3">
              Signup
            </span>
            <span className="text-xl">
              <AiOutlineShoppingCart />
            </span>
            <span className="text-xl">
              <AiOutlineSearch />
            </span>
          </div>

          <div
            onClick={handleNav}
            className="md:hidden flex justify-center items-center text-[#292853]"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
