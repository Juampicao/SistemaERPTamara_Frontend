import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import StaticContext from "./StaticProvider";
import axios from "axios";

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  // const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
  //   useContext(StaticContext);

  let fechaActual = new Date();

  // Estadisticas Generales
  const [montoTotalVentas, setMontoTotalVentas] = useState(0);
  const [montoTotalGastos, setMontoTotalGastos] = useState(0);
  const [inicioCaja, setInicioCaja] = useState(0);
  const [montoCajaActual, setMontoCajaActual] = useState(0);
  const [utilidadVenta, setUtilidadVenta] = useState(0);

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

  // Estadisticas por Hoy
  const [montoTotalVentasHoy, setMontoTotalVentasHoy] = useState(0);
  const [montoTotalGastosHoy, setMontoTotalGastosHoy] = useState(0);
  const [inicioCajaHoy, setInicioCajaHoy] = useState(0);
  const [montoCajaActualHoy, setMontoCajaActualHoy] = useState(0);
  const [utilidadVentasHoy, setUtilidadVentasHoy] = useState(0);

  // Estadisticas Personalizadas
  const [isCargandoFecha, setIsCargandoFecha] = useState(false);
  const [seleccionarFechaABuscar, setSeleccionarFechaABuscar] =
    useState(fechaActual);
  const [montoTotalVentasPersonalizada, setMontoTotalVentasPersonalizada] =
    useState(0);
  const [
    montoTotalVentasEfectivoPersonalizada,
    setMontoTotalVentasEfectivoPersonalizada,
  ] = useState(0);
  const [
    montoTotalVentasTarjetaPersonalizada,
    setMontoTotalVentasarjetaPersonalizada,
  ] = useState(0);
  const [montoTotalGastosPersonalizada, setMontoTotalGastosPersonalizada] =
    useState(0);
  const [inicioCajaPersonalizada, setInicioCajaPersonalizada] = useState(0);
  const [montoCajaActualPersonalizada, setMontoCajaActualPersonalizada] =
    useState(0);
  const [utilidadVentaPersonalizada, setUtilidadVentaPersonalizada] =
    useState(0);

  // Estadisticas Gastos Personalizados
  const [
    montoTotalGastosProveedoresPersonalizada,
    setMontoTotalGastosProveedoresPersonalizada,
  ] = useState(0);
  const [
    montoTotalGastosVariosPersonalizada,
    setMontoTotalGastosVariosPersonalizada,
  ] = useState(0);
  const [
    montoTotalGastosComidaPersonalizada,
    setMontoTotalGastosComidaPersonalizada,
  ] = useState(0);
  const [
    montoTotalGastosInventarioPersonalizada,
    setMontoTotalGastosInventarioPersonalizada,
  ] = useState(0);

  // Ventas por mes
  const [ventasPorMes, setVentasPorMes] = useState();

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
      setUtilidadVenta(respuesta.data.UtilidadVenta);
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

  // Estadisticas Hoy
  async function getEstadisticasGeneralesHoy() {
    try {
      const respuesta = await axios.get(
        `${import.meta.env.VITE_API_URL}/estadisticas/hoy`,
        config
      );
      setMontoTotalGastosHoy(respuesta.data.montoTotalGastosHoy);
      setMontoTotalVentasHoy(respuesta.data.montoTotalVentasHoy);
      setInicioCajaHoy(respuesta.data.montoInicioCajasHoy);
      setMontoCajaActualHoy(respuesta.data.montoCajaActualHoy);
      setUtilidadVentasHoy(respuesta.data.UtilidadVentasHoy);
      // console.log(respuesta.data.montoInicioCajasHoy);
    } catch (error) {
      console.log(error);
      // setIsOpenErrorModal(true);
    }
    // setIsCargando(false);
  }

  async function getEstadisticasGeneralesPersonalizada() {
    setIsCargandoFecha(true);
    try {
      const respuesta = await axios.post(
        `${import.meta.env.VITE_API_URL}/estadisticas/fechapersonalizada`,
        {
          seleccionarFechaABuscar,
        },
        config
      );
      setMontoTotalVentasPersonalizada(
        respuesta.data.montoTotalVentasPersonalizado
      );
      setUtilidadVentaPersonalizada(respuesta.data.UtilidadVentasPersonalizado);
      setMontoTotalVentasarjetaPersonalizada(
        respuesta.data.montoTotalVentasTarjetaPersonalizado
      );
      setMontoTotalVentasEfectivoPersonalizada(
        respuesta.data.montoTotalVentasEfectivoPersonalizado
      );
      setMontoTotalGastosPersonalizada(
        respuesta.data.montoTotalGastosPersonalizado
      );
      // console.log(respuesta.data);
    } catch (error) {
      console.log(error);
      //  setIsOpenErrorModal(true);
    }
    setIsCargandoFecha(false);
  }

  // Gastos Personalizado
  async function getEstadisticasGastosPersonalizada() {
    // setIsCargandoFecha(true);
    try {
      const respuesta = await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/estadisticas/fechapersonalizada/gastos`,
        {
          seleccionarFechaABuscar,
        },
        config
      );
      setMontoTotalGastosProveedoresPersonalizada(
        respuesta.data.montoTotalGastosProveedoresPersonalizado
      );
      setMontoTotalGastosVariosPersonalizada(
        respuesta.data.montoTotalGastosVariosPersonalizado
      );
      setMontoTotalGastosComidaPersonalizada(
        respuesta.data.montoTotalGastosComidaPersonalizado
      );
      setMontoTotalGastosInventarioPersonalizada(
        respuesta.data.montoTotalGastosInventarioPersonalizado
      );
      // console.log(respuesta.data);
    } catch (error) {
      console.log(error);
      //  setIsOpenErrorModal(true);
    }
    // setIsCargandoFecha(false);
  }

  async function getEstadisticasVentasMensual() {
    // setIsCargandoFecha(true);
    try {
      const respuesta = await axios.post(
        `${import.meta.env.VITE_API_URL}/estadisticas/ventasmensual`,
        {
          seleccionarFechaABuscar,
        },
        config
      );
      setVentasPorMes(respuesta.data);
      console.log(respuesta.data);
    } catch (error) {
      console.log(error);
      //  setIsOpenErrorModal(true);
    }
    // setIsCargandoFecha(false);
  }

  return (
    <EstadisticasContext.Provider
      value={{
        montoTotalVentas,
        montoTotalGastos,
        inicioCaja,
        montoCajaActual,
        utilidadVenta,
        getEstadisticasGenerales,
        montoTotalGastosProveedores,
        montoTotalGastosVarios,
        montoTotalGastosComida,
        montoTotalGastosInventario,
        getEstadisticasGastos,
        montoTotalVentasEfectivo,
        montoTotalVentasTarjeta,
        getEstadisticasVentas,
        montoCajaActualHoy,
        inicioCajaHoy,
        montoTotalGastosHoy,
        montoTotalVentasHoy,
        utilidadVentasHoy,
        getEstadisticasGeneralesHoy,
        montoTotalVentasPersonalizada,
        montoTotalVentasEfectivoPersonalizada,
        montoTotalVentasTarjetaPersonalizada,
        montoTotalGastosPersonalizada,
        utilidadVentaPersonalizada,
        seleccionarFechaABuscar,
        setIsCargandoFecha,
        isCargandoFecha,
        setSeleccionarFechaABuscar,
        getEstadisticasGeneralesPersonalizada,
        montoTotalGastosProveedoresPersonalizada,
        montoTotalGastosVariosPersonalizada,
        montoTotalGastosComidaPersonalizada,
        montoTotalGastosInventarioPersonalizada,
        getEstadisticasGastosPersonalizada,
        ventasPorMes,
        getEstadisticasVentasMensual,
      }}
    >
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
export default EstadisticasContext;
