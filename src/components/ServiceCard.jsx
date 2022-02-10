import React from 'react';
import { Card, Col, Button} from "react-bootstrap";
import "./style/MainStyle.css"

const ServiceCard = ({src, title, text}) => {
    return (
        <Col sm={12} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" className='services-card-img' src={src}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <Button variant="warning">Ver mas</Button>
              </Card.Body>
            </Card>
          </Col>
    );
};

export default ServiceCard;