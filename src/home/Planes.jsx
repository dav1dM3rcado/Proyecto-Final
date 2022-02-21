import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import card1 from "./img/laboratorioVet.jpg";
import card2 from "./img/planAdulto.jpg";
import card3 from "./img/mascota.jpg";
import "./style/Home.css"


const Planes = () => {
  return (
    <div>
        <h2 className="text-warning text-center fw-bold my-5">Nuestra veterinaria actualmente ofrece un servicio especial mensual para nuestras mascotas al
estilo de una obra social, por lo que cuenta con 3 planes:</h2>
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <img className="img-fluid border-img-planes" src={card1} alt="cachorros"></img>
          </Col>
        <Col sm={12} md={6} className="mt-2">
            <h3 className="text-white fw-bold">Plan Primeros Pasos</h3>
            <p className="text-white lead">Servicios para mascotas de 0 a 5 años <br></br>
            Contratando Primeros Pasos para tu mascota desde cachorro te asegurarás que viva más feliz durante más tiempo. No sólo es un ahorro, es una garantía de que tu mascota crecerá sana y se convertirá en un adulto que vivirá muchos años...</p>
            <Button className="bg-warning">Seguir leyendo</Button>
          </Col>
          
          </Row>
          <Row className="my-3">
          
          <Col sm={12} md={6}>
            <img className="img-fluid border-img-planes" src={card2} alt="cachorros"></img>
          </Col>
          <Col sm={12} md={6}className="mt-2">
            <h3 className="text-white fw-bold ">Plan Madurando</h3>
            <p className="text-white lead">Plan de 5 a 10 años. <br></br>
            Plan Madurando tiene toda la cobertura de nuestros servicios, asegura la salud y el cuidado personal de tu mascota con nuestro plan de 5 a 10 años. No dejes pasar la oportunidad de darle lo mejor a tu mascota con nuestro... </p>
            <Button className="bg-warning">Seguir leyendo</Button>
          </Col>
          </Row>
          <Row className="my-3">
          <Col sm={12} md={6}>
            <img className="img-fluid border-img-planes" src={card3} alt="cachorros"></img>
          </Col>
          <Col sm={12} md={6} className="mt-2">
            <h3 className="text-white fw-bold">Plan Adultos</h3>
            <p className="text-white lead ">Servicios para mascotas de mas de 10 años.<br></br> Una mascota adulta es aquella que ya terminó de crecer y desarrollarse, es decir dejó atrás la etapa de cachorro. Durante los primeros años de la etapa adulta, tu mascota no experimenta grandes cambios pero con el paso de los años...</p>
            <Button className="bg-warning">Seguir leyendo</Button>
          </Col>
         
          </Row>
         
       
      </Container>
    </div>
  );
};

export default Planes;