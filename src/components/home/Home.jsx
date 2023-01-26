import React from "react";
import WeHaveApp from "../wehave/WeHave";
import Products from "../products/Products";
import OurCustomer from "../ourCustomer/OurCustomer";
import Hero from "../hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <WeHaveApp />
      <Products />
      <OurCustomer />
    </div>
  );
};

export default Home;
