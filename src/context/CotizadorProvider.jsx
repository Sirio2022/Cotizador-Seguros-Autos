import { createContext, useState } from 'react';

const CotizadorContext = createContext(); // Crear el Contexto

// Componente que envuelve a los demás componentes
const CotizadorProvider = ({ children }) => {
  return (
    <CotizadorContext.Provider value={{}}>{children}</CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
