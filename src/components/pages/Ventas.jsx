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
    producto,
    cantidad,
    valorIndividual,
    valorTotal,
    metodoPago,
    categoria,
    fecha,
    notas,
  } = venta;

  // SetTotalGastos (suma todos los valor de cada gasto)
  // useEffect(() => {
  //   const totalGastado = gastos.reduce(
  //     (total, gasto) => gasto.valor + total,
  //     0
  //   );
  //   setTotalGastos(totalGastado);
  // }, [gastos]);

  return (
    <div className="fade-left">
      <Header title="Ventas" />
      <BotonNuevaVenta onClick={() => navigate("/ventas/nuevaventa")} />
      <div className="flex gap-x-3 items-center my-5">
        <BarraSearch
          onClick={handleBuscador}
          placeholder="Buscar una venta.."
        />
        <Dropdown />
      </div>

      <Busqueda urlDestino={`/ventas/${venta._id}`} />

      <ListadoVentas />
    </div>
  );
};

export default Ventas;
