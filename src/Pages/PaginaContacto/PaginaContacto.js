import React from 'react';
import { Container, Form, } from "react-bootstrap";
import { Link } from "react-router-dom";



const PaginaContacto = () => {
    return (
        <div>
            <Container className="py-5">
                <h1>Quiero Informacion ! </h1>
                <hr />
                {/* Form Contacto */}

                <Form className="my-5">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre y Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=" Nombre Completo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email de Contacto </Form.Label>
                        <Form.Control
                            type="Email"
                            placeholder="Correo Electronico " />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Celular de Contacto</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="Celular de Contacto" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Provincia y Localidad </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Provincia - Localidad" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Domicilio</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=" Calle y Numeracion" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Tipo de Plan</Form.Label>
                        <Form.Select  >
                            <option value="">Me interesa el Plan </option>
                            <option value="cachorro">Primeros Pasos</option>
                            <option value="maduro">Madurando</option>
                            <option value="adulto">Adulto</option>

                        </Form.Select>
                    </Form.Group>
                    <div className="text-end">
                        <Link to="/PaginaContacto" className="btn-reservar text-decoration-none text-center"> Me Interesa </Link>

                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default PaginaContacto;