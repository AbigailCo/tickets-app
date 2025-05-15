import QRCode from "react-qr-code";

function QRCodeComponent({ monto }) {
  const alias = "abigail.corrales";
  const url = `https://uala.link/m/${alias}?amount=${monto}`;

  return (
    <div className="flex flex-col items-center p-4">
      <QRCode value={url} size={128} />
      <p className="mt-2 text-gray-700 font-semibold">Escanea para pagar</p>
    </div>
  );
}

export default QRCodeComponent;
