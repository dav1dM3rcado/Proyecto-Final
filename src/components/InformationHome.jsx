import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./style/MainStyle.css"

const InformationHome = () => {
    return (
        <Container >
            <Row className="container my-5">
                <Col sm={12} md={4}>
                    <h2 className="information-text-color">Tu Clinica Veterinaria de confianza en Tucuman</h2>
                </Col>
                <Col sm={12} md={8} className="fw-bold text-start">
                    <p>En Clínica Veterinaria Rolling, tu centro veterinario de confianza en Tucuman, contamos con el mejor equipo tanto humano como técnico para proporcionarle a tu mascota una atención veterinaria de la máxima calidad. Llevamos más de 25 años apostando por la medicina preventiva y la formación continua como medio para mantener sanos y protegidos a nuestros animales, ayudando a procurar su bienestar y mejorando su calidad de vida.</p>
                </Col>
            </Row>
          </Container>
    );
};

export default InformationHome;