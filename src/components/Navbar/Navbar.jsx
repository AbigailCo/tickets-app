import React from "react";


import * as C from "../index"; // Importa todos los componentes desde el índice
import { CalendarDays } from "lucide-react";

function Navbar() {
  const getFormattedDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("es-AR"); // Formato dd/mm/aaaa
    const time = now.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${date} ${time}`;
  };
  return (
    <nav className="bg-[#895805] text-white py-3 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden sm:block">
          <span className="text-sm opacity-80">Gestion de mesas</span>
          <p className="flex items-center gap-1 text-xs opacity-80">
            <CalendarDays size={16} />
            Fecha: {getFormattedDateTime()}
          </p>
        </div>
        <C.Logo />
        <C.CerrarSesion />
      </div>
    </nav>
  );
}

export default Navbar;
