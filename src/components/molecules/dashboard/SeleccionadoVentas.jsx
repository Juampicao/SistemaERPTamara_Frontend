import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import CuadroEstadisticas from "./CuadroEstadisticas";
import Spiner from "../../atoms/Spiner";
import ContenedorSeleccionados from "./ContenedorSeleccionados";

import ChartVentasMetodoPago from "../dashboard/porFecha/ChartVentasMetodoPago";
import useEstadisticas from "../../../hooks/useEstadisticas";

const SeleccionadoVentas = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    montoTotalVentas,
    montoTotalVentasEfectivo,
    montoTotalVentasTarjeta,
    getEstadisticasGenerales,
    getEstadisticasVentas,
  } = useEstadisticas();

  useEffect(() => {
    getEstadisticasGenerales();
    getEstadisticasVentas();
  }, []);

  return (
    <>
      <h1 className="font-bold capitalize text-xl my-2">General</h1>

      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorSeleccionados>
          <ChartVentasMetodoPago />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Totales"
            value={montoTotalVentas}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Efectivo"
            value={montoTotalVentasEfectivo}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Tarjeta"
            value={montoTotalVentasTarjeta}
          />
        </ContenedorSeleccionados>
      )}
    </>
  );
};

export default SeleccionadoVentas;
