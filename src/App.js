import './App.css';
import logoContadordeClicks from './assets/img/logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import Temporizador from './componentes/Temporizador';
import Segundos from './componentes/Segundos';
import { useState } from 'react';
// import { click } from '@testing-library/user-event/dist/click';
// HOOKS --> son funciones especiales que permiten utilizar caracteristicas poderosas con componentes funcionales
// useState es un HOOK que nos permite agregarle un estado a un componente principal.

function App() {

  const [numClicks, setNumClicks ] = useState(0);
  // esta constante es un arreglo con dos elementos importantes
  // el primero es el valor que queremos colocar como ESTADO y el otro elemento es la función que nos permite actualizar el ESTADO
  // el valor cero (0) será el valor inicial de numClicks mientras que con la función setNumClicks actualizaremos el valor 

  let [ numSegundos, setNumSegundos ] = useState(1);

  let contador = (valor) => {
    setNumSegundos(valor);
    console.log(`has escogido ${valor}`)
  }

    const reiniciar = () => {
    setNumClicks(0);
  }

  const clicks = () => {
  setNumClicks(numClicks + 1);
  console.log('click');
  }

  let iniciarContador = (valor) => {
    reiniciar();
    // let contContador = document.querySelector('#botonClick')
    // Iniciar el intervalo que decrementa el contador de segundos cada segundo
    let intervalo = setInterval(() => {
      setNumSegundos(Math.floor(valor--));
      document.getElementById("temporizador").textContent = valor;
      // if (valor > 0) {
      //   contContador.addEventListener('click', clicks);
      // }
      if (valor === -1) {
        setNumSegundos(0);
      // document.getElementById('temporizador').textContent = valor;
      // Detener el intervalo cuando el contador de segundos llega a cero
      clearInterval(intervalo);
      // contContador.removeEventListener('click', this.clicks);
    }
  }, 1000);
  }

  return (
    <div className="App">
      <article class="header">
        <section class="header-section">
          <img 
            class="header_img" 
            src={logoContadordeClicks}
            alt="logo" />
        </section>
      </article>
      <article className='contenedor-bienvenido'>
        <p>BIENVENIDO</p>
        <p>Obtén una puntuación de 14 Clicks en 1 segundo y descubre el mensaje oculto</p>
        <p>tu puntuación es de {numClicks}</p>
      </article>
      <article className='botones'>
        <Contador  numClicks={numClicks} />
        <Temporizador numSegundos={numSegundos} />
        <Boton 
          // className='reiniciar'
          texto='Reiniciar'
          botonClick={false}
          clicks={reiniciar} />
          <Boton 
          texto='Click'
          botonClick={true}
          clicks={clicks} 
          contador = {numSegundos} />
      </article>
      <article className='contenedor-segundos'>
        <p className='contenedor-segundos_text'>XXXXX</p>
        <Segundos 
        className='1segundo'
        valor='1'
        cantidadSegundo={false}
        contador={contador}
        iniciarContador={iniciarContador}></Segundos>
        <Segundos 
        className='5segundos'
        valor='5'
        cantidadSegundo={true}
        contador={contador}
        iniciarContador={iniciarContador}></Segundos>
        <Segundos 
        className='10segundos'
        valor='10'
        cantidadSegundo={true}
        contador={contador}
        iniciarContador={iniciarContador}></Segundos>
        <Segundos 
        className='30segundos'
        valor='30'
        cantidadSegundo={true}
        contador={contador}
        iniciarContador={iniciarContador}></Segundos>
        <Segundos 
        className='60segundos'
        valor='60'
        cantidadSegundo={true}
        contador={contador}
        iniciarContador={iniciarContador}></Segundos>
      </article>
    </div>
  );
}

export default App;
