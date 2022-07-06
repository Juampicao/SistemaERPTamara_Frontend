import React, { useContext, useEffect, useState } from "react";
import VerGasto from "./VerGasto";
import StaticContext from "../../../contexts/StaticProvider";

import Gasto from "./Gasto";

const ListadoGastos = () => {
  const { gastos, setGastos, gasto, setGasto } = useContext(StaticContext);
  // Get Base de datos
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/gastos`;
        // const url = `${import.meta.env.API_URL}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setGastos(resultado);
        // console.log(resultado);
      } catch (error) {
        console.log(error);
      }
      // setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);

  // Styles
  const tableStyles =
    "overflow-x-auto mt-5 table-auto shadow-lg bg-white w-full border-black border  text-center";
  const linea = <div className="h-[2px] w-full mx-auto bg-slate-500"> </div>;

  return (
    <div>
      <table className={tableStyles}>
        <thead className=" text-black border border-black  ">
          <tr>
            <th className="p-2">Categoria</th>

            {/* <th className="p-2">ID</th> */}
            <th className="p-2">Nombre</th>
            <th className="p-2">Valor</th>
            <th className="p-2">Fecha</th>

            <th className="p-2">Funciones</th>
          </tr>
        </thead>
        <tbody className="">
          {gastos.map((gasto) => (
            <Gasto key={gasto.id} gasto={gasto} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoGastos;
