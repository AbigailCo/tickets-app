import { DatosBanco, QRCodeComponent } from "../index";
//import html2pdf from "html2pdf.js";
import { ReceiptText } from "lucide-react";
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
  {
    /*  const handleDownloadPDF = () => {
    console.log("Botón descargar clickeado");
    const now = new Date();
    const date = now.toISOString().replace(/[:.]/g, "-");
    const ticket = document.getElementById("print-area");
    if (!ticket) {
      console.error("No se encontró el área para imprimir");
      return;
    }
    html2pdf().from(ticket).save(`ticket_${date}.pdf`);
  }; */
  }

  return (
    <>
      {/* Área imprimible */}
      <div className="print-area text-sm" id="print-area">
        <div className="text-center mb-2">
          <h2>Restaurante San Martin</h2>
          <p>Dirección: Calle Falsa 123</p>
          <p>CUIT: 20-12345678-9</p>
          <p>Tel: (123) 456-7890</p>
          <hr />
          <p className="mt-2 text-xs">Fecha: {getFormattedDateTime()}</p>
        </div>
  
        <div>
          <p className="font-semibold">Detalle de la compra</p>
          <ul className="mb-2">
            {products.map((p, i) => (
              <li key={i}>
                {p.nombre} x{p.cantidad} - ${(
                  p.precio * p.cantidad
                ).toFixed(2)}
              </li>
            ))}
          </ul>
  
          <p className="text-right font-semibold">
            Total: ${total.toFixed(2)}
          </p>
          <hr />
        </div>
  
        <div className="text-center mt-3">
          <DatosBanco />
        </div>
  
        {/* QR opcional */}
        {/*
        <div className="text-center mt-3">
          <QRCodeComponent monto={total} />
        </div>
        */}
      </div>
  
      {/* Botón de impresión (oculto al imprimir) */}
      <button
        onClick={() => window.print()}
         className="flex items-center justify-center gap-1 mt-4 bg-[#895805] hover:bg-[#af730b] text-white text-sm px-3 py-1.5 rounded transition print:hidden w-fit mx-auto"
      >
        <ReceiptText size={16} />
        Imprimir / Guardar ticket
      </button>
  
      {/* Botón para descargar PDF (opcional) */}
      {/*
      <button
        onClick={handleDownloadPDF}
        className="bg-green-600 text-white px-4 py-2 rounded mt-2"
      >
        Descargar Ticket
      </button>
      */}
    </>
  );
}

export default TicketPreview;
