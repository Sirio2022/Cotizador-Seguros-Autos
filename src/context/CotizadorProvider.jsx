import { createContext, useState } from 'react';

const CotizadorContext = createContext(); // Crear el Contexto

// Componente que envuelve a los demás componentes
const CotizadorProvider = ({ children }) => {
  const [datos, setDatos] = useState({
    marca: '',
    year: '',
    plan: '',
  });

  const [error, setError] = useState('');

  const handleChangeDatos = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <CotizadorContext.Provider value={{ datos, handleChangeDatos, error, setError }}>
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
