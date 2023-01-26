import React from "react";

const OurCustomer = () => {
  return (
    <div className="bg-[#8099DB]">
      <div className="container py-10 md:py-[20px]">
        <div className="">
          <div className="font-bold text-[30px] text-[#292853] text-center">
            Our Total Customer
          </div>
          <div className="text-center text-[#292853] text-[14px]">
            {" "}
            Why you are not joining us also ?
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 md:grid-cols-3 place-items-center pt-[73px]">
          <div className="flex flex-col items-center leading-[50px]">
            <h1 className="text-[#292853] text-[60px] font-bold">1000+</h1>
            <h6 className="text-[#292853] text-[30px] font-bold">HOME</h6>
          </div>

          <div className="flex flex-col items-center leading-[50px]">
            <h1 className="text-[#292853] text-[60px] font-bold">300+</h1>
            <h6 className="text-[#292853] text-[30px] font-bold">OFFICE</h6>
          </div>

          <div className="flex flex-col items-center leading-[50px]">
            <h1 className="text-[#292853] text-[60px] font-bold">513+</h1>
            <h6 className="text-[#292853] text-[30px] font-bold">DEALER</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;
