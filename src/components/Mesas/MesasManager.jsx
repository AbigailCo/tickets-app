import { useState } from "react";
import { HandPlatter } from "lucide-react";

function MesasManager({ mesas, onNuevaMesa, onSelectMesa }) {
  const [nuevaMesa, setNuevaMesa] = useState("");
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  const agregarMesa = () => {
    if (!nuevaMesa.trim()) return;

    const nueva = { id: Date.now(), nombre: nuevaMesa, productos: [] };
    onNuevaMesa(nueva);
    setNuevaMesa("");
    seleccionarMesa(nueva);
  };
  const seleccionarMesa = (mesa) => {
    onSelectMesa(mesa);
    setMesaSeleccionada(mesa.id);
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        <input
          value={nuevaMesa}
          onChange={(e) => setNuevaMesa(e.target.value)}
          placeholder="Nombre de la mesa"
          className="border px-2 py-1 rounded w-full sm:w-auto flex-1"
        />
        <button
          onClick={agregarMesa}
          className="flex items-center justify-center gap-1 bg-[#895805] text-white px-3 py-1 rounded w-full sm:w-auto"
        >
          <HandPlatter size={16} /> Crear mesa
        </button>
      </div>

      <h2 className="text-md font-bold  mb-4 text-gray-800">Tus mesas</h2>
      <ul className="flex flex-wrap ">
        {mesas.map((mesa) => (
          <li
            key={mesa.id}
            className={`cursor-pointer p-2 rounded m-1
        ${
          mesaSeleccionada === mesa.id
            ? "bg-[#895805] text-white"
            : "bg-gray-500 text-white hover:bg-[#895805]"
        }`}
            onClick={() => seleccionarMesa(mesa)}
          >
            {mesa.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MesasManager;
