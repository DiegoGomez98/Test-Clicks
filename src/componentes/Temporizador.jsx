import React from 'react';
import '../hojas-de-estilo/Temporizador.css';

function Temporizador ({ numSegundos }) {
  return (
    <div
      className={'temporizador'}
      id={'temporizador'}>
      {numSegundos}
    </div>
  );
}

export default Temporizador;