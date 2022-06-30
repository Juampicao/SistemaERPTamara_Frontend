import React from "react";
import CuadroVentas from "../atoms/CuadroVentas";
import Dropdown from "../atoms/Dropdown";

import Header from "../molecules/Header";
// import "tw-elements";

const Ventas = () => {
  return (
    <div>
      <Header title="Ventas" />
      <p> Pagina en Construccion</p>
      <Dropdown />
      <h1 className="font-black uppercase text-2xl text-end p-3">
        30 de Junio de 2022
      </h1>
      <div className="grid grid-rows space-y-10">
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">Ventas hoy</h3>
          <div className="flex space-x-3 text-center">
            <CuadroVentas title="Cantidad Ventas: " valor="10" className="" />
            <CuadroVentas title="Ganancia neta: " valor="$5930" />
            <CuadroVentas title="Ventas Brutas: " valor="$12040" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">
            Ventas Semana
          </h3>
          <div className="flex space-x-3 text-center">
            <CuadroVentas title="Cantidad Ventas: " valor="54" />
            <CuadroVentas title="Ganancia neta: " valor="$24012" />
            <CuadroVentas title="Ventas Brutas: " valor="$59002" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">Ventas Mes</h3>
          <div className="flex space-x-3 text-center">
            <CuadroVentas title="Cantidad Ventas: " valor="102" />
            <CuadroVentas title="Ganancia neta: " valor="$124032" />
            <CuadroVentas title="Ventas Brutas: " valor="$2402431" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ventas;
