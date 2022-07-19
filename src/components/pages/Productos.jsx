import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../molecules/Header";
import { BotonNuevaVenta, BotonNuevoProducto } from "../atoms/Botones";
import ListadoProductos from "../molecules/productos/ListadoProductos";

const Productos = () => {
  const {
    producto,
    setProducto,
    productos,
    setProductos,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);
  const navigate = useNavigate();

  const {
    id_,
    nombreProducto,
    cantidad,
    precio,
    valorTotal,
    costo,
    categoria,
    fecha,
    notas,
  } = producto;

  return (
    <div className="fade-left">
      <Header title="Inventario" />
      <BotonNuevoProducto
        onClick={() => navigate("/productos/nuevoproducto")}
      />
      <ListadoProductos />
    </div>
  );
};

export default Productos;
