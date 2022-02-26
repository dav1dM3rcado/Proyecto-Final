import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Usuario from "./Usuario/Usuario";


const TablaUsuario = ({turnos , URL, getApi}) => {
    return (
        <div>
             <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de Usuario</h1>
          <Link to="/Login/CrearUsuario" className="btn-reservar text-decoration-none text-center">Crear Usuario </Link>
        </div>
        <hr />
        {/* Tabla de turnos */}
        {turnos.length != 0 ? 
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N°.</th>
                <th>Usuario </th>
                <th>Nombre y Apellido</th>
                <th>Contraseña</th>
                <th>Fecha de Nacimiento</th>
                <th>email</th>
                <th>Celular</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <Usuario key={turno.id}
                turno={turno}
                  URL={URL}
                  getApi={getApi} />
              ))}
            </tbody>
          </Table>

          
          :
          <div className="no-products-found d-flex align-items-center justify-content-center">
            {/* No products found message */}
            <h1>🥐 No products found ☕</h1>
          </div> 
        }
      </Container>
    </div>
        
    );
};

export default TablaUsuario;