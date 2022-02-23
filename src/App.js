import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import CrearUsuario from './Pages/CrearUsuario/CrearUsuario';
import Ingreso from './Pages/Login/Ingreso/Ingreso';
import TablaTurnos from './Pages/TablaTurnos/TablaTurnos';
import CrearTurno from './Pages/CrearTurno/CrearTurno';
import TablaUsuario from './Pages/TablaUsuario/TablaUsuario';
import EditarTurno from './Pages/EditarTurno/EditarTurno';
import EditarUsuario from './Pages/EditarTurno/EditarTurno';
import Home from "./home/Home";
import PaginaPlanes from "./components/PaginaPlanes";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";


function App() {

  const [turnos, setTurnos] = useState([])

  const URL = process.env.REACT_APP_API_VETROLLING;

  useEffect(() => {
    getApi()

  }, [])

  const getApi = async () => {
    try {
      const res = await fetch(URL);
      const turnoApi = await res.json();
      setTurnos(turnoApi)
    } catch (error) {
      console.log(error);

    }
  }


  return (


    <div>
      <BrowserRouter>
        <Navigation />
        <main>
          <Routes>
            <Route exact path="/" element={<Home turnos={turnos} />} />
            <Route exact path="/turno/tabla" element={<TablaTurnos turnos={turnos} URL={URL} getApi={getApi} />} />
            <Route exact path="/turno/crear" element={<CrearTurno URL={URL} getApi={getApi} />} />
            <Route exact path="/turno/editar/:id" element={<EditarTurno URL={URL} getApi={getApi} />} />
            <Route exact path="/usuario/editar/:id" element={<EditarUsuario URL={URL} getApi={getApi} />} />
            <Route exact path="/Login/CrearUsuario" element={<CrearUsuario URL={URL} getApi={getApi} />} />
            <Route exact path="/usuario/TablaUsuario" element={<TablaUsuario  turnos={turnos} URL={URL} getApi={getApi} />} />
            <Route exact path="/login" element={<Ingreso />} />
            <Route exact path="/PaginaPlanes" element={<PaginaPlanes />} />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </div>
  )



};

export default App;
