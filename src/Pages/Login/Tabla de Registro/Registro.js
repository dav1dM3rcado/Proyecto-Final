import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Registro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';





const Registro = () => {
    return (


        <div className='Registro'>
            <div ClassName=''>

                <h1 className='TituloR'>
                    Vet Rolling
                </h1>
            </div>
            <hr />
            <div ClassName=''>

                <h3 className='DatosRegistro'>
                    Datos de Usuario
                </h3>
            </div>
            <div>

                <Form className='RForm'>
                    <Row ClassName='' >
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Usuario</Form.Label>

                                <div className='ImputiC'>

                                    <Form.Control className='ImputR' type="text" placeholder="Nombre de Usuario" />
                                    <FontAwesomeIcon className='Icon1' icon={faPaw} />
                                </div>
                                <Form.Text className="Rtext">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Nombre y Apellido</Form.Label>

                                <div className='ImputiC'>

                                    <Form.Control className='ImputR' type="text" placeholder="Nombre y Apellido Completo" />
                                    <FontAwesomeIcon className='Icon1' icon={faPaw} />
                                </div>
                                <Form.Text className="Rtext">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3" controlId="formBasicPassword">
                                <Form.Label className='Rlabel'>Contraseña</Form.Label>
                                <div className='ImputiC'>
                                    <Form.Control className='ImputR' type="password" placeholder="Contraseña" />
                                    <FontAwesomeIcon className='Icon1' icon={faPaw} />
                                </div>
                                <Form.Text className="Rtext">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Fecha de Nacimiento</Form.Label>

                                <div className='ImputiC'>

                                    <Form.Control className='ImputR' type="text" placeholder="dd/mm/aaaa" />
                                    <FontAwesomeIcon className='Icon1' icon={faPaw} />
                                </div>
                                <Form.Text className="Rtext">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3" controlId="formBasicEmail">
                                <Form.Label className='Rlabel'>Correo Electronico</Form.Label>
                                <div className='ImputiC'>
                                    <Form.Control className='ImputR' type="email" placeholder="Email" />
                                    <FontAwesomeIcon className='Icon1' icon={faPaw} />
                                </div>
                                <Form.Text className="Rtext">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="my-3">
                                <Form.Label className='Rlabel'>Telefono Celular</Form.Label>
                                <div className='ImputiC'>
                                    <Form.Control className='ImputR' type="text" placeholder="Celular" />
                                    <FontAwesomeIcon className='Icon1' icon={faPaw} />
                                </div>
                                <Form.Text className="Rtext">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check className='checkboxR' type="checkbox" label="Acepto termino y condiciones " />
                    </Form.Group>
                    <Button  iant="primary mb-3" type="submit">
                        Registrame
                    </Button>
                </Form >
            </div>


        </div >

    );
};

export default Registro;
