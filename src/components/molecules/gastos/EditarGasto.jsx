import FormularioGasto from "./FormularioGasto";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Header from "../Header";
import { BotonAzulClasico } from "../../../helpers/colores";

import axios from "axios";

const EditarGasto = () => {
  const { gasto, setGasto, gastos } = useContext(StaticContext);
  const { id } = useParams();
  const params = useParams();

  const navigate = useNavigate();

  // Llamado a la base de datos
  useEffect(() => {
    const obtenerGasto = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/gastos/${params.id}`,
          config
        );
        setGasto(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(!isCargando);
    };
    obtenerGasto();
  }, []);
  return (
    <div data-aos="fade-left">
      <Header title={gasto?.nombre ? "Editar Gasto " : "Agregar Gasto"} />
      {/* {gasto?.nombre ? "Editar el gasto:  ${gasto.nombre}" : "Agregar Gasto"} */}

      <FormularioGasto />
    </div>
  );
};

export default EditarGasto;
