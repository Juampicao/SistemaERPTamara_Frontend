import { useState, useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Inicio from "./components/pages/Inicio";
import Ventas from "./components/pages/Ventas";
import Gastos from "./components/pages/Gastos";
import Configuraciones from "./components/pages/Configuraciones";
import Layout from "./components/molecules/Layout";

import Editar from "./components/molecules/ventas/Editar";
import VerProducto from "./components/molecules/productos/VerProducto";
import VerVenta from "./components/molecules/ventas/VerVenta";
import VerGasto from "./components/molecules/gastos/VerGasto";
import EditarGasto from "./components/molecules/gastos/EditarGasto";

import { StaticProvider } from "./contexts/StaticProvider";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <StaticProvider>
        <BrowserRouter>
          <Routes>
            //{" "}
            <Route path="/" element={<Layout />}>
              <Route path="productos" index element={<Inicio />} />
              <Route path="productos/editar/:id" index element={<Editar />} />
              <Route path="productos/:id" index element={<VerProducto />} />
              <Route path="ventas" index element={<Ventas />} />
              <Route path="ventas/:id" index element={<VerVenta />} />
              <Route path="gastos" index element={<Gastos />} />
              <Route path="gastos/:id" index element={<VerGasto />} />
              <Route path="gastos/editar/:id" index element={<EditarGasto />} />

              <Route
                path="configuraciones"
                index
                element={<Configuraciones />}
              />
              <Route path="*" element={<h1> Pagina no encontrada. </h1>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </StaticProvider>
    </div>
  );
}

export default App;

// <Route path="/" element={<Layout />}>
//   <Route path="productos" index element={<Inicio />} />
//   <Route path="editar/:id" index element={<Editar />} />
//   <Route path=":id" index element={<VerProducto />} />
//   <Route path="ventas" index element={<Ventas />} />
//   <Route path="configuraciones" index element={<Configuraciones />} />
// </Route>;
