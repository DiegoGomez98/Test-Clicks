// import { click } from '@testing-library/user-event/dist/click';
import React from 'react';
import '../hojas-de-estilo/Boton.css';
// import Contador from './Contador';

// DESESTRUCTURACIÓN
// lo que hace es tomar el objeto ({}) y que en lugar de referirse él, vamos a escribir dentro de unas llaves las PROPIEDADES que estamos utilizando (en este caso "texto")

// SINTAXIS DE DESESTRUCTURACIÓN: Toma el objeto y en vez de recibir el mismo como tal (objeto), vamos a escribir dentro de llaves ({}) las propiedades que estamos necesitando
// no requiere que utilices la palabra "props."
function Boton({ texto, botonClick, clicks, contador}) {
  // const [onClickActivo, setOnClickActivo] = useState(true);

  // function eliminarEventoOnClick() {
  //   setOnClickActivo(false);
  // }
// clicks y countdown: son funciones dentro de los props
  return (
    <button
      className={ botonClick ? 'botonClick' : 'botonReiniciar' }
      id={ botonClick ? 'botonClick' : 'botonReiniciar' }
      onClick={clicks} disabled={contador === 0}
      >
      {texto}
    </button>
  )
}

export default Boton;
// Recordar: con la exportación por defecto solo podemos exportar un elemento del archivo.