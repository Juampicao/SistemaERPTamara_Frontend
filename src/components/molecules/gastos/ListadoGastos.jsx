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
        const url = `${import.meta.env.VITE_API_URL}/gastos`;
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
    "overflow-x-auto  mt-5 table-auto shadow-lg bg-white w-full text-center border rounded-3xl  ";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  return (
    <div>
      <table className={tableStyles}>
        <thead className=" overflow-x-auto border-b-2 border-slate-100">
          <tr className="  ">
            <th className="p-2 ">Categoria</th>
            <th className="p-2">Nombre</th>
            <th className="p-2">Valor</th>
            <th className="p-2">Fecha</th>
            <th className="p-2 ">Funciones</th>
          </tr>
        </thead>
        <tbody className="">
          {gastos.map((gasto) => (
            <Gasto key={gasto._id} gasto={gasto} />
          ))}
        </tbody>
        {/* <tbody>
          {gastos.length > 0
            ? gastos.map((gasto) => <Gasto key={gasto.id} gasto={gasto} />)
            : "No hay ningun gasto para mostrar"}
        </tbody> */}
      </table>
    </div>
  );
};

export default ListadoGastos;
