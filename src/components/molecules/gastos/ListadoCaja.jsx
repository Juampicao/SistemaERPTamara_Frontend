import axios from "axios";
import React, { useContext } from "react";
import { useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";

import CuadroGastos from "../../atoms/gastos/CuadroGastos";
import IconoInicioCaja from "../../../img/iconCaja.png";

const ListadoCaja = () => {
  const {
    inicioCaja,
    totalValorGastos,
    setCajaActual,
    screenSize,
    montoTotalVentasEfectivo,
    setMontoTotalVentasEfectivo,
  } = useContext(StaticContext);

  // const [montoTotalVentasEfectivo, setMontoTotalVentasEfectivo] = useState();

  const [arrayVentasEfectivo, setArrayVentasEfectivo] = useState({});

  useEffect(() => {
    const obtenerVentasEfectivo = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/ventas`
        );
        // console.log(respuesta.data.arrayVentasEfectivo);
        setArrayVentasEfectivo(respuesta.data.arrayVentasEfectivo);
        // console.log(respuesta.data.arrayVentasEfectivo);
        setMontoTotalVentasEfectivo(respuesta.data.montoTotalVentasEfectivo);
        console.log(respuesta.data.montoTotalVentasEfectivo);
      } catch (error) {
        console.log(error);
      }
    };
    // setCajaActual();
    obtenerVentasEfectivo();
  }, []);

  return (
    <div>
      <div className="flex gap-x-3 md:gap-x-10">
        {/* <CuadroGastos
          //   img={diccionarioIConos.Comida}
          title="Caja Actual"
          valor={inicioCaja + montoTotalVentasEfectivo}
        /> */}
        <CuadroGastos
          img={IconoInicioCaja}
          title="Ventas Efectivo"
          valor={montoTotalVentasEfectivo}
        />
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
      </div>
    </div>
  );
};

export default ListadoCaja;
