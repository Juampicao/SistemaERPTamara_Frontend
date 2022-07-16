import React from "react";
import { Outlet, Link } from "react-router-dom";
import Login from "./Login";
const RutaProhibida = () => {
  return (
    <div
      data-aos="fade-right"
      className="bg-gradient-to-r from-cyan-900 to-blue-500 h-screen"
    >
      <main className="mx-auto p-5 md:flex md:justify-center">
        <div className=" mx-auto pt-10 w-4/5 md:w-2/4 lg:1/3 text-white text-2xl ">
          <p className=""> No tienes acceso a esta pagina.</p>
          <p className="mt-10 underline underline-offset-2">
            {" "}
            <Link to="/">Ingresa sesión.</Link>
          </p>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default RutaProhibida;
