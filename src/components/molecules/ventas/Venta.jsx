import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";

import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import { formatearFechaCorta, FormatearNumero } from "../../../helpers";

const Venta = ({ venta }) => {
  const {
    ventas,
    setVentas,
    screenSize,
    setScreenSize,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);
  const navigate = useNavigate();
  const {
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

  const handleDelete = async (_id) => {
    console.log("Borrando");
    const confirmar = confirm("Deseas eliminar esta venta?");
    if (confirmar) {
      try {
        const respuesta = await axios.delete(
          `${import.meta.env.VITE_API_URL}/ventas/${_id}`
        );
        console.log(respuesta);
        const arrayventas = ventas.filter((venta) => venta._id !== _id);
        setVentas(arrayventas);
        setIsOpenDeleteModal(!isOpenDeleteModal);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(!isOpenErrorModal);
      }
    }
  };
  return (
    <>
      <tr className="hover:bg-gray-300">
        <td className="capitalize"> {producto}</td>
        <td className="capitalize "> {cantidad}</td>

        <td className="p-3"> {FormatearNumero(valorIndividual)}</td>
        <td className=""> {FormatearNumero(valorTotal)}</td>

        {/* <td> {formatearFechaCorta(fecha)}</td> */}
        {fecha ? <td>{fecha.slice(0, 10)}</td> : ""}

        <td className=" ">
          <div className=" ">
            <BotonVer value="Ver" onClick={() => navigate(`/ventas/${_id}`)} />
            <BotonEditar
              value="Editar"
              onClick={() => navigate(`/ventas/editar/${_id}`)}
            />
            <BotonEliminar value="Eliminar" onClick={() => handleDelete(_id)} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Venta;
