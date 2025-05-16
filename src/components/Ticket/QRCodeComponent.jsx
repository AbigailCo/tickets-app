//import QRCode from "react-qr-code";
import QrPago from "../../assets/qr_pago.jpg";
function QRCodeComponent() {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="flex items-center space-x-2">
        <img
          src={QrPago}
          alt="QrPago"
          className="h-24 w-48 object-contain" 
        />
      </div>
    </div>
  );
}

export default QRCodeComponent;
