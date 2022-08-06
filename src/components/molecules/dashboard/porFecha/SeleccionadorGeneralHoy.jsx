import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../../contexts/StaticProvider";

import CuadroEstadisticas from "./../CuadroEstadisticas";
import Spiner from "../../../atoms/Spiner";
import ContenedorSeleccionados from "./../ContenedorSeleccionados";

import ChartMensualVentas from "../../dashboard/porFecha/ChartMensualVentas";
import useEstadisticas from "../../../../hooks/useEstadisticas";

const SeleccionadorGeneralHoy = () => {
  const { setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    montoCajaActualHoy,
    inicioCajaHoy,
    montoTotalGastosHoy,
    montoTotalVentasHoy,
    utilidadVentasHoy,
    getEstadisticasGeneralesHoy,
  } = useEstadisticas();

  console.log(utilidadVentasHoy);
  useEffect(() => {
    getEstadisticasGeneralesHoy();
  }, []);

  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorSeleccionados>
          <ChartMensualVentas />
          <CuadroEstadisticas
            tittle="Caja"
            tittle2="Actual"
            value={montoCajaActualHoy}
          />
          <CuadroEstadisticas
            tittle="Inicio"
            tittle2="Caja"
            value={inicioCajaHoy}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Totales"
            value={montoTotalVentasHoy}
          />
          <CuadroEstadisticas
            tittle="Utilidad"
            tittle2="Ventas"
            value={utilidadVentasHoy}
          />
          <CuadroEstadisticas
            tittle="Gastos"
            tittle2="Totales"
            value={montoTotalGastosHoy}
          />
        </ContenedorSeleccionados>
      )}
    </div>
  );
};

export default SeleccionadorGeneralHoy;
