import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";

import CuadroGastos from "../../atoms/gastos/CuadroGastos";
import IconoInicioCaja from "../../../img/iconCaja.png";

const ListadoCaja = () => {
  const {
    gastos,
    setGastos,
    gasto,
    setGasto,
    screenSize,
    setScreenSize,
    isCargando,
    setCajaActual,
    setTotalValorGastos,
    setIsCargando,
    setMontoTotalVentasEfectivo,
    totalValorGastos,
    montoTotalVentasEfectivo,
    inicioCaja,
  } = useContext(StaticContext);

  const [arrayVentasEfectivo, setArrayVentasEfectivo] = useState({});

  useEffect(() => {
    const obtenerVentasEfectivo = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/ventas`
        );

        setArrayVentasEfectivo(respuesta.data.arrayVentasEfectivo);
        setMontoTotalVentasEfectivo(respuesta.data.montoTotalVentasEfectivo);
        console.log(respuesta.data.montoTotalVentasEfectivo);
      } catch (error) {
        console.log(error);
      }
    };
    // setCajaActual();
    obtenerVentasEfectivo();
  }, []);

  const [montoTotalGastosComida, setMontoTotalGastosComida] = useState();
  const [montoTotalGastosVarios, setMontoTotalGastosVarios] = useState();
  const [montoTotalGastosProveedores, setMontoTotalGastosProveedores] =
    useState();
  const [montoTotalGastosInventario, setMontoTotalGastosInventario] =
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
    

        setMontoTotalGastosComida(resultado.montoTotalGastosComida);
        setMontoTotalGastosVarios(resultado.montoTotalGastosVarios);
        setMontoTotalGastosProveedores(resultado.montoTotalGastosProveedores);
        setMontoTotalGastosInventario(resultado.montoTotalGastosInventario);
        setTotalValorGastos(
          resultado.montoTotalGastosComida +
            resultado.montoTotalGastosVarios +
            resultado.montoTotalGastosProveedores +
            resultado.montoTotalGastosInventario
        );
        setGastos(resultado.gastos);
        setIsCargando(false);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerGastos();
  }, []);

  return (
    <div>
   
      <div
        className="justify-between flex flex-wrap gap-y-4 gap-x-5 px-5 my-2  sm:flex sm:scroll-x-auto"
        data-bs-toggle="tooltip"
        title="Caja Actual = Inicio Caja + Ventas Efectivo - Gastos Efectivo"
      >
        <CuadroGastos
          img={IconoInicioCaja}
          title="Caja"
          title2="Actual"
          valor={
            inicioCaja +
            montoTotalVentasEfectivo -
            montoTotalGastosVarios -
            montoTotalGastosProveedores -
            montoTotalGastosComida -
            montoTotalGastosInventario
          }
        />
        <CuadroGastos
          img={inicioCaja}
          title="Inicio"
          title2="Caja"
          valor={inicioCaja}
        />
        {/* Nuevo total gastos */}
        <CuadroGastos title="Total"  title2="Gastos" valor={totalValorGastos} />
        <CuadroGastos
          img={IconoInicioCaja}
          title="Ventas "
          title2="Efectivo"
          valor={montoTotalVentasEfectivo}
        />


      </div>
    </div>
  );
};

export default ListadoCaja;

       {/* {screenSize < 1 ? (
          <ListadoGastos cajaActual={inicioCaja + montoTotalVentasEfectivo} />
        ) : (
          ""
        )} */}
        {/* <CuadroGastos
          //   img={diccionarioIConos.Comida}
          title="Inicio Caja"
          valor={inicioCaja}
        /> */}

        {/* <CuadroGastos
          // img={diccionarioIConos.Gastos}
          title="Total Gastos"
          title2=""
          valor={totalValorGastos}
        /> */}


        
        {/* Ventas Efectivo  */}
        {/* <CuadroGastos
          img={IconoInicioCaja}
          title="Total Gastos"
          title2=""
          valor={
            montoTotalGastosVarios +
            montoTotalGastosProveedores +
            montoTotalGastosComida +
            montoTotalGastosInventario
          }
        /> */}