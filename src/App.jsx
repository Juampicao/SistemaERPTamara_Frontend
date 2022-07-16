import { useState, useEffect, createContext, useContext } from "react";

import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { useSearchBox } from "react-instantsearch-hooks";

import Inicio from "./components/pages/Inicio";
import Ventas from "./components/pages/Ventas";
import Gastos from "./components/pages/Gastos";
import Configuraciones from "./components/pages/Configuraciones";
import Login from "./components/pages/Login";
import Layout from "./components/molecules/Layout";

import Editar from "./components/molecules/ventas/Editar";
import VerProducto from "./components/molecules/productos/VerProducto";
import VerVenta from "./components/molecules/ventas/VerVenta";
import VerGasto from "./components/molecules/gastos/VerGasto";
import EditarGasto from "./components/molecules/gastos/EditarGasto";

import NuevoGasto from "./components/molecules/gastos/NuevoGasto";
import { useRef } from "react";
import AuthLayout from "./components/pages/AuthLayout";
import { StaticProvider } from "./contexts/StaticProvider";
import RutaProhibida from "./components/pages/RutaProhibida";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [auth, setAuth] = useState(false);
  console.log(auth);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <StaticProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route
                  index
                  element={<Login auth={auth} setAuth={setAuth} />}
                />
              </Route>

              {auth ? (
                <Route path="/" element={<Layout />}>
                  <Route path="productos" index element={<Inicio />} />
                  <Route path="productos/editar/:id" element={<Editar />} />
                  <Route path="productos/:id" element={<VerProducto />} />
                  <Route path="ventas" element={<Ventas />} />
                  <Route path="ventas/:id" element={<VerVenta />} />
                  <Route path="gastos" element={<Gastos />} />
                  <Route path="gastos/nuevogasto" element={<NuevoGasto />} />
                  <Route path="gastos/:id" element={<VerGasto />} />
                  <Route path="gastos/editar/:id" element={<EditarGasto />} />

                  <Route
                    path="configuraciones"
                    index
                    element={<Configuraciones />}
                  />
                  <Route path="*" element={<h1> Pagina no encontrada. </h1>} />
                </Route>
              ) : (
                // <Route index element={<Login auth={auth} setAuth={setAuth} />} />
                <Route path="*" element={<RutaProhibida />} />
              )}
            </Routes>
          </StaticProvider>
        </AuthProvider>
      </BrowserRouter>
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
