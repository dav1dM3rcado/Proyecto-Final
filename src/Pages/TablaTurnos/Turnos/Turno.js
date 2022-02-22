import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";




const Turno = ({ turno, URL, getApi }) => {

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
      <td>{turno.nombreDueño}</td>
      <td>{turno.nombreMascota}</td>
      <td>{turno.horario}</td>
      <td>{turno.raza}</td>
      <td className="w-25">
        <div className="d-flex justify-content-center">
          <Link to={`/turno/editar/${turno.id}`} className="btn-orange mx-1">Editar Turno</Link>
          <button className="btn-red mx-1"
            onClick={() => handleDelete(turno.id)} >
            Borrar turno</button>
        </div>
      </td>
    </tr>


  );
};

export default Turno;