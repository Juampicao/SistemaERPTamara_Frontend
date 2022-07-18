import React, { useContext, useEffect, useState } from "react";
import VerGasto from "./VerGasto";
import StaticContext from "../../../contexts/StaticProvider";
import Gasto from "./Gasto";

const ListadoGastos = () => {
  const { gastos, setGastos, gasto, setGasto, screenSize, setScreenSize } =
    useContext(StaticContext);

  const { _id, nombre, valor, cantidad, fecha } = gasto;

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
    // "hidden mt-5 md:block table-auto shadow-lg bg-white w-full text-center border rounded-3xl  ";
    "w-full ";
  const tableStylesPhone = "";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  return (
    <div>
      {screenSize > 800 ? (
        <div className="overflow-auto rounded-xl  shadow-xl hidden md:block my-5 text-center ">
          <table className={tableStyles}>
            <thead className=" bg-white border-b-2 border-gray-200">
              <tr className="  bg-white">
                <th className="p-2 ">Categoria</th>
                <th className="p-2 ">Nombre</th>
                <th className="p-2">Valor</th>
                <th className="p-2">Fecha</th>
                <th className="p-2 ">Funciones</th>
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
      ) : (
        <>
          {gastos.length > 0 ? (
            gastos.map((gasto) => <Gasto key={gasto._id} gasto={gasto} />)
          ) : (
            <p className="my-5 text-center">No hay ningun gasto para mostrar</p>
          )}
        </>
      )}
    </div>
  );
};

export default ListadoGastos;

{
  /* <table className={tableStylesPhone}>
    <thead className=" border-b-2 border-slate-100 ">
      <tr className="  ">
        <th className="p-2 ">Categoria</th>
        <th className="p-2 ">Nombre</th>
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
  </tbody> */
}
{
  /* </table> */
}
