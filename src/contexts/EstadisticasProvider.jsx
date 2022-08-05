import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import StaticContext from "./StaticProvider";
import axios from "axios";

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  // const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
  //   useContext(StaticContext);

  // Estadisticas Generales
  const [montoTotalVentas, setMontoTotalVentas] = useState(0);
  const [montoTotalGastos, setMontoTotalGastos] = useState(0);
  const [inicioCaja, setInicioCaja] = useState(0);
  const [montoCajaActual, setMontoCajaActual] = useState(0);

  // Estadisticas Ventas
  const [montoTotalVentasEfectivo, setMontoTotalVentasEfectivo] = useState(0);
  const [montoTotalVentasTarjeta, setMontoTotalVentasTarjeta] = useState(0);
  // Estadisticas Gastos
  const [montoTotalGastosProveedores, setMontoTotalGastosProveedores] =
    useState(0);
  const [montoTotalGastosVarios, setMontoTotalGastosVarios] = useState(0);
  const [montoTotalGastosComida, setMontoTotalGastosComida] = useState(0);
  const [montoTotalGastosInventario, setMontoTotalGastosInventario] =
    useState(0);

  // Estadisticas Inventario

  // Estadisticas por Fecha

  // Datos configuracion & Autenticacion
  const token = localStorage.getItem("token");
  if (!token) return;

  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  // --------------------------------- Funciones --------------------------------- //
  // Get Estadisticas
  async function getEstadisticasGenerales() {
    // setIsCargando(true);
    try {
      const respuesta = await axios.get(
        `${import.meta.env.VITE_API_URL}/estadisticas`,
        config
      );
      setInicioCaja(respuesta.data.valorInicialCaja);
      setMontoTotalGastos(respuesta.data.montoTotalGastos);
      setMontoTotalVentas(respuesta.data.montoTotalVentas);
      setMontoCajaActual(respuesta.data.montoCajaActual);
      // console.log(respuesta);
    } catch (error) {
      console.log(error);
    }
    // setIsCargando(false);
  }

  async function getEstadisticasGastos() {
    //   setIsCargando(true);
    try {
      const respuesta = await axios.get(
        `${import.meta.env.VITE_API_URL}/estadisticas/gastos`,
        config
      );
      setMontoTotalGastosProveedores(
        respuesta.data.montoTotalGastosProveedores
      );
      setMontoTotalGastosVarios(respuesta.data.montoTotalGastosVarios);
      setMontoTotalGastosComida(respuesta.data.montoTotalGastosComida);
      setMontoTotalGastosInventario(respuesta.data.montoTotalGastosInventario);
      // console.log(respuesta.data);
    } catch (error) {
      console.log(error);
    }
    // setIsCargando(false);
  }

  async function getEstadisticasVentas() {
    // setIsCargando(true);
    try {
      const respuesta = await axios.get(
        `${import.meta.env.VITE_API_URL}/estadisticas/ventas`,
        config
      );
      // console.log(respuesta);
      setMontoTotalVentasEfectivo(respuesta.data.montoTotalVentasEfectivo);
      setMontoTotalVentasTarjeta(respuesta.data.montoTotalVentasTarjeta);
    } catch (error) {
      console.log(error);
    }
    // setIsCargando(false);
  }

  return (
    <EstadisticasContext.Provider
      value={{
        montoTotalVentas,
        montoTotalGastos,
        inicioCaja,
        montoCajaActual,
        getEstadisticasGenerales,
        montoTotalGastosProveedores,
        montoTotalGastosVarios,
        montoTotalGastosComida,
        montoTotalGastosInventario,
        getEstadisticasGastos,
        montoTotalVentasEfectivo,
        montoTotalVentasTarjeta,
        getEstadisticasVentas,
      }}
    >
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
// export default EstadisticasContext;
export default EstadisticasContext;
