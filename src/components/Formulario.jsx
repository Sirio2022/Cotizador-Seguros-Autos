import { Fragment } from 'react';
import { Marcas, Years, Planes } from '../constants';

export default function Formulario() {
  return (
    <>
      <form>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase ">
            Marca
          </label>

          <select
            name="marca"
            className="bg-gray-100 border-2 w-full p-3 rounded-lg outline-none focus:bg-gray-200"
          >
            <option value="">--Selecciona la marca--</option>

            {Marcas.map((marca) => (
              <option key={marca.id} value={marca.id}>
                {marca.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase ">
            Año
          </label>

          <select
            name="year"
            className="bg-gray-100 border-2 w-full p-3 rounded-lg outline-none focus:bg-gray-200"
          >
            <option value="">--Selecciona el modelo--</option>

            {Years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-500 uppercase ">
            Plan
          </label>

          <div className="flex gap-3 items-center">
            {Planes.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input type="radio" name="plan" value={plan.id} />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer font-bold p-3 uppercase rounded-lg "
        />
      </form>
    </>
  );
}
