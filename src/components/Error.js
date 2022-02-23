import React from "react";
import { Button } from "bootstrap";
import error from "../assets/error.jpg";
import "./error.css";
const Error = () => {
  return (
    <div>
      <div className=" conteiner text-center ">
        <img className="img-fluid h-100" src={error} />
        <button>Volver atrás</button>
      </div>
    </div>
  );
};

export default Error;
