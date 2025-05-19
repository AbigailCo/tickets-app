import { useEffect, useState } from "react";
import { db } from "../firebase/firebase"; // tu config
import { addDoc, collection} from "firebase/firestore";
import datosIniciales from "./productos.json"


function CargarProductos() {
  const [cargado, setCargado] = useState(false);

  useEffect(() => {
    const cargarProductos = async () => {
      for (const categoria of datosIniciales) {
        for (const item of categoria.items) {
          await addDoc(collection(db, "productos"), {
            nombre: item.nombre,
            precio: item.precio,
            disponible: true,
            categoria: categoria.categoria,
          });
        }
      }
      setCargado(true);
    };

    if (!cargado) cargarProductos();
  }, [cargado]);

  return (
    <div className="p-4">
      {cargado ? (
        <p className="text-green-600">✅ Productos cargados correctamente</p>
      ) : (
        <p className="text-blue-600">⏳ Cargando productos...</p>
      )}
    </div>
  );
}

export default CargarProductos;