import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "./CardProduct/CardProduct";
import CarouselHome from "./CarouselHome/CarouselHome";

const Home = ({ turnos }) => {
  return (
    <div>
      {/* Carousel */}
      <CarouselHome />
      {/* Products */}
      <Container className="py-5">
        <h1>Products</h1>
        <hr />
        {turnos.length != 0 ? 
        <Row>
          {turnos.map((turno) => (<Col xl={3} lg={4} md={6}>
            <CardProduct turno={turno} />
          </Col>
          ))}
        </Row>
        :
        <div className="no-products-found d-flex align-items-center justify-content-center">
          {/* No products found message */}
          <h1>🥐 No products found ☕</h1>
        </div>}
      </Container>
    </div>
  );
};

export default Home;
