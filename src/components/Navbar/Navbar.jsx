import React from "react";
import Logo from "./Logo";
import { CalendarDays } from "lucide-react";

function Navbar() {
  const getFormattedDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("es-AR"); // Formato dd/mm/aaaa
    const time = now.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    }); // Hora:Minutos
    return `${date} ${time}`;
  };
  return (
    <nav className="bg-[#895805] text-white py-3 shadow-md">
  <div className="container mx-auto flex items-center justify-between">
    {/* Izquierda: Texto del sistema */}
    <span className="text-sm opacity-80">Sistema de Tickets</span>

    {/* Centro: Logo */}
    <Logo />

    {/* Derecha: Fecha */}
    <p className="flex items-center gap-1 text-xs">
      <CalendarDays size={16} />
      Fecha: {getFormattedDateTime()}
    </p>
  </div>
</nav>
  );
}

export default Navbar;
