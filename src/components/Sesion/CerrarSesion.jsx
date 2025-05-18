import { useNavigate } from "react-router-dom";
import { DoorClosed } from 'lucide-react';

export default function CerrarSesion() {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    localStorage.removeItem("rol");
    navigate("/");
  };

  return (
    <button
      onClick={handleCerrarSesion}
      className="flex items-center justify-center gap-1 m-1.5 bg-[#2a1b01] hover:bg-[#af730b] text-white text-sm px-3 py-1.5 rounded transition-all"
    >
      <DoorClosed size={16} />
      <span className="hidden sm:inline">Cerrar sesion</span>
    </button>
  );
}
