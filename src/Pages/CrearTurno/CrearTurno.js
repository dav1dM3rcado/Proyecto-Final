import React, { useState } from "react";
import { Container, Form, } from "react-bootstrap";
import Swal from "sweetalert2";
import { validateNombreDueño, validateNombreMascota, validateHorario, validateRaza } from "../../helpers/ValidateFields";
import "../../Styles/GeneralStyles.css";



const CrearTurno = ({ URL }) => {
  //States 
  const [nombreDueño, setNombreDueño] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [horario, setHorario] = useState(new Date());
  const [raza, setRaza] = useState("");

  // Funcion para guardar los datos o crear el producto 
  const handleSubmit = (e) => {
    e.preventDefault();

    // validar los campos

    if (
      !validateNombreDueño(nombreDueño) ||
      !validateNombreMascota(nombreMascota) ||
      !validateHorario(horario) ||
      !validateRaza(raza)
    ) {
      Swal.fire("Ops!", " Some data is invalid.", "error");
      return;
    }

    // Enviar los datos para guardarlos 

    const newTurno = {
      nombreDueño,
      nombreMascota,
      horario,
      raza
    }


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Save',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newTurno)
          });
          if (res.status === 201) {
            Swal.fire('Created!', 'Your file has been Created.', 'success');
          }
        } catch (error) {
          console.log(error);
        }

      }
    });
  };

  return (
    <div>
      <Container className="py-5">
        <h1>Todos los Turnos </h1>
        <hr />
        {/* Form Product */}

        <Form className="my-5" onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nombre Del Dueño</Form.Label>


            <Form.Control
              type="text"
              placeholder="Ej: Nombre y Apellido"
              onChange={({ target }) => setNombreDueño(target.value)}
            />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Nombre de la Mascota </Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre o apodo"
              onChange={({ target }) => setNombreMascota(target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Horario</Form.Label>
            <Form.Control onChange={({ target }) => setHorario(target.value)}

              type="date"
              min="2022-05-01"
              max="2024-01-01"
              highlightDates={(new Date())}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Tipo Raza</Form.Label>
            <Form.Select onChange={({ target }) => setRaza(target.value)} >
              <option value="">Tipo de Raza</option>
              <option value="perro">Perro</option>
              <option value="gato">Gato</option>
              <option value="ave">Ave</option>
              <option value="reptil">Reptil</option>
              <option value="otro">Otro</option>
            </Form.Select>
          </Form.Group>
          <div className="text-end">
            <button className="btn-reservar">Reservar</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CrearTurno;