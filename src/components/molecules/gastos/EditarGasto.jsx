import FormularioGasto from "./FormularioGasto";
import { Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Header from "../Header";
import { BotonAzulClasico } from "../../../helpers/colores";

const EditarGasto = () => {
  const { gasto, setGasto, gastos } = useContext(StaticContext);
  const { id } = useParams();

  const navigate = useNavigate();

  // // Llamado a la base de datos
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/gastos/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setGasto(resultado);
        console.log(gasto);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
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
