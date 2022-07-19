import React from "react";
import FormularioProducto from "./FormularioProducto";
import axios from "axios";

import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Header from "../Header";
import StaticContext from "../../../contexts/StaticProvider";

const EditarProducto = () => {
  const { producto, setProducto } = useContext(StaticContext);
  const { id } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Llamado a la base de datos
  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/productos/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProducto(resultado);
        console.log(producto);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerProductos();
  }, []);
  return (
    <div data-aos="fade-left">
      <Header
        title={
          urlActual.includes("nuevoproducto")
            ? "Editar Producto "
            : "Agregar Producto"
        }
      />
      <FormularioProducto />
    </div>
  );
};

export default EditarProducto;