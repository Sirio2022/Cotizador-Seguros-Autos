import { createContext, useState } from 'react';
import {
  obtenerDiferenciaYear,
  calcularMarca,
  obtenerPlan,
  formatoMoneda,
} from '../helpers';

const CotizadorContext = createContext(); // Crear el Contexto

// Componente que envuelve a los demás componentes
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const cotizarSeguro = () => {
    // Base de 2000
    let resultado = 2000;
    // Obtener la diferencia de años
    const diferencia = obtenerDiferenciaYear(datos.year);
    // Por cada año hay que restar el 3%
    resultado -= (diferencia * 3 * resultado) / 100;
    // Europeo 30%
    // Americano 15%
    // Asiatico 5%

    resultado = calcularMarca(datos.marca) * resultado;

    // Básico aumenta 20%
    // Completo aumenta 50%
    const incrementoPlan = obtenerPlan(datos.plan);
    resultado = parseFloat(incrementoPlan * resultado).toFixed(2);
    // Formatear el resultado
    resultado = formatoMoneda(resultado);

    // Total

    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false);
    }, 1500);
  };

  return (
    <CotizadorContext.Provider
      value={{
        datos,
        handleChangeDatos,
        error,
        setError,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
