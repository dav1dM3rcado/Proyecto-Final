import { Container, Row } from "react-bootstrap";
import ServiceCard from "./ServiceCard"

const Services = () => {
  return (
    <div className="my-5">
      <h2 className="text-center fw-bold text-white">Nuestros Servicios</h2>
      <Container>
        <Row>
          <ServiceCard ></ServiceCard>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
