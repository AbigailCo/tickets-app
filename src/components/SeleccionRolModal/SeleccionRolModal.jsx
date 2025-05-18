import { HandPlatter, Monitor } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Navbar/Logo";


function SeleccionRolModal() {
  const navigate = useNavigate();
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const rolGuardado = localStorage.getItem("rol");
    if (!rolGuardado) {
      setMostrarModal(true);
    }
  }, []);

  const handleSeleccion = (rol) => {
    localStorage.setItem("rol", rol);
    setMostrarModal(false);
    const rolGuardado = localStorage.getItem("rol");
    if (rolGuardado === "mozo") {
      navigate("/mozo");
    } else if (rolGuardado === "caja") {
      navigate("/caja");
    } else {
      navigate("/");
    }
  };

  if (!mostrarModal) return null;

  return (
    <div className="fixed inset-0 modal-backdrop flex items-center justify-center z-50">
      <div className="bg-white rounded-3xl p-8 shadow-2xl w-[90%] max-w-md text-center space-y-6 modal-content">
        {/* Tu logo */}
        <div className="flex justify-center">
          <Logo className="w-28 h-auto" />
        </div>
        {/* Botones */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSeleccion("mozo")}
            className="flex items-center justify-center gap-2 bg-yellow-700 text-white px-5 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-800 transition"
          >
            <HandPlatter size={20} /> Mozo
          </button>
          <button
            onClick={() => handleSeleccion("caja")}
            className="flex items-center justify-center gap-2 bg-gray-900 text-white px-5 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
          >
            <Monitor size={20} /> Caja
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeleccionRolModal;
