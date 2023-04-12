import React from 'react';
import '../hojas-de-estilo/Segundos.css';

function Segundos ({ valor, cantidadSegundo, contador, iniciarContador }) {
  return (
    <button
      className='cantidadSegundos'
      onClick={() => {
        contador(valor);
        iniciarContador(valor)}
      }>
      {valor} {cantidadSegundo ? 'Segundos' : 'Segundo'}
    </button>
  );
}

export default Segundos;