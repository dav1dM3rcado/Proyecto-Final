import React from "react";
import CoverHome from "./portada/CoverHome.js";
import InformationHome from "./informacionGeneral/InformationHome.jsx";
import Services from "./servicios/Services.jsx";
import Publicidad from "./publicidad/Publicidad.jsx";
import Planes from "./planes/Planes.jsx"
import Profesionales from "./profesionales/Profesionales.jsx";
import "./style/Home.css";

const Home = () => {
  return (
    <div>
      <CoverHome />
      <main className="bg-dark">
        <div className='container'>
          <InformationHome className="my-5"></InformationHome>
          <Planes className="my-5"></Planes>
          <Services className="my-5"></Services>
          <Publicidad className="my-5"></Publicidad>
          <Profesionales></Profesionales>
        </div>
      </main>
    </div>
  );
};

export default Home;
