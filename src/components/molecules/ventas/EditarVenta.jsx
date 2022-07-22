import React from "react";
import FormularioVenta from "./FormularioVenta";

import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Header from "../Header";
import StaticContext from "../../../contexts/StaticProvider";

const EditarVenta = () => {
  const { venta, setVenta } = useContext(StaticContext);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Llamado a la base de datos
  useEffect(() => {
    const obtenerVentaIndividual = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/ventas/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setVenta(resultado);
        console.log(venta);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerVentaIndividual();
  }, []);
  return (
    <div data-aos="fade-left">
      <Header
        title={
          urlActual.includes("nuevaventa") ? "Agregar Venta " : "Editar Venta"
        }
      />
      <FormularioVenta />
    </div>
  );
};

export default EditarVenta;
