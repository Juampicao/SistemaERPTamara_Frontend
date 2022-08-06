import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import CuadroEstadisticas from "./CuadroEstadisticas";
import Spiner from "../../atoms/Spiner";
import ContenedorSeleccionados from "./ContenedorSeleccionados";
import SeleccionadorGeneralHoy from "./porFecha/SeleccionadorGeneralHoy";

import useEstadisticas from "../../../hooks/useEstadisticas";

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

  const handleVerEstadisticasPorFecha = (e) => {
    e.preventDefault();
    console.log(seleccionarFechaABuscar);
    // async function getEstadisticasGenerales() {
    //   // setIsCargando(true);
    //   try {
    //     const token = localStorage.getItem("token");
    //     if (!token) return;

    //     const config = {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${token}`,
    //       },
    //     };
    //     const respuesta = await axios.post(
    //       `${import.meta.env.VITE_API_URL}/estadisticas`,
    //       config
    //     );
    //     console.log(respuesta);
    //   } catch (error) {
    //     console.log(error);
    //   }
    //   // setIsCargando(false);
    // }
  };

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
          <h1 className="font-bold capitalize text-xl my-2">
            Buscar por fecha
          </h1>
          <form action="submit" onSubmit={handleVerEstadisticasPorFecha}>
            <input
              type="date"
              value={seleccionarFechaABuscar}
              onChange={(e) => setSeleccionarFechaABuscar(e.target.value)}
              name=""
              id=""
              className="p-2 rounded-xl"
            />
            <input
              type="submit"
              value="Actualizar"
              className="bg-black text-white rounded-xl px-3 py-1 ml-2"
            />
          </form>
        </ContenedorSeleccionados>
      )}
    </>
  );
};

export default SeleccionadoGeneral;
