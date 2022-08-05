import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../../contexts/StaticProvider";

import CuadroEstadisticas from "./../CuadroEstadisticas";
import Spiner from "../../../atoms/Spiner";
import ContenedorSeleccionados from "./../ContenedorSeleccionados";

import ChartMensualVentas from "../../dashboard/porFecha/ChartMensualVentas";

const SeleccionadorGeneralHoy = () => {
  const { setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const [montoTotalVentas, setMontoTotalVentas] = useState(0);
  const [montoTotalGastos, setMontoTotalGastos] = useState(0);
  const [inicioCaja, setInicioCaja] = useState(0);
  const [montoCajaActual, setMontoCajaActual] = useState(0);

  useEffect(() => {
    getDatosHoy();
    async function getDatosHoy() {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/estadisticas/hoy`,
          config
        );
        setMontoTotalGastos(respuesta.data.montoTotalGastosHoy);
        setMontoTotalVentas(respuesta.data.montoTotalVentasHoy);
        setInicioCaja(respuesta.data.montoInicioCajasHoy);
        setMontoCajaActual(respuesta.data.montoCajaActualHoy);
        console.log(respuesta.data.montoInicioCajasHoy);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(true);
      }
      setIsCargando(false);
    }
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
            value={montoCajaActual}
          />
          <CuadroEstadisticas
            tittle="Inicio"
            tittle2="Caja"
            value={inicioCaja}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Totales"
            value={montoTotalVentas}
          />
          <CuadroEstadisticas
            tittle="Gastos"
            tittle2="Totales"
            value={montoTotalGastos}
          />
        </ContenedorSeleccionados>
      )}
    </div>
  );
};

export default SeleccionadorGeneralHoy;
