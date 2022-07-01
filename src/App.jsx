import { useState, useEffect, createContext } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Layout from "./components/molecules/Layout";
import Inicio from "./components/pages/Inicio";
import Ventas from "./components/pages/Ventas";
import Configuraciones from "./components/pages/Configuraciones";
import Editar from "./components/molecules/Editar";

import { StaticProvider } from "./contexts/StaticProvider";
import VerProducto from "./components/molecules/VerProducto";
import VerVenta from "./components/molecules/VerVenta";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const Productos = () => {
    return (
      <>
        <h1> Prodductos </h1>
        <Outlet />
      </>
    );
  };

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
