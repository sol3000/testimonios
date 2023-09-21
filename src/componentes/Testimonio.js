import React from 'react';
import '../hojasDeEstilo/Testimonio.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio' 
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`Foto de ${props.nombre}`} />
        <div className='contenedor-texto-testimonio' >
          <p className='nombre-testimonio' >
            <strong>{props.nombre}</strong> en {props.pais} 
          </p>
          <p className='cargo-testimonio'>
            {props.cargo} en <strong>{props.empresa}</strong> 
          </p>
          <p className='texto-testimonio'>"{props.testimonio}" </p>
        </div>
    </div>
  );   
}

//para poder exportar el componente a app.js
export default Testimonio;