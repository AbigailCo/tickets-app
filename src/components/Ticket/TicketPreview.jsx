import QRCodeComponent from './QRCodeComponent';

function TicketPreview({ products }) {
  const total = products.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

   const getFormattedDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString('es-AR'); // Formato dd/mm/aaaa
    const time = now.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' }); // Hora:Minutos
    return `${date} ${time}`;
  };

  return (
    <>
      <div className="print-area">
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h2>Restaurante San Martin</h2>
          <p>Direccion: Calle Falsa 123</p>
          <p>CUIT: 20-12345678-9</p>
          <p>Tel: (123) 456-7890</p>
          <hr />
          <p style={{ marginTop: "8px", fontSize: "12px" }}>
            Fecha: {getFormattedDateTime()}
          </p>
        </div>

        <p><strong>Detalle de la compra</strong></p>
        <ul style={{ marginBottom: "10px" }}>
          {products.map((p, i) => (
            <li key={i}>
              {p.nombre} x{p.cantidad} - ${ (p.precio * p.cantidad).toFixed(2) }
            </li>
          ))}
        </ul>

        <p style={{ textAlign: "right" }}>
          <strong>Total: ${total.toFixed(2)}</strong>
        </p>

        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <QRCodeComponent monto={total} />
        </div>
      </div>

      {/* Este botón debe estar fuera de .print-area */}
      <button
        onClick={() => window.print()}
        className="mt-6 w-full bg-[#895805] text-white py-2 rounded-md hover:bg-[#af730b] transition print:hidden"
      >
        Imprimir Ticket
      </button>
    </>
  );
}

export default TicketPreview;
