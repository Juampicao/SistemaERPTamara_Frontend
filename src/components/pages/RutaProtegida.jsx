import React from "react";
import { Outlet, Link, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Layout from "../molecules/Layout";
import Dashbord from "./Dashbord";

const RutaProtegida = () => {
  const { auth, cargando } = useAuth();
  console.log(` Desde Ruta Protegida: ${auth}`);
  console.log(` Desde Ruta Protegida: ${cargando}`);

  if (cargando) return `Cargando...`;
  return (
    <div
      data-aos="fade-right"
      className="bg-gradient-to-r from-cyan-900 to-blue-500 h-screen"
    >
      {auth._id ? (
        <Outlet />
      ) : (
        <div>
          {" "}
          <Navigate to="/"> Iniciar Sesion</Navigate>
        </div>
      )}
    </div>
  );
};

export default RutaProtegida;
