import React, { useState, useEffect, useContext, Children } from "react";
import { useNavigate } from "react-router-dom";

import Fernet from "../../img/fernet.jpg";

import Header from "../molecules/Header";
import Editar from "../molecules/Editar";
// import { ModalGuardado } from "../atoms/ModalNotificacion";
import {
  ModalEliminado,
  ModalError,
  ModalGuardado,
} from "../atoms/ModalNotificacion";
import MessageModal from "../atoms/MessageModal";

import {
  BotonEliminar,
  BotonPrincipal,
  BotonSecundario,
  BotonEditar,
} from "../atoms/Botones";

import StaticContext from "../../contexts/StaticProvider";

const Inicio = () => {
  const {
    isOpenEdit,
    setIsOpenEdit,
    isOpenModal,
    setIsOpenModal,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
  } = useContext(StaticContext);

  const navigate = useNavigate();

  const handleEdit = () => {
    console.log("Editando");
    setIsOpenEdit(!isOpenEdit);
  };

  const openModal = () => {
    setIsOpenModal(true);
    setTimeout(() => {
      setIsOpenModal(false);
    }, 3000);
  };

  const handleModalClick = () => {
    console.log("Yendo al listado..");
    // navigate("/listado");
  };

  const handleDelete = () => {
    console.log("Eliminando..");
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };
  return (
    <div>
      <Header title="Listado de Bebidas" />

      <table className="overflow-x-auto mt-5 table-auto shadow bg-white w-full">
        <thead className="bg-indigo-700 text-white">
          <tr>
            <th className="p-2">Imagen</th>
            <th className="p-2">Producto</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Costo</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Funciones</th>s
          </tr>
        </thead>

        <tbody>
          <tr className="border-b hover:bg-gray-50">
            <td className="p-3  ">
              <div className="flex">
                <input type="image" src={Fernet} className="h-32 mx-auto" />
              </div>
            </td>
            <td className="text-center">Fernet</td>
            <td className="p-3">
              <p>
                <span className="text-gray-800 uppercase ">100 </span>
              </p>
              <p>
                {/* <span className="text-gray-800 capitalize text-sm text-slate-400">
                  Unidades
                </span>{" "} */}
              </p>
            </td>
            <td className="p-3"> $500 </td>
            <td className="p-3"> $1000 </td>

            <td className="p-3 space-y-3">
              <button
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
                onClick={() => navigate(`/clientes/${id}`)}
              >
                Ver
              </button>

              <BotonEditar onClick={handleEdit} value="Editar" />

              <BotonEliminar onClick={handleDelete} value="Eliminar" />
            </td>
          </tr>
        </tbody>
      </table>
      {isOpenModal ? (
        <ModalGuardado
          titleModal="Guardado!"
          subtitleModal="Puedes ver los cambios en el Listado."
          buttonLabel="Ir al listado"
          handleClick={handleModalClick}
        />
      ) : (
        ""
      )}
      {isOpenEdit ? <Editar /> : ""}
      {isOpenDeleteModal ? (
        <MessageModal
          buttonLabel="Eliminar"
          buttonLabel2="Cancelar"
          titleModal="¿Seguro deseas eliminarlo?"
          // onClick={()=>()}
        >
          <p>Aca pongo lo que quiero?</p>
        </MessageModal>
      ) : (
        ""
      )}
      {/* <ModalEliminado
        titleModal="¡Eliminado Correctamente!"
        buttonLabel="ir al listado"
      /> */}
      <ModalError titleModal="¡Ops, Error!" buttonLabel="ir al listado" />
    </div>
  );
};

export default Inicio;
