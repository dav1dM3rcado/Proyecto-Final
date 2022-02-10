import React from "react";
import CoverHome from "./CoverHome.js";
import InformationHome from "./InformationHome.jsx";
import Services from "./Services.jsx";
import "./style/Home.css"

const Home = () => {
  return (
    <div>
      {/* Carousel */}
      <CoverHome />
      {/* Products */}
      <main className="container">
      <InformationHome></InformationHome>
      <hr></hr>
      <Services></Services>
      </main>
    </div>
  );
};

export default Home;
