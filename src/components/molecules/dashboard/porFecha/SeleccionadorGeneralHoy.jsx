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

  useEffect(() => {
    getEstadisticasGeneralesHoy();
  }, []);

  return (
    <div>
      {isCargando ? (
        <Spiner />
      ) : (
        // <ContenedorSeleccionados>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-3">
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
        </div>
        // </ContenedorSeleccionados>
      )}
    </div>
  );
};

export default SeleccionadorGeneralHoy;
