import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import CuadroEstadisticas from "./CuadroEstadisticas";
import Spiner from "../../atoms/Spiner";
import ContenedorSeleccionados from "./ContenedorSeleccionados";
import SeleccionadorGeneralHoy from "./porFecha/SeleccionadorGeneralHoy";

import useEstadisticas from "../../../hooks/useEstadisticas";
import SeleccionadorGeneraFechaPersonalizada from "./porFecha/SeleccionadorGeneraFechaPersonalizada";

const SeleccionadoGeneral = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    montoTotalVentas,
    montoTotalGastos,
    utilidadVenta,
    getEstadisticasGenerales,
  } = useEstadisticas();

  const [seleccionarFechaABuscar, setSeleccionarFechaABuscar] = useState();

  useEffect(() => {
    getEstadisticasGenerales();
  }, []);

  const titlesStlyles = "text-lg xs:text-2xl font-black uppercase my-2";

  return (
    <>
      <h1 className="font-bold capitalize text-xl my-2">Hoy</h1>
      <SeleccionadorGeneralHoy />
      <h1 className="font-bold capitalize text-xl my-2">General</h1>

      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorSeleccionados>
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Totales"
            value={montoTotalVentas}
          />
          <CuadroEstadisticas
            tittle="Utilidad"
            tittle2="Ventas"
            value={utilidadVenta}
          />
          <CuadroEstadisticas
            tittle="Gastos"
            tittle2="Totales"
            value={montoTotalGastos}
          />
        </ContenedorSeleccionados>
      )}
      <SeleccionadorGeneraFechaPersonalizada />
    </>
  );
};

export default SeleccionadoGeneral;
