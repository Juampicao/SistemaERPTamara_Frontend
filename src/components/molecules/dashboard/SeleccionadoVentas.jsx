import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import CuadroEstadisticas from "./CuadroEstadisticas";
import Spiner from "../../atoms/Spiner";
import ContenedorSeleccionados from "./ContenedorSeleccionados";

const SeleccionadoVentas = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const [montoTotalVentas, setMontoTotalVentas] = useState(0);
  const [montoTotalVentasEfectivo, setMontoTotalVentasEfectivo] = useState(0);
  const [montoTotalVentasTarjeta, setMontoTotalVentasTarjeta] = useState(0);

  useEffect(() => {
    // LLamar Funciones
    llamarATodasLasFunciones();
    async function llamarATodasLasFunciones() {
      setIsCargando(true);

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
          `${import.meta.env.VITE_API_URL}/estadisticas/ventas`,
          config
        );
        // console.log(respuesta);
        setMontoTotalVentas(respuesta.data.montoTotalVentas);
        setMontoTotalVentasEfectivo(respuesta.data.montoTotalVentasEfectivo);
        setMontoTotalVentasTarjeta(respuesta.data.montoTotalVentasTarjeta);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(false);
    }
  }, []);

  return (
    <>
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
