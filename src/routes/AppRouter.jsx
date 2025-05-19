import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import * as C from "../components";
import { Navigate } from "react-router-dom";

function AppRouter() {
  const rol = localStorage.getItem("rol");

  return (
    <Routes>
      {!rol && <Route path="*" element={<C.SeleccionRolModal />} />}
      {rol && <Route path="/" element={<Navigate to={`/${rol}`} replace />} />}

      <Route path="/mozo" element={<P.Mozo />} />
      <Route path="/caja" element={<P.Caja />} />
      <Route path="/crud-productos" element={<C.CrudProductos />} />
    </Routes>
  );
}
export default AppRouter;