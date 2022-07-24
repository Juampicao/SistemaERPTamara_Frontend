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
    // handleModalClick,
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
    const confirmar = confirm("Deseas eliminar este gasto?");
    if (confirmar) {
      try {
        const respuesta = await axios.delete(
          `${import.meta.env.VITE_API_URL}/gastos//${_id}`
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
            <BotonVer
              value="Ver"
              onClick={() => navigate(`/gastos/${_id}`)}
              // onClick={() => {}}
            />
            <BotonEditar
              value="Editar"
              // onClick={() => {}}
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

{
  /* {screenSize < 800 ? (
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden my-5">
          <div class="bg-white space-y-3 p-4 rounded-lg shadow">
            <div class="flex items-center space-x-2 text-sm">
              <div>
                <a
                  href="#"
                  class="text-blue-500 font-bold hover:underline capitalize"
                >
                  {nombre}
                </a>
              </div>
              <div class="text-gray-500">
                {gasto._id ? fecha : fecha.substr(0, 10)}
              </div>
              <div>
                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
                  Delivered
                </span>
                <img
                  // src={diccionarioIConos[gasto.categoria]}
                  alt=""
                  className="h-12 mx-auto"
                />
                <p>{gasto.categoria}</p>
              </div>
            </div>
            <div class="text-sm text-gray-700">{notas ? notas : ""}</div>
            <div class="text-sm font-medium text-black">
              {FormatearNumero(valor)}
            </div>
          </div>
        </div>
      ) : ( */
}
