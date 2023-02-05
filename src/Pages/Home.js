import React from "react";
import IntroSearch from "../Components/IntroSearch";
import Navbar from "../Components/Navbar";

const Home = () => {
  return (
    <>
      <div className="pb-16">
        <IntroSearch />
        <Navbar />
      </div>
    </>
  );
};

export default Home;
