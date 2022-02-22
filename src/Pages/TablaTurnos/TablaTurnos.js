import React from 'react';
import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Turno from "./Turnos/Turno";


const TablaTurnos = ({turnos , URL, getApi}) => {
    return (
        <div>
             <Container className="py-5">
        <div className="d-flex align-items-center justify-content-between">
          <h1>Tabla de Turnos</h1>
          <Link to="/turno/crear" className="btn-yellow text-decoration-none text-center">Reservar Turno </Link>
        </div>
        <hr />
        {/* Tabla de turnos */}
        {turnos.length != 0 ? 
          <Table bordered hover responsive className="align-middle mt-3">
            <thead>
              <tr>
                <th>N°.</th>
                <th>Dueño </th>
                <th>Mascota</th>
                <th>Horario</th>
                <th>Raza</th>
                <th>Turnos</th>
              </tr>
            </thead>
            <tbody>
              {turnos.map((turno) => (
                <Turno key={turno.id}
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

export default TablaTurnos;