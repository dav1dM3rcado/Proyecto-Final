import React from 'react';
import { Card, Col, Button} from "react-bootstrap";
import "../style/MainStyle.css"

const ServiceCard = () => {
    return (
        <Col sm={12} md={4} className="d-flex justify-content-center">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" className='services-card-img'/>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text></Card.Text>
                <Button variant="warning" className='text-white'>Mas informacion</Button>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default ServiceCard;