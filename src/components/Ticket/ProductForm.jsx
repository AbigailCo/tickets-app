import { useState } from 'react';
import productosDisponibles from '../../data/productos.json';

function ProductForm({ onAdd }) {
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [cantidad, setCantidad] = useState(1);

    const handleSelectChange = (e) => {
        const productoSeleccionado = productosDisponibles.find(
            (p) => p.nombre === e.target.value
        );
        setNombre(productoSeleccionado.nombre);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre || !precio) return;
        onAdd({ nombre, precio: parseFloat(precio), cantidad: parseInt(cantidad) });
        setNombre('');
        setPrecio('');
        setCantidad(1);
    };

    return (
        <form onSubmit={handleSubmit} className="product-form space-y-4 bg-gray-50 p-4 rounded-md shadow-sm">
            <div className="flex flex-col gap-2">
                {/* <input
                    type="text"
                    placeholder="Producto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:bg-[#af730b26]"
                    required
                />
                
                 */}


                <select
                    onChange={handleSelectChange}
                    value={nombre}
                    className="w-full border px-3 py-2 rounded"
                >
                    <option value="">Seleccionar producto</option>
                    {productosDisponibles.map((p, idx) => (
                        <option key={idx} value={p.nombre}>
                            {p.nombre}
                        </option>
                    ))}
                </select>
                <input
                    type="number"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:bg-[#af730b26]"
                    required
                    min="0"
                    step="0.01"
                />
                <input
                    type="number"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:focus:bg-[#af730b26]"
                    required
                    min="1"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-[#895805] text-white py-2 px-4 rounded-md hover:bg-[#af730b] focus:focus:bg-[#af730b26] transition duration-200"
            >
                Agregar producto
            </button>
        </form>
    );
}

export default ProductForm;
