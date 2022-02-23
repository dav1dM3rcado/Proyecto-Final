import { useEffect, useRef, useState } from "react";
import { Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { validateUsuario, validateNombreApellido, validarContraseña , validateFechaNacimiento, validateEmail , validateCelular } from "../../helpers/ValidateFields";


const EditarTurno = ({ URL, getApi }) => {



    const [turno, setTurno] = useState({});


    const { id } = useParams();

    const nombreDueñoRef = useRef("")
    const nombreMascotaRef = useRef("")
    const horarioRef = useRef("")



    const navigate = useNavigate()


    useEffect(async () => {
        try {
            const res = await fetch(`${URL}/${id}`);
            const turnoApi = await res.json();
            setTurno(turnoApi);
        } catch (error) {
            console.log(error);
        }

    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()

        if (
            !validateNombreDueño(nombreDueñoRef.current.value) ||
            !validateNombreMascota(nombreMascotaRef.current.value) ||
            !validateHorario(horarioRef.current.value) ||
            !validateRaza(turno.raza)
        ) {
            Swal.fire("Ops!", " Some data is invalid.", "error");
            return;
        }


        const turnoUpdated = {
            nombreDueño: nombreDueñoRef.current.value,
            nombreMascota: nombreMascotaRef.current.value,
            horario: horarioRef.current.value,
            raza: turno.raza
        };

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Update',
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`${URL}/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(turnoUpdated),
                    });
                    if (res.status === 200) {
                        Swal.fire('Updated', 'Your file has been Updated.', 'success');
                        getApi();
                        navigate("/turno/tabla");
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
                <h1>Editar Turno</h1>
                <hr />
                {/* formulario de Turnos */}
                <Form className="my-5" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre Del Dueño</Form.Label>
                        <Form.Control type="text"
                            placeholder="nombre completo"
                            defaultValue={turno.nombreDueño}
                            ref={nombreDueñoRef}
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nombre de la Mascota</Form.Label>
                        <Form.Control type="text"
                            placeholder="nombre o apodo"
                            defaultValue={turno.nombreMascota}
                            ref={nombreMascotaRef}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Horario</Form.Label>
                        <Form.Control
                            type="date" 
                            defaultValue={turno.horario}
                            ref={horarioRef}/>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Label>Raza</Form.Label>
                        <Form.Select value={turno.raza} onChange={({ target }) => setTurno({ ...turno, raza: target.value })}>
                            <option value="">Tipo de Raza</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                            <option value="ave">Ave</option>
                            <option value="reptil">Reptil</option>
                            <option value="otro">Otro</option>
                        </Form.Select>
                    </Form.Group>
                    <div className="text-end">
                        <button className="btn-reservar">Modificar</button>
                    </div>
                </Form>
            </Container>

        </div>
    );
};

export default EditarTurno;