import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import StaticContext from "./StaticProvider";
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [cargando, setCargando] = useState(true);
  const [token, setToken] = useState();
  const [config, setConfig] = useState({});

  // console.log(token);
  // console.log(config);
  // console.log(auth);

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const tokenActual = localStorage.getItem("token");
      setToken(tokenActual);

      if (!tokenActual) {
        setCargando(false);
        console.log("no hay tokenActual");
        return;
      }
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenActual}`,
        },
      };
      setConfig(config);

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/usuarios/perfil`,
          config
        );
        setAuth(data);
        navigate("/gastos");
      } catch (error) {
        console.log(error);
        setAuth({});
      }
      setCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesionAuth = () => {
    window.localStorage.setItem(`token`, "");
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        cerrarSesionAuth,
        cargando,
        token,
        config,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
