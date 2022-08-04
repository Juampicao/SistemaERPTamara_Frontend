import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";

import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import MessageModal from "../../atoms/MessageModal";
import { formatearFechaCorta, FormatearNumero } from "../../../helpers";

const Gasto = ({ gasto }) => {
  const {
    gastos,
    setGastos,
    setGasto,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
    isOpenSaveModal,
    setIsOpenSaveModal,
    setIsOpenConfirmModal,
    isOpenConfirmModal,
    screenSize,
    setScreenSize,
  } = useContext(StaticContext);
  const navigate = useNavigate();

  // const diccionarioIConos = {
  //   Gastos: IconoGastosVarios,
  //   Proveedor: IconoProveedor,
  //   Comida: IconoComida,
  // };

  const { _id, nombre, valor, cantidad, fecha, notas } = gasto;

  const handleDelete = async (_id) => {
    console.log("Borrando");
    const confirmar = confirm(
      `Desea eliminar el gasto "${gasto.nombre}" y quitar ${gasto.notas} del stock principal?`
    );
    if (confirmar) {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const respuesta = await axios.delete(
          `${import.meta.env.VITE_API_URL}/gastos/${_id}`,
          config
        );
        console.log(respuesta);
        const arrayGastos = gastos.filter((gasto) => gasto._id !== _id);
        setGastos(arrayGastos);
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
        <td className="p-1">
          {/* <img
              // src={diccionarioIConos[gasto.categoria]}
              alt=""
              className="h-12 mx-auto"
            /> */}
          <p>{gasto.categoria}</p>
        </td>
        <td className="capitalize "> {nombre}</td>
        <td className=""> {FormatearNumero(valor)}</td>
        {fecha ? <td>{fecha.slice(0, 10)}</td> : ""}
        <td className=" ">
          <div className=" ">
            <BotonVer value="Ver" onClick={() => navigate(`/gastos/${_id}`)} />
            <BotonEditar
              value="Editar"
              onClick={() => navigate(`/gastos/editar/${_id}`)}
            />
            <BotonEliminar value="Eliminar" onClick={() => handleDelete(_id)} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default Gasto;
