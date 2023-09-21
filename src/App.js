import './App.css';
import Testimonio from './componentes/Testimonio';
//importamos el componente testimonio a la app y añadimos el componente dentro del div
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos</h1>
        <Testimonio
          nombre='Julia'
          pais='Spain'
          imagen='julia'
          cargo='Ingeniera Software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Testimonio
          nombre='Tom Smith'
          pais='Belgium'
          imagen='tom'
          cargo='Ingeniero Software'
          empresa='Amazon'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        <Testimonio
          nombre='Janet'
          pais='France'
          imagen='janet'
          cargo='Ingeniera Software'
          empresa='ChatDesk'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />

      </div>
      

    </div>
  );
}


export default App;
