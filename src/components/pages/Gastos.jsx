import React, { useContext, useState } from "react";
import CuadroGastos from "../atoms/gastos/CuadroGastos";
import ListadoGastos from "../molecules/gastos/ListadoGastos";
import ModalGasto from "../molecules/gastos/ModalGasto";
import Header from "../molecules/Header";

import { BotonSecundario } from "../atoms/Botones";
import CajaEfectivo from "../atoms/CajaEfectivo";

import StaticContext from "../../contexts/StaticProvider";

const Gastos = () => {
  const { gastos, setGastos, gasto, setGasto, totalGastos, setTotalGastos } =
    useContext(StaticContext);

  const handleTotalGastos = (e) => {
    setTotalGastos(totalGastos + 100);
    e.preventDefault();
    // if ([nombre, cantidad, categoria].includes("")) {
    //   setMensaje("Todos los campos son obligatorios");
    //   setTimeout(() => {
    //     setMensaje("");
    //   }, 3000);
    // }
  };

  const handleReiniciarTotalGastos = () => {
    setTotalGastos(0);
  };

  return (
    <div>
      <Header title="Gastos" />
      <CajaEfectivo valorCaja={totalGastos} title="Gastos" />

      <div className="py-5 flex space-x-3">
        <ModalGasto onClick={handleTotalGastos} />
        <BotonSecundario
          onClick={handleReiniciarTotalGastos}
          value="Reiniciar Gastos"
        />
      </div>
      <ListadoGastos />
      <div className="grid grid-rows space-y-10 my-10">
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">Gastos Hoy</h3>
          <div className="flex space-x-3 text-center my-2">
            <CuadroGastos title="Gastos" valor="$9890" />
            <CuadroGastos title="Gastos" valor="$9890" />
            <CuadroGastos title="Gastos" valor="$9890" />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">
            Gastos Semana
          </h3>
          <div className="flex space-x-3 text-center my-2">
            <CuadroGastos title="Gastos" valor="$9890" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastos;
