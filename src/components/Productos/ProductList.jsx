function ProductList({ products, onRemove }) {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full border border-gray-200 rounded-md shadow-sm">
        <thead className="bg-[#895805] text-white">
          <tr>
            <th className="px-4 py-2 text-left">Producto</th>
            <th className="px-4 py-2 text-right">Precio</th>
            <th className="px-4 py-2 text-right">Cantidad</th>
            <th className="px-4 py-2 text-right">Total</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, i) => (
            <tr
              key={i}
              className="border-t border-gray-200 hover:bg-gray-100 transition"
            >
              <td className="px-4 py-2">{p.nombre}</td>
              <td className="px-4 py-2 text-right">${Number(p.precio).toFixed(2)}</td>
              <td className="px-4 py-2 text-right">{p.cantidad}</td>
              <td className="px-4 py-2 text-right">${(p.precio * p.cantidad).toFixed(2)}</td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => onRemove(i)}
                  className="text-red-600 hover:text-red-800 font-bold"
                  aria-label={`Eliminar ${p.nombre}`}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
          {products.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No hay productos agregados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
