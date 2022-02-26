import React from 'react';
import profesional1 from "../img/profesionales/profesional1.jpg"

const CardProfesional = () => {
    return (
        <div className='card'>
            <img className='img-fluid' src={profesional1} alt='licenciada'></img>
            <div className="card-body">
                <h4 className="card-title">My title</h4>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error in corrupti ea optio magnam. Tempore provident fuga vitae saepe unde, repellat delectus iure ut? Rerum, repudiandae. Porro corrupti temporibus dolor.</p>
            </div>
        </div>
    );
};

export default CardProfesional;