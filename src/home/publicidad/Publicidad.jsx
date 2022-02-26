import React from 'react';
import publicidad from "../img/publicidad.video.mp4"
import "../style/PublicidadVideo.css"

const Publicidad = () => {
    return (
        <div className='my-5 container'>
        <h2 className='text-center fw-bold publicidad-h2'>Alimentacion de alta calidad</h2>
        <div className=''>
            <video className='publicidadVideoHome' src={publicidad} alt="publicidad" autoPlay loop muted></video>
        </div>
        </div>
    );
};

export default Publicidad;