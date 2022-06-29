import { useState, useEffect, createContext } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import Layout from "./components/molecules/Layout";
import Inicio from "./components/pages/Inicio";
import Ventas from "./components/pages/Ventas";
import { StaticProvider } from "./contexts/StaticProvider";
import Configuraciones from "./components/pages/Configuraciones";

function App() {
  // const { activeMenu, setActiveMenu } = useStateContext(); // ContextProvider

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="App">
      <StaticProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="listado" index element={<Inicio />} />
              <Route path="ventas" index element={<Ventas />} />
              <Route
                path="configuraciones"
                index
                element={<Configuraciones />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </StaticProvider>
    </div>
  );
}

export default App;
