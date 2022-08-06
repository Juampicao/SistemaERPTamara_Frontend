import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import Spiner from "../../atoms/Spiner";
import CuadroEstadisticas from "./CuadroEstadisticas";
import ContenedorSeleccionados from "./ContenedorSeleccionados";

import ChartGastosCategorias from "../dashboard/porFecha/ChartGastosCategorias";
import useEstadisticas from "../../../hooks/useEstadisticas";

const SeleccionadoGastos = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    montoTotalGastosProveedores,
    montoTotalGastosVarios,
    montoTotalGastosComida,
    montoTotalGastosInventario,
    getEstadisticasGastos,
  } = useEstadisticas();

  useEffect(() => {
    getEstadisticasGastos();
  }, []);

  return (
    <div>
      <h1 className="font-bold capitalize text-xl my-2">General</h1>

      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorSeleccionados>
          <ChartGastosCategorias />
          <CuadroEstadisticas
            tittle="Proveedor"
            value={montoTotalGastosProveedores}
          />
          <CuadroEstadisticas tittle="Comida" value={montoTotalGastosComida} />
          <CuadroEstadisticas tittle="Varios" value={montoTotalGastosVarios} />
          <CuadroEstadisticas
            tittle="Inventario"
            value={montoTotalGastosInventario}
          />
        </ContenedorSeleccionados>
      )}
    </div>
  );
};

export default SeleccionadoGastos;
