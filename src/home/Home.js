import React from "react";
import CoverHome from "./CoverHome.js";
import InformationHome from "./InformationHome.jsx";
import Services from "./Services.jsx";
import Publicidad from "./Publicidad.jsx";
import Planes from "./Planes.jsx";
import "./style/Home.css"

const Home = () => {
  return (
    <div>
      <CoverHome />
      <main className="bg-dark">
      <div>
      <InformationHome className="my-5"></InformationHome>
      
      <Planes className="my-5"></Planes>
      
      <Publicidad className="my-5"></Publicidad>
      
      <Services className="my-5"></Services>
      </div>
      </main>
      
    </div>
  );
};

export default Home;
