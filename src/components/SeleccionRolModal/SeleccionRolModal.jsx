import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


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
    }else { 
      navigate("/");
    }
  };

  if (!mostrarModal) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-xl w-[90%] max-w-md text-center">
        <h2 className="text-xl font-semibold mb-4">Quien sos?</h2>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSeleccion("mozo")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Soy Mozo
          </button>
          <button
            onClick={() => handleSeleccion("caja")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Soy Caja
          </button>
        </div>
      </div>
    </div>
  );
}

export default SeleccionRolModal;
