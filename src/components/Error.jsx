import useCotizador from '../hooks/useCotizador';

export default function Error() {
  const { error } = useCotizador();
  return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5">
        <p>{error}</p>
      </div>
    );
}
