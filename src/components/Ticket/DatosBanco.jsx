function DatosBanco() {
  const alias = "tu.alias";
  const banco = "Tu banco";
  const cuenta = "1234567890";
  const cbu = "1234567890123456789012";
  const cuentaTitular = "Nombre del titular";
  const cuentaCuit = "20-12345678-9";
  const cuentaDomicilio = "Calle Falsa 123";

  return (
    <div className="">
    <h2 className="text-gray-800 font-bold text-[13px]">Datos de Pago</h2>
    <p className="text-gray-700 text-[11px]">Alias: {alias}</p>
    <p className="text-gray-700 text-[11px]">Banco: {banco}</p>
    <p className="text-gray-700 text-[11px]">Cuenta: {cuenta}</p>
    <p className="text-gray-700 text-[11px]">CBU: {cbu}</p>
    <p className="text-gray-700 text-[11px]">Titular: {cuentaTitular}</p>
    <p className="text-gray-700 text-[11px]">CUIT: {cuentaCuit}</p>
    <p className="text-gray-700 text-[11px]">Domicilio: {cuentaDomicilio}</p>
  </div>
  );
}

export default DatosBanco;
