import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const Usuario = ({ turno , URL, getApi }) => {

  const handleDelete = (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Dalete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },

          });
          if (res.status === 200) {
            Swal.fire('Dalated !', 'Your file has been Dalated !.', 'success');
            getApi();

          }

        } catch (error) {
          console.log(error);
        }
      }

    });

  }
  return (


    <tr>
      <td>{turno.id}</td>
      <td>{turno.usuario}</td>
      <td>{turno.nombreApellido}</td>
      <td>{turno.contraseña}</td>
      <td>{turno.fechaNacimiento}</td>
      <td>{turno.email}</td>
      <td>{turno.celular}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/usuario/editar/${turno.id}`} className="btn-editar   text-decoration-none text-center mx-1">Editar Usuario</Link>
          <button className="btn-borrar text-decoration-none text-center mx-1"
            onClick={() => handleDelete(turno.id)} >
            Borrar Usuario</button>
        </div>
      </td>
    </tr>


  );
};

export default Usuario;