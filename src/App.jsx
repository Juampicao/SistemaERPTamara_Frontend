import { useState, useEffect, createContext, useContext } from "react";
import "./App.css";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { useRef } from "react";
import AuthLayout from "./components/pages/AuthLayout";
import { StaticProvider } from "./contexts/StaticProvider";
import RutaProhibida from "./components/pages/RutaProhibida";
import { AuthProvider } from "./contexts/AuthProvider";

import Configuraciones from "./components/pages/Configuraciones";
import Login from "./components/pages/Login";
import Layout from "./components/molecules/Layout";

import VerProducto from "./components/molecules/productos/VerProducto";

import Gastos from "./components/pages/Gastos";
import VerGasto from "./components/molecules/gastos/VerGasto";
import EditarGasto from "./components/molecules/gastos/EditarGasto";
import NuevoGasto from "./components/molecules/gastos/NuevoGasto";

import Ventas from "../src/components/pages/Ventas";
import EditarVenta from "../src/components/molecules/ventas/EditarVenta";
import NuevaVenta from "../src/components/molecules/ventas/NuevaVenta";
import VerVenta from "../src/components/molecules/ventas/VerVenta";
import Productos from "./components/pages/Productos";
import NuevoProducto from "./components/molecules/productos/NuevoProducto";
import EditarProducto from "./components/molecules/productos/EditarProducto";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <StaticProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<Login />} />
              </Route>

              <Route path="/" element={<Layout />}>
                <Route path="productos" index element={<Productos />} />
                <Route
                  path="productos/nuevoproducto"
                  element={<NuevoProducto />}
                />
                <Route path="productos/:id" element={<VerProducto />} />
                <Route
                  path="productos/editar/:id"
                  element={<EditarProducto />}
                />

                <Route path="ventas" element={<Ventas />} />
                <Route path="ventas/nuevaventa" element={<NuevaVenta />} />
                <Route path="ventas/:id" element={<VerVenta />} />
                <Route path="ventas/editar/:id" element={<EditarVenta />} />

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

              {/* <Route index element={<Login auth={auth} setAuth={setAuth} />} /> */}
              <Route path="*" element={<RutaProhibida />} />
            </Routes>
          </StaticProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

// function App() {
//   useEffect(() => {
//     AOS.init();
//     AOS.refresh();
//   }, []);

//   const [auth, setAuth] = useState(false);
//   console.log(auth);
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <AuthProvider>
//           <StaticProvider>
//             <Routes>
//               <Route path="/" element={<AuthLayout />}>
//                 <Route
//                   index
//                   element={<Login auth={auth} setAuth={setAuth} />}
//                 />
//               </Route>
//               {auth ? (
//               <Route path="/" element={<Layout />}>
//                 <Route path="productos" index element={<Inicio />} />
//                 <Route path="productos/editar/:id" element={<Editar />} />
//                 <Route path="productos/:id" element={<VerProducto />} />
//                 <Route path="ventas" element={<Ventas />} />
//                 <Route path="ventas/:id" element={<VerVenta />} />
//                 <Route path="gastos" element={<Gastos />} />
//                 <Route path="gastos/nuevogasto" element={<NuevoGasto />} />
//                 <Route path="gastos/:id" element={<VerGasto />} />
//                 <Route path="gastos/editar/:id" element={<EditarGasto />} />
//                 <Route
//                   path="configuraciones"
//                   index
//                   element={<Configuraciones />}
//                 />
//                 <Route path="*" element={<h1> Pagina no encontrada. </h1>} />
//               </Route>
//                )
//               : (
//               <Route index element={<Login auth={auth} setAuth={setAuth} />} />
//               <Route path="*" element={<RutaProhibida />} />
//                 )}

//             </Routes>
//           </StaticProvider>
//         </AuthProvider>
//       </BrowserRouter>
//     </div>
//   );
// }
