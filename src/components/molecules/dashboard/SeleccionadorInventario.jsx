import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import Spiner from "../../atoms/Spiner";
import CuadroEstadisticas from "./CuadroEstadisticas";
import ContenedorSeleccionados from "./ContenedorSeleccionados";

const SeleccionadorInventario = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  //   useEffect(() => {
  //     // LLamar Funciones
  //     BuscarInventario();
  //     async function BuscarInventario() {
  //       setIsCargando(true);

  //       try {
  //         const token = localStorage.getItem("token");
  //         if (!token) return;

  //         const config = {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${token}`,
  //           },
  //         };
  //         const respuesta = await axios.get(
  //           `${import.meta.env.VITE_API_URL}/estadisticas/inventario`,
  //           config
  //         );

  //         // console.log(respuesta.data);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //       setIsCargando(false);
  //     }
  //   }, []);
  return (
    <div>
      <div>
        <h1 className="font-bold capitalize text-xl my-2">General</h1>

        {isCargando ? (
          <Spiner />
        ) : (
          <ContenedorSeleccionados>
            <CuadroEstadisticas tittle="Cantidad Productos" value="1" />
          </ContenedorSeleccionados>
        )}
      </div>
    </div>
  );
};

export default SeleccionadorInventario;
