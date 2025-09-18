//import { Link } from 'react-router';
import { useNavigate } from 'react-router';

const NotFound = () => {
  // useNavigate se usa normalmente en el login para enviar al usuario a otra ruta
  const navigate = useNavigate();
  return (
    <div className='not-found'>
      <h1>La pagina no existe</h1>
      <p>La pagina que busca no existe.</p>
      {/* <Link to='/'>Regresar al inicio</Link> */}
      <button
        className='btn btn-primary'
        onClick={() => navigate('/')}
      >
        Regresar al home
      </button>
    </div>
  );
};

export default NotFound;
