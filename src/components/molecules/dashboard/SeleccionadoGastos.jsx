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

  useEffect(() => {
    // LLamar Funciones
    llamarATodasLasFunciones();
    async function llamarATodasLasFunciones() {
      setIsCargando(true);

      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/estadisticas/gastos`
        );
        setMontoTotalGastosProveedores(
          respuesta.data.montoTotalGastosProveedores
        );
        setMontoTotalGastosVarios(respuesta.data.montoTotalGastosVarios);
        setMontoTotalGastosComida(respuesta.data.montoTotalGastosComida);
        // console.log(respuesta.data);
      } catch (error) {
        console.log(error);
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
          <CuadroEstadisticas
            tittle="Proveedor"
            value={montoTotalGastosProveedores}
          />
          <CuadroEstadisticas tittle="Comida" value={montoTotalGastosComida} />
          <CuadroEstadisticas tittle="Varios" value={montoTotalGastosVarios} />
          <CuadroEstadisticas tittle="Inventario" value="0" />
        </ContenedorSeleccionados>
      )}
    </div>
  );
};

export default SeleccionadoGastos;
