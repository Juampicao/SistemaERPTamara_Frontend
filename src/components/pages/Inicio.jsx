import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../molecules/Header";
import Fernet from "../../img/fernet.jpg";

import Editar from "../molecules/Editar";
import ModalGuardado from "../atoms/ModalGuardado";

import StaticContext from "../../contexts/StaticProvider";
import ButtonEliminar from "../atoms/ButtonEliminar";
import MessageModal from "../atoms/MessageModal";

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

  const closeModal = () => {
    setIsOpenModal(!isOpenModal);
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
            <td className="p-3">
              <div>
                <input type="image" src={Fernet} className="h-32" />
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

            <td className="p-3">
              <button
                type="button"
                className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
                onClick={() => navigate(`/clientes/${id}`)}
              >
                Ver
              </button>

              <button
                type="button"
                className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                onClick={handleEdit}
              >
                Editar
              </button>

              <ButtonEliminar handleClick={handleDelete} />
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
          handleClickClose={closeModal}
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
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Inicio;
