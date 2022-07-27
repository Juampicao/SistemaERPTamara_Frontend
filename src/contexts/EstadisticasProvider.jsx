import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useEstadisticas from "../hooks/useEstadisticas";
import StaticContext from "./StaticProvider";
import axios from "axios";

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  const [estadisticas, setEstadisticas] = useState({});

  const navigate = useNavigate();

  // Declarar Funciones.
    const obtenerCaja = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/caja/62cf04d320fdec269473e073`,
        );
        console.log(respuesta.data.inicioCaja);
        // setInicioCaja(respuesta.data.inicioCaja);
      } catch (error) {
        console.log(error);
      }
  };
  
     const obtenerVentas = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/ventas/62cf04d320fdec269473e073`,
        );
        console.log(respuesta.data.inicioCaja);
        // setInicioCaja(respuesta.data.inicioCaja);
      } catch (error) {
        console.log(error);
      }
    };
  
  
  // Llamar Funciones
  // useEffect(() => {
  //   obtenerCaja();
  //   obtenerVentas();
  // }, [])
  

  return (
    <EstadisticasContext.Provider
      value={{
        estadisticas,
        setEstadisticas,
      }}
    >
      {children}
    </EstadisticasContext.Provider>
  );
};

export { EstadisticasProvider };
export default EstadisticasProvider;
