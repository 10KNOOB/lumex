import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";

const ContactUs = () => {
  return (
    <div className=" container mt-10 md:mt-[40px] mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div>
          <h1 className="text-[24px] md:text-[32px] font-bold text-[#292853] py-5">
            Send us a message,
          </h1>
          <form action="" className="flex flex-col gap-y-4 px-2 md:px-0">
            <input
              type="text"
              className="bg-[#D9D9D9] font-normal outline-none h-10 w-[272px] md:w-[400px] px-2 rounded-lg text-[#292853]"
              placeholder="Your full name "
            />
            <input
              type="text"
              className="bg-[#D9D9D9] font-normal outline-none h-10 w-[272px] md:w-[400px] px-2 rounded-lg text-[#292853]"
              placeholder="Mention your subject"
            />
            <textarea
              className="block px-3 py-1.5 text-base font-normal  bg-[#D9D9D9] bg-clip-padding rounded-lg
              w-[272px] md:w-[400px] outline-none text-[#292853]"
              rows="3"
              placeholder="Your message"
            ></textarea>

            <button className="bg-[#D9D9D9] rounded-lg py-1 text-sm text-[#292853]">
              Click here to send
            </button>
          </form>
        </div>
        <div>
          <h1 className="text-[24px] md:text-[32px] font-bold text-[#292853] py-5">
            Our Location
          </h1>
          <div className="h-[137px] w-[272px] bg-[#D9D9D9] rounded-lg flex flex-col justify-center items-center">
            <AiOutlineHome size={30} className="text-[#292853]" />
            <span className="text-center pt-2 text-[#292853] font-normal text-[14px]">
              Haripur,paba, Rajshahi <br /> Postal code: 6565 <br />
              Districct: Rajshahi
            </span>
          </div>
          <h1 className="text-[24px] md:text-[32px] font-bold text-[#292853] py-5">
            Our Social
          </h1>
          <div className="h-[137px] w-[272px] bg-[#D9D9D9] rounded-lg flex flex-col justify-center items-center text-[#292853] text-[14px]">
            <BiHelpCircle size={30} className="text-[#292853]" />
            <span>facebook</span>
            <span>whats app</span>
            <span>phone</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
