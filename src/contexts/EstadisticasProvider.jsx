import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useEstadisticas from "../hooks/useEstadisticas";
import StaticContext from "./StaticProvider";
import axios from "axios";

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {

  const [estadisticas, setEstadisticas] = useState({});
  const [montoTotaldeGastos, setMontototaldeGastos] = useState(); 
  const [hola, setHola] = ("hola mundo")

  const navigate = useNavigate();

  // Declarar Funciones.
    const obtenerCaja = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/caja/62cf04d320fdec269473e073`,
        );
        console.log(respuesta.data.inicioCaja);
        setInicioCaja(respuesta.data.inicioCaja);
      } catch (error) {
        console.log(error);
      }
  };

   const obtenerGastos = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/gastos`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        console.log(resultado)
        setMontototaldeGastos(  resultado.montoTotalGastosComida +
            resultado.montoTotalGastosVarios +
            resultado.montoTotalGastosProveedores +
            resultado.montoTotalGastosInventario)
      
      } catch (error) {
        console.log(error);
      }
    };
  
     const obtenerVentas = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/ventas/estadisticas`,
        );
        console.log(respuesta);
        (respuesta.data.inicioCaja);
      } catch (error) {
        console.log(error);
      }
    };
  
  
  // Llamar Funciones
  useEffect(() => {
    // obtenerCaja();
    // obtenerVentas();
    // obtenerGastos();
  }, [])
  // console.log(montoTotaldeGastos)
  

  return (
    <EstadisticasContext.Provider
      value={{
        estadisticas,
        setEstadisticas,
        montoTotaldeGastos,
        hola,
      }}
    >
      {children}


    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
// export default EstadisticasContext;
  export default EstadisticasProvider
