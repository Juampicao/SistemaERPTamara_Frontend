import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../molecules/Header";
import { BotonNuevaVenta } from "../atoms/Botones";
import ListadoVentas from "../molecules/ventas/ListadoVentas";

import Busqueda from "../atoms/Busqueda";
import BarraSearch from "../atoms/BarraSearch";

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
      <div className="flex gap-x-3">
        <BotonNuevaVenta onClick={() => navigate("/ventas/nuevaventa")} />
        <BarraSearch
          onClick={handleBuscador}
          placeholder="Buscar una venta.."
        />
      </div>

      <Busqueda />
      <ListadoVentas />
    </div>
  );
};

export default Ventas;
