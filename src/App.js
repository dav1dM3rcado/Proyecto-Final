import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './layout/Navigation';
import Footer from './layout/Footer';
import Registro from './Pages/Login/Registro/Registro';

import Ingreso from './Pages/Login/Ingreso/Ingreso';
import TablaTurnos from './Pages/TablaTurnos/TablaTurnos';
import CrearTurno from './Pages/CrearTurno/CrearTurno';
import EditarTurno from './Pages/EditarTurno/EditarTurno';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";


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
          <Route exact path="/turno/editar/:id" element={<EditarTurno  URL={URL} getApi={getApi} />} />
          <Route exact path="/Login/Registro" element={<Registro/>} />
          <Route exact path="/login" element={<Ingreso/>} />
        
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>

  </div>

  )
}

export default App;
