import { useState, useEffect } from "react";
import "./App.css";
import { ProductForm, ProductList, TicketPreview, Navbar, MesasManager } from "./components";


function App() {
  const [mesas, setMesas] = useState([]);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  // Carga mesas de localStorage al iniciar
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mesas")) || [];
    setMesas(stored);
    if (stored.length > 0) {
      setMesaSeleccionada(stored[0]); // Selecciona la primera mesa por defecto
    }
  }, []);

  // Actualiza las mesas en estado y en localStorage
  const actualizarMesas = (nuevasMesas) => {
    setMesas(nuevasMesas);
    localStorage.setItem("mesas", JSON.stringify(nuevasMesas));
  };

  // Cuando se crea una nueva mesa desde MesasManager
  const handleNuevaMesa = (nuevaMesa) => {
    const nuevasMesas = [...mesas, nuevaMesa];
    actualizarMesas(nuevasMesas);
    setMesaSeleccionada(nuevaMesa);
  };

  // Agregar producto a la mesa seleccionada
  const addProduct = (product) => {
    if (!mesaSeleccionada) return;

    const productosActualizados = [...(mesaSeleccionada.productos || []), product];
    const nuevasMesas = mesas.map((mesa) =>
      mesa.id === mesaSeleccionada.id
        ? { ...mesa, productos: productosActualizados }
        : mesa
    );

    actualizarMesas(nuevasMesas);
    setMesaSeleccionada({ ...mesaSeleccionada, productos: productosActualizados });
  };

  // Eliminar producto de la mesa seleccionada
  const removeProduct = (index) => {
    if (!mesaSeleccionada) return;

    const productosActualizados = [...(mesaSeleccionada.productos || [])];
    productosActualizados.splice(index, 1);

    const nuevasMesas = mesas.map((mesa) =>
      mesa.id === mesaSeleccionada.id
        ? { ...mesa, productos: productosActualizados }
        : mesa
    );

    actualizarMesas(nuevasMesas);
    setMesaSeleccionada({ ...mesaSeleccionada, productos: productosActualizados });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-start bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white p-6 shadow-lg rounded-md">
          <div className="mb-6">
            <MesasManager mesas={mesas} onNuevaMesa={handleNuevaMesa} onSelectMesa={setMesaSeleccionada} />
          </div>

          {mesaSeleccionada ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
                Mesa: {mesaSeleccionada.nombre}
              </h2>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:basis-1/3">
                  <ProductForm onAdd={addProduct} />
                </div>

                <div className="lg:basis-1/3">
                  <ProductList products={mesaSeleccionada.productos || []} onRemove={removeProduct} />
                </div>

                <div className="lg:basis-1/3">
                  <TicketPreview products={mesaSeleccionada.productos || []} />
                </div>
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">Selecciona o crea una mesa para empezar.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
