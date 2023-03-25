export const Marcas = [
  { id: 1, name: 'Europeo' },
  { id: 2, name: 'Americano' },
  { id: 3, name: 'Asiático' },
];

export const YearMax = new Date().getFullYear();
export const Years = Array.from(new Array(20), (val, index) => YearMax - index);

export const Planes = [
  { id: 1, name: 'Básico' },
  { id: 2, name: 'Completo' },
];
