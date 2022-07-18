import React from "react";
import FormularioVenta from "./FormularioVenta";

import { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../Header";
import StaticContext from "../../../contexts/StaticProvider";

const EditarVenta = () => {
  const { venta, setVenta } = useContext(StaticContext);
  const { id } = useParams();

  const navigate = useNavigate();

  // // Llamado a la base de datos
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/ventas/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setVenta(resultado);
        console.log(gasto);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);
  return (
    <div data-aos="fade-left">
      <Header title={venta?.nombre ? "Editar Venta " : "Agregar Venta"} />

      <FormularioVenta />
    </div>
  );
};

export default EditarVenta;
