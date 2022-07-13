import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";

import IconoProveedor from "../../../img/IconoProveedor.png";
import IconoGastosVarios from "../../../img/IconoGastosVarios.png";
import IconoComida from "../../../img/IconoComida.png";
import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import { ModalEliminado, ModalError } from "../../atoms/ModalNotificacion";
import MessageModal from "../../atoms/MessageModal";
import { formatearFecha } from "../../../helpers";

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
  } = useContext(StaticContext);
  const navigate = useNavigate();

  const diccionarioIConos = {
    Gastos: IconoGastosVarios,
    Proveedor: IconoProveedor,
    Comida: IconoComida,
  };

  const { _id, nombre, valor, cantidad, fecha } = gasto;

  const handleDelete = async (_id) => {
    console.log("Borrando");
    try {
      const respuesta = await axios.delete(
        `${import.meta.env.VITE_API_URL}/gastos//${_id}`
      );
      console.log(respuesta);
      // const arrayGastos = gastos.filter((gasto) => gasto._id !== _id);
      // // setGastos(arrayGastos);
      setIsOpenDeleteModal(!isOpenDeleteModal);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(!isOpenErrorModal);
    }
  };

  return (
    <>
      <tr className="hover:bg-gray-300 ">
        <td className=" p-3">
          <img
            src={diccionarioIConos[gasto.categoria]}
            alt=""
            className="h-12 mx-auto"
          />
        </td>
        <td> {nombre}</td>
        <td> ${valor}</td>
        <td>{fecha.substr(0, 10)}</td>

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

      {isOpenConfirmModal ? (
        <MessageModal
          buttonLabel="Eliminar"
          buttonLabel2="Cancelar"
          titleModal="¿Seguro deseas eliminarlo?"
          onClick={handleDeleteModal}
        >
          <p>Aca pongo lo que quiero?</p>
        </MessageModal>
      ) : (
        ""
      )}

      {isOpenDeleteModal ? (
        <ModalEliminado
          titleModal="¡Eliminado Correctamente!"
          buttonLabel="ir al listado"
          onClick={() => navigate(`/ventas`)}
        />
      ) : (
        ""
      )}
      {isOpenErrorModal ? <ModalError titleModal="Error" /> : " "}
    </>
  );
};

export default Gasto;
