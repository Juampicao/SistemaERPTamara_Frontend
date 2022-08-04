import React from "react";
import FormularioProducto from "./FormularioProducto";

import { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import Header from "../Header";
import StaticContext from "../../../contexts/StaticProvider";

import axios from "axios";
const EditarProducto = () => {
  const { producto, setProducto } = useContext(StaticContext);
  const { id } = useParams();
  const params = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Llamado a la base de datos
  useEffect(() => {
    const obtenerProducto = async () => {
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
          `${import.meta.env.VITE_API_URL}/productos/${params.id}`,
          config
        );
        setProducto(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerProducto();
  }, []);

  return (
    <div data-aos="fade-left">
      <Header title={producto?._id ? "Editar Producto " : "Agregar Producto"} />
      <FormularioProducto />
    </div>
  );
};

export default EditarProducto;
