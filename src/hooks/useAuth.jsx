import { useContext } from "react";
import AuthContext, { AuthProvider } from "../contexts/AuthProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
