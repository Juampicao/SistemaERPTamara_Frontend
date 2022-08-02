import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Gasto from "./Gasto";

import CuadroGastos from "../../atoms/gastos/CuadroGastos";
import ListadoCaja from "./ListadoCaja";

import IconoInicioCaja from "../../../img/iconCaja.png";
import Spiner from "../../atoms/Spiner";
import IconoTooltip from "../../../img/iconoExclamacion2.png";
import axios from "axios";

const ListadoGastos = () => {
  const {
    gastos,
    setGastos,
    gasto,
    setGasto,
    screenSize,
    setScreenSize,
    setTotalValorGastos,
    montoTotalVentasEfectivo,
    inicioCaja,
    isCargando,
    setIsCargando,
  } = useContext(StaticContext);

  // const { _id, nombre, valor, cantidad, fecha } = gasto;

  // const diccionarioIConos = {
  //   Gastos: IconoGastosVarios,
  //   Proveedor: IconoProveedor,
  //   Comida: IconoComida,
  // };

  // Get Base de datos
  useEffect(() => {
    const obtenerGastos = async () => {
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
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/gastos`,
          config
        );
        console.log(data);
        setIsCargando(false);
        setGastos(data.gastos);
        // const url = `${import.meta.env.VITE_API_URL}/gastos`;
        // const respuesta = await fetch(url);
        // const resultado = await respuesta.json();

        // setGastos(resultado.gastos);
        // setIsCargando(false);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerGastos();
  }, []);

  // Styles
  const tableStyles = "w-full";
  const tableStylesPhone = "";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  const titlesStlyles = "text-lg xs:text-2xl font-black uppercase my-2";
  const contenedorDivTitulos =
    "justify-between flex flex-wrap gap-y-4 gap-x-5 px-5 my-2  sm:flex sm:scroll-x-auto";
  return (
    <div>
      {isCargando ? <Spiner /> : ""}
      <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center max-w-7xl ">
        <table className={tableStyles}>
          <thead className=" bg-white border-b-2 border-gray-200">
            <tr className="  bg-white">
              <th className="p-2">Categoria</th>
              <th className="p-2">Nombre</th>
              <th className="p-2">Valor</th>
              <th className="p-2">Fecha</th>
              <th className="p-2 flex justify-center ">
                <p>Funciones</p>
                <img
                  src={IconoTooltip}
                  alt=""
                  className="h-5 pt-1 float-left cursor-pointer items-center"
                  data-bs-toggle="tooltip"
                  title="Por el momento no se puede editar ni ver el gasto unico. "
                />
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {gastos.length > 0 ? (
              gastos.map((gasto) => <Gasto key={gasto._id} gasto={gasto} />)
            ) : (
              <p className="my-5 text-center">
                No hay ningun gasto para mostrar
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoGastos;
