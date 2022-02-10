import React from "react";
import "./style/CoverHome.css";
import coverVideo from "./img/posiblePortada2.jpg";

const CoverHome = () => {
  return (
    <div className="cover-container">
      <img className="img-cover" src={coverVideo}></img>
      <div className="cover-textos">
        <h1 className="cover-h1" >BIENVENIDOS</h1>
        <hr className="cover-hr"></hr>
        <h2 className="cover-h2">VETERINARIA ROLLING </h2>
      </div>
    </div>
  );
};

export default CoverHome;
