import { useNavigate } from "react-router-dom";
import { BookMarked } from 'lucide-react';

export default function CerrarSesion() {
  const navigate = useNavigate();

  const handleCrudProductos = () => {
   // localStorage.removeItem("rol");
    navigate("/crud-productos");
  };

  return (
    <button
      onClick={handleCrudProductos}
      className="flex items-center justify-center gap-1 m-1.5 bg-[#2a1b01] hover:bg-[#af730b] text-white text-sm px-3 py-1.5 rounded transition-all"
    >
      <BookMarked size={16} />
      <span className="hidden sm:inline">Administrar productos</span>
    </button>
  );
}
