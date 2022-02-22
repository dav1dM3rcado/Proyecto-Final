import React, { useState } from "react";
import '../Ingreso/Ingreso.css';
import { Form, Button, Carousel , Row , Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import carusel1 from '../../../Assets/Img/carusel1.jpg';
import carusel2 from '../../../Assets/Img/carusel2.jpg';
import carusel3 from '../../../Assets/Img/carusel3.jpg';
import { validateEmail, validateContraseña } from "../../../helpers/ValidateFields";
import Swal from "sweetalert2";




const Ingreso = () => {

const [email, setEmail] = useState("");
const [contraseña, setContraseña] = useState("")
const [terminos, cambiarTerminos] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

if (
  !validateEmail(email) ||
  !validateContraseña(contraseña)

) {
  Swal.fire("Ops!" , " Some data is invalid." , "error");
  return;
}
};

const onChangeTerminos = (e) => {
  cambiarTerminos(e.target.checked);
}




  return (
    <div>
      <div className="d-flex flex-column justify-content-center boxc py-5 mx-5">
        <h1>Todos los Turnos </h1>
        <hr />
        <div>
          <Row className='my-3'>
            <Col className='mb-3' xs={12} md={12}   lg={3}>
            <div  className='box'>
              <Form className='FormLogin p-4'  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Usuario</Form.Label>
                  <Form.Control
                   type="text" 
                   placeholder="Usuario o Email"
                   required
                   onChange={({ target }) => setEmail(target.value)}/>
                
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                   type="password" 
                   placeholder="Contraseña" 
                   onChange={({ target }) => setContraseña(target.value)}/>
                   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check  
                  className='checkboxL' 
                  type="checkbox" 
                  name="terminos"
                  id="terminos"
                  checked={terminos} 
                  onChange={onChangeTerminos} 
                  label="Recordar mis datos" />
                </Form.Group>  
                <div>
                  <Button variant="primary mb-3" type="submit">
                  
                    Ingresar
                  </Button>
                </div>
                <Link className="nav-link" to="/Registro">Olvide mi Contraseña</Link>

                <Link className="nav-link" to="/Login/Registro">Registro</Link>
                <hr className='mb-3'/>
                <div className='Opcionesdeingreso'>
                  <p className="text-secondary my-4">O ingresá con</p>
                  <div className='fontAIconL'>

                  <FontAwesomeIcon className='IconL px-3' icon={faGoogle} />
                  <FontAwesomeIcon className='IconL px-3'icon={faFacebook} />
                  </div>
                </div>
              </Form>
            </div>
            </Col>
            <Col className='mb-3 Col-carusel'  xs={12} md={12} lg={9}>
            <div>
            <Carousel className='logincarusel'>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenl"
            src={carusel1}
          />
          <Carousel.Caption>
            <h2>Centro Medico</h2>
            <p className="tx-carusel">Contamos con los mejores profesionales y la mas alta tecnologia.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenl "
            src={carusel2}
          />
          <Carousel.Caption>
            <h2>Pet shop!</h2>
            <p  className="tx-carusel">Los mejores articulos y juguetes para tu mascota.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 imagenl"
            src={carusel3}
          />
          <Carousel.Caption>
            <h2>Guarderia Mascotera!</h2>
            <p className="tx-carusel" >Cuidamos a tu mascota en el mejor ambiente  posible .</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
            </div>
            </Col>
            
          </Row>
        </div>
      </div>
    </div>


  );


};





export default Ingreso;