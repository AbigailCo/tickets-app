import { useState } from "react";
import { HandPlatter } from 'lucide-react';

function MesasManager({ mesas, onNuevaMesa, onSelectMesa }) {
  const [nuevaMesa, setNuevaMesa] = useState("");


  /*useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mesas")) || [];
    setMesas(stored);
  }, []); */

  const agregarMesa = () => {
    if (!nuevaMesa.trim()) return;
  
    const nueva = { id: Date.now(), nombre: nuevaMesa, productos: [] };
    onNuevaMesa(nueva); // 👈 importante: delegamos la creación
    setNuevaMesa("");
  };
  const seleccionarMesa = (mesa) => {
    //console.log("Mesa seleccionada:", mesa);
    onSelectMesa(mesa);
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
 <h2 className="text-lg font-bold mb-2">Mesas</h2>
      <ul className="flex flex-wrap ">
       
        {mesas.map((mesa) => (
          <li
            key={mesa.id}
            className="cursor-pointer p-2 bg-gray-200 rounded hover:bg-[#895805]"
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
