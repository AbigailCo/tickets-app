import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import * as C from "../components";
import { Navigate } from "react-router-dom";

function AppRouter() {
  const rol = localStorage.getItem("rol");

  return (
    <Routes>
      {/* Ruta pública que siempre se puede ver */}
      <Route path="/menu" element={<P.Menu />} />

      {/* Si no hay rol y no está en /menu, mostrar selección de rol */}
      {!rol && (
        <Route
          path="*"
          element={<C.SeleccionRolModal />} // o <C.SeleccionRolModal /> si querés modal
        />
      )}

      {/* Si hay rol, redirigir a su ruta */}
      {rol && <Route path="/" element={<Navigate to={`/${rol}`} replace />} />}

      {/* Rutas protegidas */}
      <Route path="/mozo" element={<P.Mozo />} />
      <Route path="/caja" element={<P.Caja />} />
      <Route path="/crud-productos" element={<C.CrudProductos />} />
    </Routes>
  );
}
export default AppRouter;
