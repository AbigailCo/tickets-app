import React from 'react';
import Logo from './Logo';

function Navbar() {
  const getFormattedDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('es-AR'); // Formato dd/mm/aaaa
    const time = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }); // Hora:Minutos
    return `${date} ${time}`;
  };
  return (
    <nav className="bg-[#895805] text-white p-4 shadow-md flex justify-between items-center">
      
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-sm opacity-80">Sistema de Tickets</span>
        <Logo />
        {/* <h1 className="text-xl font-semibold tracking-wide">Restaurante San Martin</h1> */}
        <p style={{ marginTop: "8px", fontSize: "12px" }}>
            Fecha: {getFormattedDateTime()}
          </p>
      </div>
    </nav>
  );
}

export default Navbar;
