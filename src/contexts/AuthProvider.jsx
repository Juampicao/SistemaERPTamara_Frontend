import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import StaticContext from "./StaticProvider";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //   const { isCargando, setIsCargando } = useContext(StaticContext);

  const [auth, setAuth] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem("token");
      // console.log(token);
      if (!token) {
        // setCargando(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/usuarios/perfil`,
          config
        );
        console.log(data);
        setAuth(data);
        // navigate('/proyectos')
      } catch (error) {
        setAuth({});
      }

      //   setIsCargando(false);
    };
    autenticarUsuario();
  }, []);

  const cerrarSesionAuth = () => {
    "vamos a cerrar sesion..";
    setAuth({});
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        // cargando,
        cerrarSesionAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
