import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../molecules/Header";
import { BotonNuevaVenta, BotonNuevoProducto } from "../atoms/Botones";
import ListadoProductos from "../molecules/productos/ListadoProductos";
import Busqueda from "../atoms/Busqueda";
import BarraSearch from "../atoms/BarraSearch";

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
    handleBuscador,
    buscador,
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
      <div className="flex gap-x-3">
        <BotonNuevoProducto
          onClick={() => navigate("/productos/nuevoproducto")}
        />
        <BarraSearch
          onClick={handleBuscador}
          placeholder="Buscar un producto.."
        />
      </div>
      <ListadoProductos />
    </div>
  );
};

export default Productos;
