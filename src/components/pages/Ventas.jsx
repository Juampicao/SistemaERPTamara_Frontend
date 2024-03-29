import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../molecules/Header";
import { BotonNuevaVenta } from "../atoms/Botones";
import ListadoVentas from "../molecules/ventas/ListadoVentas";

import Busqueda from "../atoms/Busqueda";
import BarraSearch from "../atoms/BarraSearch";
import Dropdown from "../atoms/Dropdown";
import ContenedorLayout from "../molecules/ContenedorLayout";

const Ventas = () => {
  const {
    venta,
    setVenta,
    ventas,
    setVentas,
    isOpenErrorModal,
    isOpenModal,
    openModal,
    closeModal,
    handleBuscador,
    buscador,
  } = useContext(StaticContext);
  const navigate = useNavigate();

  const {
    id_,
    _id,
    producto,
    cantidad,
    valorIndividual,
    valorTotal,
    metodoPago,
    categoria,
    fecha,
    notas,
  } = venta;

  return (
    <div>
      <Header title="Ventas" />
      <ContenedorLayout>
        <div className="flex flex-wrap gap-x-3 gap-y-3 py-3 xs:py-5">
          <BotonNuevaVenta onClick={() => navigate("/ventas/nuevaventa")} />
        </div>
        <div className="flex gap-x-3 items-center">
          <BarraSearch
            onClick={handleBuscador}
            placeholder="Buscar una venta.."
          />
          <Dropdown />
        </div>

        {/* <Busqueda urlDestino={`/ventas/${_id}`} /> */}
        <Busqueda urlDestino={`/ventas`} />
        <ListadoVentas />
      </ContenedorLayout>
    </div>
  );
};

export default Ventas;
