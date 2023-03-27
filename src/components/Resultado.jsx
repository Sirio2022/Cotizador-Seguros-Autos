import { useCallback, useMemo, useRef } from 'react';
import useCotizador from '../hooks/useCotizador';
import { Marcas, Planes } from '../constants';

export default function Resultado() {
  const { resultado, datos } = useCotizador();
  const { marca, year, plan } = datos;

  const [nombreMarca] = useMemo(
    () => Marcas.filter((m) => m.id === Number(marca)),
    [resultado]
  );

  const yearRef = useRef(year);

  const [nombrePlan] = useMemo(
    () => Planes.filter((p) => p.id === Number(plan)),
    [resultado]
  );

  // Pues se puede hacer de esta manera, pero useCallback no es la mejor forma.  Mejor usar useMemo.
  // useCallback es para funciones. No es la mas rapida.  useMemo es para valores.  Es mas rapida.

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-2xl font-bold text-gray-500">
        Resumen de Cotización
      </h2>
      <p className="text-gray-500">
        Marca: <span className="font-bold">{nombreMarca.name}</span>
      </p>
      <p className="text-gray-500">
        Plan: <span className="font-bold">{nombrePlan.name}</span>
      </p>
      <p className="text-gray-500">
        Auto modelo: <span className="font-bold">{yearRef.current}</span>
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold uppercase">
          Precio del plan: {resultado}
        </span>
      </p>
    </div>
  );
}
