import { useState } from "react";
import productosDisponibles from "../../data/productos.json";
import { SquarePlus } from "lucide-react";

function ProductForm({ onAdd }) {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState(1);
    const [errores, setErrores] = useState({});
    const [busqueda, setBusqueda] = useState("");
    const [mostrarDropdown, setMostrarDropdown] = useState(false);

    // Aplanamos todos los productos para buscar fácilmente
    const productosPlanos = productosDisponibles.flatMap((grupo) =>
        grupo.items.map((item) => ({
            ...item,
            categoria: grupo.categoria,
        }))
    );

    // Filtrar productos según la búsqueda
    const productosFiltrados = productosPlanos.filter((producto) =>
        producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    const handleSelectProducto = (producto) => {
        setNombre(producto.nombre);
        setPrecio(producto.precio || "");
        setErrores({});
        setBusqueda(producto.nombre);
        setMostrarDropdown(false);
    };

    const validar = () => {
        const nuevosErrores = {};

        if (!nombre) nuevosErrores.nombre = "Seleccioná un producto.";
        if (!precio || isNaN(precio) || parseFloat(precio) <= 0)
            nuevosErrores.precio = "Ingresá un precio válido.";
        if (!cantidad || isNaN(cantidad) || parseInt(cantidad) < 1)
            nuevosErrores.cantidad = "La cantidad debe ser al menos 1.";

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validar()) return;

        onAdd({
            nombre,
            precio: parseFloat(precio),
            cantidad: parseInt(cantidad),
        });

        setNombre("");
        setPrecio("");
        setCantidad(1);
        setErrores({});
        setBusqueda("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="product-form space-y-4 bg-gray-50 p-4 rounded-md shadow-sm relative"
        >
            <div className="flex flex-col gap-2 relative">
                <input
                    type="text"
                    placeholder="Buscar producto..."
                    value={busqueda}
                    onChange={(e) => {
                        setBusqueda(e.target.value);
                        setMostrarDropdown(true);
                    }}
                    onFocus={() => setMostrarDropdown(true)}
                    className="w-full border px-3 py-2 rounded"
                    autoComplete="off"
                />

                {/* Dropdown con opciones filtradas */}
                {mostrarDropdown && productosFiltrados.length > 0 && (
                    <ul className="absolute z-50 w-full max-h-48 overflow-auto bg-white border border-gray-300 rounded shadow-md"
                        style={{ top: "25%", marginTop: "4px" }}>
                        {productosFiltrados.map((producto, idx) => (
                            <li
                                key={idx}
                                onClick={() => handleSelectProducto(producto)}
                                className="cursor-pointer px-3 py-2 hover:bg-[#895805] hover:text-white"
                            >
                                {producto.nombre} <span className="text-sm text-gray-400">({producto.categoria})</span>
                            </li>
                        ))}
                    </ul>
                )}

                {errores.nombre && (
                    <span className="text-red-600 text-sm">{errores.nombre}</span>
                )}

                <input
                    type="number"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:bg-[#af730b26]"
                    min="0"
                    step="0.01"
                />
                {errores.precio && (
                    <span className="text-red-600 text-sm">{errores.precio}</span>
                )}

                <input
                    type="number"
                    placeholder="Cantidad"
                    value={cantidad}
                    onChange={(e) => setCantidad(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:bg-[#af730b26]"
                    min="1"
                />
                {errores.cantidad && (
                    <span className="text-red-600 text-sm">{errores.cantidad}</span>
                )}
            </div>

            <button
                type="submit"
                className="flex items-center justify-center gap-1 mt-4 bg-[#895805] hover:bg-[#af730b] text-white text-sm px-3 py-1.5 rounded transition w-fit mx-auto"
            >
                <SquarePlus size={16} /> Agregar producto
            </button>
        </form>
    );
}

export default ProductForm;
