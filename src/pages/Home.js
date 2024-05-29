import React from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import FlashSale from "../components/FlashSale";
import Offer from "../components/Offer";
import BestSeller from "../components/products";
import Arrived from "../components/Arrived";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <FlashSale />
      <Offer />
      <BestSeller />
      <Arrived />
    </div>
  );
};

export default Home;
