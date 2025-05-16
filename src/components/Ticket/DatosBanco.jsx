function DatosBanco() {
  const alias = "tu.alias";
  const banco = "Tu banco";
  const cuenta = "1234567890";
  const cbu = "1234567890123456789012";
  const cuentaTitular = "Nombre del titular";
  const cuentaCuit = "20-12345678-9";
  const cuentaDomicilio = "Calle Falsa 123";

  return (
    <div className="flex flex-col items-start p-1 text-[11px] space-y-[1px] leading-tight">
    <h2 className="text-gray-800 font-bold text-[13px]">Datos de Pago</h2>
    <p className="text-gray-700 font-medium">Alias: {alias}</p>
    <p className="text-gray-700 font-medium">Banco: {banco}</p>
    <p className="text-gray-700 font-medium">Cuenta: {cuenta}</p>
    <p className="text-gray-700 font-medium">CBU: {cbu}</p>
    <p className="text-gray-700 font-medium">Titular: {cuentaTitular}</p>
    <p className="text-gray-700 font-medium">CUIT: {cuentaCuit}</p>
    <p className="text-gray-700 font-medium">Domicilio: {cuentaDomicilio}</p>
  </div>
  );
}

export default DatosBanco;
