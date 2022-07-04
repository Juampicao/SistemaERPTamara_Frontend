import React, { useContext, useEffect, useState } from "react";
import CuadroGastos from "../atoms/gastos/CuadroGastos";
import ListadoGastos from "../molecules/gastos/ListadoGastos";
import ModalGasto from "../molecules/gastos/ModalGasto";
import Header from "../molecules/Header";

import { BotonPrimario } from "../atoms/Botones";
import CajaEfectivo from "../atoms/CajaEfectivo";

import StaticContext from "../../contexts/StaticProvider";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import { BotonBlancoClasicoSinZoom } from "../../helpers/colores";

const Gastos = () => {
  const { gastos, setGastos, gasto, setGasto, totalGastos, setTotalGastos } =
    useContext(StaticContext);

  function handleTotalGastos(e) {
    setTotalGastos(totalGastos);
    e.preventDefault();
  }

  const { id, nombre, valor, cantidad } = gasto;

  const handleReiniciarTotalGastos = () => {
    setTotalGastos(0);
  };

  // SetTotalGastos (suma todos los valor de cada gasto)
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.valor + total,
      0
    );

    setTotalGastos(totalGastado);
  }, [gastos]);

  return (
    <div>
      <Header title="Gastos" />
      <CajaEfectivo valorCaja={totalGastos} title="Gastos" />

      <div className="py-5 flex space-x-3">
        <ModalGasto
          onClick={() => {
            handleTotalGastos();
          }}
        />

        <BotonPrimario
          value="Reiniciar Gastos"
          Color={BotonBlancoClasicoSinZoom}
          onClick={handleReiniciarTotalGastos}
        />
      </div>
      <ListadoGastos />
      <div className="grid grid-rows space-y-10 my-10">
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">Gastos Hoy</h3>
          <div className="flex space-x-3 text-center my-2">
            <CuadroGastos title="Gastos" valor={totalGastos} />
            <CuadroGastos title="Gastos" valor={totalGastos} />
            <CuadroGastos title="Gastos" valor={totalGastos} />
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
