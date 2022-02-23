import React from 'react';
import { Form, Row, Col, Container} from 'react-bootstrap';
import './CrearUsuario.css';
import { Link } from "react-router-dom";


const CrearUsuario = () => {
    return (
       <div className='Registro'>
           <Container>
            <div ClassName=''>
                <h1 className='TituloR'>
                  Registracion
                </h1>
            </div>
            <hr />
            <div ClassName='tituloUsuario'>
                <h3 className='DatosRegistro'>
                    Datos de Usuario
                </h3>
            </div>
            <div className='Form-Registro'>
                <Form className='RForm p-3 m-3'>
                    <Row ClassName='' >
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Usuario</Form.Label>
                                <Form.Control type="Text" placeholder="Ingresar un usuario" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Nombre y Apellido</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa Tu nombre completo" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3" controlId="formBasicPassword">
                                <Form.Label className='Rlabel'>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Fecha de Nacimiento</Form.Label>
                                <Form.Control type="date" placeholder="Ingresa tu fecha de Nacimiento"
                                max="2004-03-01" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3" controlId="formBasicEmail">
                                <Form.Label className='Rlabel'>Correo Electronico</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa un correo electronico" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3">
                             <Form.Label className='Rlabel'>Telefono Celular</Form.Label>
                             <Form.Control type="tel" placeholder="Ingresa un telefono" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3 " controlId="formBasicCheckbox">
                        <Form.Check className='checkboxR' type="checkbox" label="Acepto termino y condiciones " />
                    </Form.Group>
                    <div className='boton-registro'> 
                    <Link to="" className="btn-registro text-decoration-none text-center">Registrame </Link>
                    </div>
                   
                </Form >
            </div>

            </Container>
        </div >

    );
};

export default CrearUsuario;
