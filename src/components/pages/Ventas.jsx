import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../molecules/Header";
import { BotonNuevaVenta } from "../atoms/Botones";
import ListadoVentas from "../molecules/ventas/ListadoVentas";

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
      <ListadoVentas />
    </div>
  );
};

export default Ventas;
