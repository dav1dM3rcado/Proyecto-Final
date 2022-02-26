import React from "react";
import "../Styles/GeneralStyles.css";
import { Row, Col } from 'react-bootstrap';
import logo from "../Assets/Img/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (

    <div className="footer py-2">


      <div className='main-Ftr'>
        <Row ClassName='mt-6'>
          <Col className='col-sm-12 col-md-4 col-lg-4 px-5 f1'>
            <img className="logoFooter pt-3"
              src={logo} />
          </Col>
          <Col className='col-sm-12 col-md-4 col-lg-4  px-5  f2'>
             <p className=" fs-5 Acercade ">Acerca de : </p>
             <li className="nav-item pb-3">
             <Link to="/PaginaPlanes" className="temas text-decoration-none text-center">Planes  </Link> </li>
              <li className="nav-item pb-3 ">
              <Link to="" className="temas text-decoration-none text-center">Pet Shop </Link> </li>
              <li className="nav-item pb-3 ">
              <Link to="" className="temas text-decoration-none text-center">Guarderia Mascotera </Link> </li>
              <li className="nav-item pb-3 ">
              <Link to="PaginaContacto" className="temas text-decoration-none text-center">Contacto </Link></li>
          </Col>
          <Col className='col-sm-12 col-md-4 col-lg-4  px-5 py-4  f3'>
          <p className=" fs-5 Acercade ">Puedes encontrarnos en: </p>
              <div className='fontAIconL'>
                <FontAwesomeIcon to="/PaginaContacto" className='IconL px-3' icon={faInstagram}  />
                <FontAwesomeIcon className='IconL px-3' icon={faFacebook} />
                <FontAwesomeIcon className='IconL px-3' icon={faTwitter} />
                <FontAwesomeIcon className='IconL px-3' icon={faTiktok} />
              </div>
              <p className="my-5 fs-5 text-center  copyr">
              Vet Rolling. All rights reserved &copy;
            </p>
          </Col>

        </Row>
      </div>

    </div>


  );
};

export default Footer;
