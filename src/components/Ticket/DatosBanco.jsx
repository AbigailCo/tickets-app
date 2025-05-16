function DatosBanco() {
  const alias = "restosanmartin";
  const banco = "Naranja X";
  //const cuenta = "1234567890";
  const cbu = "4530000800018093760370";
  const cuentaTitular = "Ludmila Milena Escobar";
  const cuentaCuit = "27-41843622-6";
  const cuentaDomicilio = "Sargento Cabral 300, Yapeyu Ctes";

  return (
    <div className="">
    <h2 className="text-gray-800 font-bold text-[13px]">Datos de Pago</h2>
    <p className="text-gray-700 text-[11px]">Alias: {alias}</p>
    <p className="text-gray-700 text-[11px]">Banco: {banco}</p>
   {/* <p className="text-gray-700 text-[11px]">Cuenta: {cuenta}</p>*/}
    <p className="text-gray-700 text-[11px]">CBU: {cbu}</p>
    <p className="text-gray-700 text-[11px]">Titular: {cuentaTitular}</p>
    <p className="text-gray-700 text-[11px]">CUIL: {cuentaCuit}</p>
    <p className="text-gray-700 text-[11px]">Domicilio: {cuentaDomicilio}</p>
  </div>
  );
}

export default DatosBanco;
