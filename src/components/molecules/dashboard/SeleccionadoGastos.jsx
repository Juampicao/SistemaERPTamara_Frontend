import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import Spiner from "../../atoms/Spiner";
import CuadroEstadisticas from "./CuadroEstadisticas";
import ContenedorSeleccionados from "./ContenedorSeleccionados";

const SeleccionadoGastos = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const [montoTotalGastosProveedores, setMontoTotalGastosProveedores] =
    useState(0);
  const [montoTotalGastosVarios, setMontoTotalGastosVarios] = useState(0);
  const [montoTotalGastosComida, setMontoTotalGastosComida] = useState(0);
  const [montoTotalGastosInventario, setMontoTotalGastosInventario] =
    useState(0);

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
          `${import.meta.env.VITE_API_URL}/estadisticas/gastos`,
          config
        );
        setMontoTotalGastosProveedores(
          respuesta.data.montoTotalGastosProveedores
        );
        setMontoTotalGastosVarios(respuesta.data.montoTotalGastosVarios);
        setMontoTotalGastosComida(respuesta.data.montoTotalGastosComida);
        setMontoTotalGastosInventario(
          respuesta.data.montoTotalGastosInventario
        );
        // console.log(respuesta.data);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(false);
    }
  }, []);

  return (
    <div>
      <h1 className="font-bold capitalize text-xl my-2">General</h1>

      {isCargando ? (
        <Spiner />
      ) : (
        <ContenedorSeleccionados>
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
