import React from "react";
import Card from "./Card";

import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

const cards = [
  {
    id: 1,
    title: "Plan Inicial",
    image: image1,
    url: "https://faztweb.com",
    text: "Enfermedad y accidente (constultas,estudios,medicamentos y cirugia)",
  },
  {
    id: 2,
    title: "Plan Intermedio",
    image: image2,
    url: "https://blog.faztweb.com",
    text: "Enfermedad y accidente (consultas,estudios,medicamentos y cirugia) Reclamos por daños a tercero Controles-Vacunas-Pipetas",
  },
  {
    id: 3,
    title: "Plan Premiun",
    image: image3,
    url: "https://youtube.com/fazttech",
    text: "Enfermedad y accidente (consultas,estudios,medicamentos y cirugia) Reclamos por daños a tercero Controles-Vacunas-Pipetas Fallecimento Belleza y Bienestar",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {cards.map(({ title, image, url, id, text }) => (
          <div className="col-md-4" key={id}>
            <Card imageSource={image} title={title} url={url} text={text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
