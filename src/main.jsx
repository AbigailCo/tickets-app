
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import CargarProductos from "./data/CargarProductos";


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/*<CargarProductos/>*/}
    <AppRouter />
  </BrowserRouter>
);

