import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useEstadisticas from "../hooks/useEstadisticas";
import StaticContext from "./StaticProvider";

const EstadisticasContext = createContext();

const EstadisticasProvider = ({ children }) => {
  const [estadisticas, setEstadisticas] = useState({});

  const navigate = useNavigate();

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
