import { useNavigate } from "react-router-dom";

export default function CerrarSesion() {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    localStorage.removeItem("rol");
    navigate("/");
  };

  return (
    <button
      onClick={handleCerrarSesion}
      className="bg-red-400 text-white px-2 rounded hover:bg-red-500 transition"
    >
      Cerrar sesion
    </button>
  );
}
