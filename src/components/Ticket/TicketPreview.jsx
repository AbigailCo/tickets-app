import { DatosBanco, QRCodeComponent } from "../index";
//import html2pdf from "html2pdf.js";

function TicketPreview({ products }) {
  const total = products.reduce((acc, p) => acc + p.precio * p.cantidad, 0);

  const getFormattedDateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString("es-AR"); // Formato dd/mm/aaaa
    const time = now.toLocaleTimeString("es-AR", {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${date} ${time}`;
  };
{/*  const handleDownloadPDF = () => {
    console.log("Botón descargar clickeado");
    const now = new Date();
    const date = now.toISOString().replace(/[:.]/g, "-");
    const ticket = document.getElementById("print-area");
    if (!ticket) {
      console.error("No se encontró el área para imprimir");
      return;
    }
    html2pdf().from(ticket).save(`ticket_${date}.pdf`);
  }; */}

  return (
    <>
      <div className="print-area" id="print-area">
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

        <p>
          <strong>Detalle de la compra</strong>
        </p>
        <ul style={{ marginBottom: "10px" }}>
          {products.map((p, i) => (
            <li key={i}>
              {p.nombre} x{p.cantidad} - ${(p.precio * p.cantidad).toFixed(2)}
            </li>
          ))}
        </ul>

        <p style={{ textAlign: "right" }}>
          <strong>Total: ${total.toFixed(2)}</strong>
        </p>
        <hr />
        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <DatosBanco />
        </div>
        {/*<div style={{ textAlign: "center", marginTop: "12px" }}>
          <QRCodeComponent monto={total} />
        </div> */}
      </div>

      <button
        onClick={() => window.print()}
        className="mt-6 w-full bg-[#895805] text-white py-2 rounded-md hover:bg-[#af730b] transition print:hidden"
      >
        Imprimir / Guardar como PDF
      </button>
      {/* <button
        onClick={handleDownloadPDF}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Descargar Ticket
      </button> */}
    </>
  );
}

export default TicketPreview;
