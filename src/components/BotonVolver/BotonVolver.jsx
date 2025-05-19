import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BotonVolver() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium px-3 py-2 rounded transition duration-200
                 text-sm sm:text-base"
    >
      <ArrowLeft size={18} />
      <span className="hidden sm:inline">Volver</span>
    </button>
  );
}

export default BotonVolver;
