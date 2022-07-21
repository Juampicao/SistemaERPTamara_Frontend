import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Gasto from "./Gasto";

import CuadroGastos from "../../atoms/gastos/CuadroGastos";
import ListadoCaja from "./ListadoCaja";

import IconoInicioCaja from "../../../img/iconCaja.png";
import Spiner from "../../atoms/Spiner";

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

  // const diccionarioIConos = {
  //   Gastos: IconoGastosVarios,
  //   Proveedor: IconoProveedor,
  //   Comida: IconoComida,
  // };

  const [montoTotalGastosComida, setMontoTotalGastosComida] = useState();
  const [montoTotalGastosVarios, setMontoTotalGastosVarios] = useState();
  const [montoTotalGastosProveedores, setMontoTotalGastosProveedores] =
    useState();

  const [montoTotalGastos, setMontoTotalGastos] = useState();

  const { _id, nombre, valor, cantidad, fecha } = gasto;

  // Get Base de datos
  useEffect(() => {
    const obtenerGastos = async () => {
      setIsCargando(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/gastos`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        // console.log(resultado);
        // console.log(resultado.arrayGastosComida);
        // console.log(resultado.arrayGastosVarios);
        // console.log(resultado.arrayGastosProveedor);
        setMontoTotalGastosComida(resultado.montoTotalGastosComida);
        setMontoTotalGastosVarios(resultado.montoTotalGastosVarios);
        setMontoTotalGastosProveedores(resultado.montoTotalGastosProveedores);
        // setMontoTotalGastos(resultado.montoTotalGastos);
        // console.log(montoTotalGastos);
        setGastos(resultado.gastos);
        setIsCargando(false);
      } catch (error) {
        console.log(error);
      }
    };
    setTotalValorGastos(0);
    console.log(montoTotalGastosProveedores + montoTotalGastosComida);
    let todosLosGastos =
      montoTotalGastosComida +
      montoTotalGastosProveedores +
      montoTotalGastosVarios;
    console.log(todosLosGastos);
    obtenerGastos();
  }, []);

  // Styles
  const tableStyles =
    // "hidden mt-5 md:block table-auto shadow-lg bg-white w-full text-center border rounded-3xl  ";
    "w-full ";
  const tableStylesPhone = "";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  return (
    <div>
      {isCargando ? <Spiner /> : ""}
      <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center ">
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

      <div>
        <h3
          className="text-2xl font-bold font-mono uppercase"
          data-bs-toggle="tooltip"
          title="Caja Actual = Inicio Caja + Venta Efectivo - Gastos Efectivo"
        >
          Caja y Ventas Efectivo
        </h3>

        <div
          className="flex space-x-3 text-center my-2 scroll-x-auto"
          data-bs-toggle="tooltip"
          title="Caja Actual = Inicio Caja + Venta Efectivo - Gastos Efectivo"
        >
          <CuadroGastos
            img={IconoInicioCaja}
            title="Caja Actual"
            valor={
              inicioCaja +
              montoTotalVentasEfectivo -
              montoTotalGastosVarios -
              montoTotalGastosProveedores -
              montoTotalGastosComida
            }
          />

          <ListadoCaja />
          <CuadroGastos
            img={IconoInicioCaja}
            title="Total de Gastos"
            title2=""
            valor={
              montoTotalGastosVarios +
              montoTotalGastosProveedores +
              montoTotalGastosComida
            }
          />
        </div>

        <h3 className="text-2xl font-bold font-mono uppercase">Gastos Hoy</h3>
        <div className="flex space-x-3 text-center my-2 scroll-x-auto">
          <CuadroGastos
            // img={diccionarioIConos.Comida}
            title="Gastos Comidas"
            valor={montoTotalGastosComida}
          />{" "}
          <CuadroGastos
            // img={diccionarioIConos.Proveedor}
            title="Gastos Proveedores"
            valor={montoTotalGastosProveedores}
          />
          <CuadroGastos
            // img={diccionarioIConos.Gastos}
            title="Gastos"
            title2="Varios"
            valor={montoTotalGastosVarios}
          />
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold font-mono uppercase">
          Gastos Semana
        </h3>

        <div className="flex space-x-3 text-center my-2 scroll-x-auto">
          <CuadroGastos
            // img={diccionarioIConos.Comida}
            title="Gastos Comidas"
            valor={montoTotalGastosComida}
          />{" "}
          <CuadroGastos
            // img={diccionarioIConos.Proveedor}
            title="Gastos Proveedores"
            valor={montoTotalGastosProveedores}
          />
          <CuadroGastos
            // img={diccionarioIConos.Gastos}
            title="Gastos"
            title2="Varios"
            valor={montoTotalGastosVarios}
          />
        </div>
      </div>
    </div>
  );
};

export default ListadoGastos;

//  {
//    screenSize > 800 ? (
//      <div className="overflow-auto rounded-xl  shadow-xl hidden md:block my-5 text-center ">
//        <table className={tableStyles}>
//          <thead className=" bg-white border-b-2 border-gray-200">
//            <tr className="  bg-white">
//              <th className="p-2 ">Categoria</th>
//              <th className="p-2 ">Nombre</th>
//              <th className="p-2">Valor</th>
//              <th className="p-2">Fecha</th>
//              <th className="p-2 ">Funciones</th>
//            </tr>
//          </thead>
//          <tbody className="divide-y divide-gray-200 bg-white">
//            {gastos.length > 0 ? (
//              gastos.map((gasto) => <Gasto key={gasto._id} gasto={gasto} />)
//            ) : (
//              <p className="my-5 text-center">
//                No hay ningun gasto para mostrar
//              </p>
//            )}
//          </tbody>
//        </table>
//      </div>
//    ) : (
//      <>
//        {gastos.length > 0 ? (
//          gastos.map((gasto) => <Gasto key={gasto._id} gasto={gasto} />)
//        ) : (
//          <p className="my-5 text-center">No hay ningun gasto para mostrar</p>
//        )}
//      </>
//    );
//  }
