import React, { useState } from "react";
import { Form, Row, Col, Container } from 'react-bootstrap';
import './CrearUsuario.css';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { validateUsuario, validateNombreApellido, validateContraseña, validateFechaNacimiento , validateEmail , validateCelular } from "../../helpers/ValidateFields";
import "../../Styles/GeneralStyles.css";


const CrearUsuario = ({ URL }) => {

 //States 
const [usuario, setUsuario] = useState("");
const [nombreApellido, setNombreApellido] = useState("");
 const [contraseña,setContraseña] = useState("");
 const [fechaNacimiento, setFechaNacimiento] = useState("");
 const [email, setEmail] = useState("");
 const [celular,setCelular] = useState("");

        // Funcion para guardar los datos o crear el producto 
        const handleSubmit = (e) => {
            e.preventDefault();

            // validar los campos

            if (
                !validateUsuario(usuario) ||
                !validateNombreApellido(nombreApellido) ||
                !validateContraseña(contraseña) ||
                !validateFechaNacimiento(fechaNacimiento) ||
                !validateEmail(email) ||
                !validateCelular(celular) 
            ) {
                Swal.fire("Ops!", " Some data is invalid.", "error");
                return;
            }

            // Enviar los datos para guardarlos 

            const newUsuario = {
                usuario,
                nombreApellido,
                contraseña,
                fechaNacimiento,
                email,
                celular
            }


            Swal.fire({
                title: 'Seguro que eliges este turno?',
                text: "No podras elegir otro !",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Reservado',
            }).then(async (result) => {
                if (result.isConfirmed) {
                    try {
                        const res = await fetch(URL, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(newUsuario)
                        });
                        if (res.status === 201) {
                            Swal.fire('Turno Guardado!', ' Tu turno fue reservado .', 'success');
                        }
                    } catch (error) {
                        console.log(error);
                    }

                }
            });
        };

        return (
            <div className='Registro'>
                <Container className="py-5">
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
                        <Form className='RForm p-3 m-3' onSubmit={handleSubmit}>
                            <Row ClassName='' >
                                <Col md={6}>
                                    <Form.Group className="my-3">
                                        <Form.Label className='Rlabel'>Usuario</Form.Label>
                                        <Form.Control 
                                        type="Text" 
                                        placeholder="Ingresar un usuario" 
                                        onChange={({ target }) => setUsuario(target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="my-3">
                                        <Form.Label className='Rlabel'>Nombre y Apellido</Form.Label>
                                        <Form.Control 
                                        type="text" 
                                        placeholder="Ingresa Tu nombre completo"
                                        onChange={({ target }) => setNombreApellido(target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="my-3" controlId="formBasicPassword">
                                        <Form.Label className='Rlabel'>Contraseña</Form.Label>
                                        <Form.Control
                                         type="password" 
                                         placeholder="Password"
                                         onChange={({ target }) => setContraseña(target.value)} />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="my-3">
                                        <Form.Label className='Rlabel'>Fecha de Nacimiento</Form.Label>
                                        <Form.Control 
                                        type="date" 
                                        placeholder="Ingresa tu fecha de Nacimiento"
                                        onChange={({ target }) => setFechaNacimiento(target.value)}
                                         max="2004-03-01" />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="my-3" controlId="formBasicEmail">
                                        <Form.Label className='Rlabel'>Correo Electronico</Form.Label>
                                        <Form.Control 
                                        type="email"
                                         placeholder="Ingresa un correo electronico"
                                         onChange={({ target }) => setEmail(target.value)}  />
                                    </Form.Group>
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="my-3">
                                        <Form.Label className='Rlabel'>Telefono Celular</Form.Label>
                                        <Form.Control 
                                        type="tel" 
                                        placeholder="Ingresa un telefono"
                                        onChange={({ target }) => setCelular(target.value)} />
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
