import { useState, useEffect } from "react";
import { CircleX } from "lucide-react";
import { db } from '../../firebase/firebase'; // tu config de firebase
import { doc, setDoc, deleteDoc, updateDoc, arrayUnion, getDoc, onSnapshot, collection } from "firebase/firestore";


// import "./App.css";

import * as C from "../../components";

function AppMozo() {
  const [mesas, setMesas] = useState([]);
  const [mesaSeleccionada, setMesaSeleccionada] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("mesas")) || [];
    //  console.log("Mesas cargadas desde localStorage:", stored);
    setMesas(stored);
    if (stored.length > 0) {
      setMesaSeleccionada(stored[0]);
    }
  }, []);
     useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "mesas"), (snapshot) => {
      const mesasActualizadas = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMesas(mesasActualizadas);
    });
  
    return () => unsubscribe(); // limpiar el listener al desmontar
  }, []);

  const actualizarMesas = (nuevasMesas) => {
    setMesas(nuevasMesas);
    localStorage.setItem("mesas", JSON.stringify(nuevasMesas));
  };

  const handleNuevaMesa = async (nuevaMesa) => {
    const ref = doc(db, "mesas", nuevaMesa.id.toString());
    await setDoc(ref, { ...nuevaMesa, productos: [] }); // crea mesa vacía

    const nuevasMesas = [...mesas, nuevaMesa];
    actualizarMesas(nuevasMesas);
    setMesaSeleccionada(nuevaMesa);
  };

  const addProduct = async (product) => {
    if (!mesaSeleccionada) return;

    const ref = doc(db, "mesas", mesaSeleccionada.id.toString());
    await updateDoc(ref, {
      productos: arrayUnion(product),
    });

    // Luego actualizás localmente también
    const productosActualizados = [
      ...(mesaSeleccionada.productos || []),
      product,
    ];
    const nuevasMesas = mesas.map((mesa) =>
      mesa.id === mesaSeleccionada.id
        ? { ...mesa, productos: productosActualizados }
        : mesa
    );

    actualizarMesas(nuevasMesas);
    setMesaSeleccionada({
      ...mesaSeleccionada,
      productos: productosActualizados,
    });
  };

  const removeProduct = async (index) => {
    if (!mesaSeleccionada) return;

    const ref = doc(db, "mesas", mesaSeleccionada.id.toString());
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();
      const productos = data.productos || [];

      productos.splice(index, 1); // eliminás por índice
      await updateDoc(ref, { productos }); // actualizás el array entero

      // también actualizás localmente
      const nuevasMesas = mesas.map((mesa) =>
        mesa.id === mesaSeleccionada.id ? { ...mesa, productos } : mesa
      );

      actualizarMesas(nuevasMesas);
      setMesaSeleccionada({
        ...mesaSeleccionada,
        productos,
      });
    }
  };
  const cerrarMesa = async (idMesa) => {
    try {
      await deleteDoc(doc(db, "mesas", idMesa.toString())); // elimina de Firebase
      const nuevasMesas = mesas.filter(m => m.id !== idMesa);
      actualizarMesas(nuevasMesas); // elimina localmente
      setMesaSeleccionada(null);
    } catch (error) {
      console.error("Error al eliminar mesa:", error);
    }
  };

  return (
    <>
      <C.SeleccionRolModal />
      <C.Navbar />
      <div className="min-h-screen flex justify-center items-start bg-gray-100 p-4">
        <div className="w-full max-w-6xl bg-white p-6 shadow-lg rounded-md">
          <C.CerrarSesion />
          <div className="mb-6">
            <C.MesasManager
              mesas={mesas}
              onNuevaMesa={handleNuevaMesa}
              onSelectMesa={setMesaSeleccionada}
            />
          </div>

          {mesaSeleccionada ? (
            <>

              <h2 className="text-md font-bold mb-4 text-center text-gray-800">
                Detalles de la mesa: {mesaSeleccionada.nombre}
              </h2>
              <button
                onClick={() => cerrarMesa(mesaSeleccionada.id)}
                className="flex items-center gap-1 bg-gray-600 hover:bg-red-500 text-white text-sm px-2 py-1 rounded"
              >
                <CircleX size={16} /> Cerrar mesa
              </button>

              <div className="flex flex-col lg:flex-row gap-6">
                <div className="lg:basis-1/3">
                  <C.ProductForm onAdd={addProduct} />
                </div>

                <div className="lg:basis-1/3">
                  <C.ProductList
                    products={mesaSeleccionada.productos || []}
                    onRemove={removeProduct}
                  />
                </div>
                {/* <div className="lg:basis-1/3">
                  <C.TicketPreview products={mesaSeleccionada.productos || []} />
                </div> */}
              </div>
            </>
          ) : (
            <p className="text-center text-gray-500">
              Selecciona o crea una mesa para empezar.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default AppMozo;
