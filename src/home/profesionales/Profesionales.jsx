import React from "react";
import CardProfesional from "./CardProfesional";

const Profesionales = () => {
  return (
    <div className="container">
        <h1 className="text-white text-center fw-bold">Nuestros Licenciados</h1>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4 col-sm-12 my-3">
            <CardProfesional></CardProfesional>
          </div>
          <div className="col-md-4 my-3">
            <CardProfesional></CardProfesional>
          </div>
          <div className="col-md-4 my-3">
            <CardProfesional></CardProfesional>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profesionales;
