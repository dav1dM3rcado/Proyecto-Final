import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import './Registro.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck , faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';




const Registro = () => {
    return (


        <div className='Registro'>
            <div ClassName=''>

                <h1 className='TituloR'>
                    Vet Rolling
                </h1>
            </div>
            <Form className='RForm'>
                <Row ClassName='' >
                    <Col md={6}>
                        <Form.Group className="my-3">
                            <Form.Label className='Rlabel'>Usuario</Form.Label>

                            <div className='ImputiC'>

                                <Form.Control className='ImputR' type="text" placeholder="Nombre de Usuario" />
                                <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
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
                                <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
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
                            <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
                            </div>
                            <Form.Text className="Rtext">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                    </Col>
                    <Col md={6}>
                    <Form.Group className="my-3" controlId="formBasicPassword">
                            <Form.Label className='Rlabel'>Repite Contraseña</Form.Label>
                            <div className='ImputiC'>
                            <Form.Control className='ImputR' type="password" placeholder="Contraseña" />
                            <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
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
                            <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
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
                            <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
                            </div>
                            <Form.Text className="Rtext">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="my-3">
                            <Form.Label className='Rlabel'>Provincia </Form.Label>
                            <div className='ImputiC'>
                            <Form.Control className='ImputR' type="text" placeholder="Celular" />
                            <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
                            </div>
                            <Form.Text className="Rtext">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="my-3">
                            <Form.Label className='Rlabel'>Codigo Postal</Form.Label>
                            <div className='ImputiC'>
                            <Form.Control className='ImputR' type="text" placeholder="Codigo Postal" />
                            <FontAwesomeIcon className='Icon1' icon={faCircleCheck} />
                            </div>
                            <Form.Text className="Rtext">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group className="my-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Acepto los Terminos y Condiciones" />
                        </Form.Group>
                        <Form.Label className='Label-Alert'> 
                        <FontAwesomeIcon className='Icon2' icon={faTriangleExclamation}/><b>Error:</b> Por Favor rellena el formulario correctamente 
                        </Form.Label>
                 <div className='d-flex flex-column align-items-center'>
                <Button  variant='enviar' type="submit">
                            Enviar
                </Button>
                     </div>       
                    </Col>
                 
             
                </Row>
            </Form >
        </div >
    );
};

export default Registro;
