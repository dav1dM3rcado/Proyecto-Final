import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from "../Assets/Img/logo3nav.png";
import "../Styles/GeneralStyles.css";

const Navigation = () => {
  return (
    <div>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="logo" href="/">
          Vet Rolling
          <img className="imglogo px-4" src={logo}/>
          </Navbar.Brand>
          <Navbar.Toggle className='btn-burger' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto color-nav">
              <Link className="nav-link na" to="/" >Inicio</Link>
              <Link  className="nav-link na" to="/turno/tabla">Turnos</Link>
              <Link  className="nav-link na" to="/Login">Login</Link>
              <Link  className="nav-link na" to="/Usuario/TablaUsuario">Usuario</Link>
              <Link  className="nav-link na" to="/PaginaContacto">Contacto</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
