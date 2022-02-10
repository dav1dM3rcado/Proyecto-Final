import React from "react";
import { Container, Row } from "react-bootstrap";
import medicinaPreventiva from "./img/medicinaPreventiva.jpg";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div>
      <h2 className="text-center my-5 fw-bold">Nuestros Servicios</h2>
      <Container>
        <Row>
          <ServiceCard src={medicinaPreventiva} title={"Holaa"}></ServiceCard>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
