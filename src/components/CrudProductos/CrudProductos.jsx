import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";
import * as C from "../../components";

function CrudProductos() {
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    precio: "",
    categoria: "",
    disponible: true,
  });
  const [editId, setEditId] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [nuevaCategoria, setNuevaCategoria] = useState("");
  const [orden, setOrden] = useState("nombre"); // ordenamiento por defecto

  useEffect(() => {
    const q = query(collection(db, "productos"), orderBy(orden));
    const unsub = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProductos(data);

      const categoriasUnicas = [
        ...new Set(data.map((prod) => prod.categoria).filter(Boolean)),
      ];
      setCategorias(categoriasUnicas);
    });

    return () => unsub();
  }, [orden]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const categoriaFinal =
      form.categoria === "otra" ? nuevaCategoria.trim() : form.categoria;

    const payload = {
      nombre: form.nombre,
      precio: parseFloat(form.precio),
      disponible: form.disponible,
      categoria: categoriaFinal,
    };

    if (editId) {
      await updateDoc(doc(db, "productos", editId), payload);
      setEditId(null);
    } else {
      await addDoc(collection(db, "productos"), payload);
    }

    setForm({ nombre: "", precio: "", categoria: "", disponible: true });
    setNuevaCategoria("");
  };

  const handleEdit = (producto) => {
    setForm(producto);
    setEditId(producto.id);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "productos", id));
  };

  return (
    <>
      <C.SeleccionRolModal />
      <C.Navbar />
      <div className="min-h-screen flex justify-center items-start bg-gray-100 p-4 contenedor">
        <div className="p-4 bg-white rounded shadow">
          <C.BotonVolver />
          <h2 className="text-lg font-bold mb-4">Administrar Productos</h2>

          {/* Ordenar por */}
          <div className="mb-4">
            <label className="font-medium mr-2">Ordenar por:</label>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value)}
              className="border px-2 py-1"
            >
              <option value="nombre">Nombre</option>
              <option value="categoria">Categoría</option>
            </select>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-2 mb-4">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="border px-2 py-1 w-full"
            />
            <input
              type="number"
              name="precio"
              placeholder="Precio"
              value={form.precio}
              onChange={handleChange}
              required
              className="border px-2 py-1 w-full"
            />
            <label className="block">
              Categoría:
              <select
                name="categoria"
                value={form.categoria}
                onChange={(e) => {
                  handleChange(e);
                  if (e.target.value !== "otra") setNuevaCategoria("");
                }}
                required
                className="border px-2 py-1 w-full mt-1"
              >
                <option value="">Seleccionar categoría</option>
                {categorias.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
                <option value="otra">Otra...</option>
              </select>
            </label>

            {form.categoria === "otra" && (
              <input
                type="text"
                placeholder="Nueva categoría"
                value={nuevaCategoria}
                onChange={(e) => setNuevaCategoria(e.target.value)}
                className="border px-2 py-1 w-full mt-2"
                required
              />
            )}

            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="disponible"
                checked={form.disponible}
                onChange={handleChange}
              />
              Disponible
            </label>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              {editId ? "Actualizar" : "Agregar"}
            </button>
          </form>

          {/* Lista de productos con scroll */}
          <div className="max-h-96 overflow-y-auto border rounded p-2">
            <ul className="space-y-2">
              {productos.map((p) => (
                <li
                  key={p.id}
                  className="flex justify-between items-center border p-2 rounded"
                >
                  <div>
                    <p className="font-semibold">{p.nombre}</p>
                    <p>
                      ${p.precio} - {p.disponible ? "✅" : "❌"} -{" "}
                      <span className="italic text-sm">{p.categoria}</span>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(p)}
                      className="bg-yellow-400 text-white px-2 py-1 rounded"
                    >
                      Editar
                    </button>
                    <button
                      onClick={() => handleDelete(p.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded"
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default CrudProductos;
