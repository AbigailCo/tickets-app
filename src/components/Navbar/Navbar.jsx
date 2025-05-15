import React from 'react';
import Logo from './Logo';

function Navbar() {
  return (
    <nav className="bg-[#895805] text-white p-4 shadow-md flex justify-between items-center">
      
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        {/* <h1 className="text-xl font-semibold tracking-wide">Restaurante San Martin</h1> */}
        <span className="text-sm opacity-80">Sistema de Tickets</span>
      </div>
    </nav>
  );
}

export default Navbar;
