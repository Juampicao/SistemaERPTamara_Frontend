import React, { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import StaticContext from "../../../contexts/StaticProvider";

import IconoProveedor from "../../../img/IconoProveedor.png";
import IconoGastosVarios from "../../../img/IconoGastosVarios.png";
import IconoComida from "../../../img/IconoComida.png";
import { BotonEditar, BotonEliminar, BotonVer } from "../../atoms/Botones";
import { ModalEliminado, ModalError } from "../../atoms/ModalNotificacion";
import MessageModal from "../../atoms/MessageModal";

const Gasto = ({ gasto }) => {
  const {
    gastos,
    setGastos,
    setGasto,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
    setIsOpenConfirmModal,
    isOpenConfirmModal,
    handleModalClick,
    isOpenErrorModal,
    setIsOpenErrorModal,
    // handleDeleteModal,
  } = useContext(StaticContext);
  const navigate = useNavigate();

  const diccionarioIConos = {
    Gastos: IconoGastosVarios,
    Proveedor: IconoProveedor,
    Comida: IconoComida,
  };

  const { id, nombre, valor, cantidad } = gasto;

  // Creando Estado Venta
  //   useEffect(() => {
  //     const obtenerClienteAPI = async () => {
  //       try {
  //         const url = `http://localhost:4000/ventas/${id}`;
  //         const respuesta = await fetch(url);
  //         const resultado = await respuesta.json();
  //         setVenta(resultado);
  //         console.log(resultado);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //       // setCargando(!cargando);
  //     };
  //     obtenerClienteAPI();
  //   }, []);

  const handleDeleteModal = () => {
    console.log("Eliminando..");
    setIsOpenConfirmModal(!isOpenConfirmModal);
    handleDelete(id);
  };

  const handleDelete = async (id) => {
    console.log("Borrando");
    try {
      const url = `http://localhost:4000/gastos/${id}`;
      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      await respuesta.json();

      const arrayGastos = gastos.filter((gasto) => gasto.id !== id);
      setGastos(arrayGastos);
      setIsOpenDeleteModal(!isOpenDeleteModal);
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(!isOpenErrorModal);
    }
  };

  const handleEdit = () => {
    console.log("Editando");
  };
  return (
    <>
      <tr className="hover:bg-gray-100 border border-slate-500">
        <td className=" p-3">
          <img
            src={diccionarioIConos[gasto.categoria]}
            alt=""
            className="h-12 mx-auto"
          />
        </td>

        {/* <td> {id}</td> */}
        <td> {nombre}</td>
        <td> $ {valor}</td>
        <td className="p-2 space-y-3 ">
          <BotonVer value="Ver" onClick={() => navigate(`/gastos/${id}`)} />

          <BotonEditar value="Editar" onClick={handleEdit} />

          <BotonEliminar value="Eliminar" onClick={handleModalClick} />
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