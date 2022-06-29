import React, { useState, useEffect, useContext, Children } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Fernet from "../../img/fernet.jpg";

import Header from "../molecules/Header";
import Editar from "../molecules/Editar";
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
import Producto from "../molecules/Producto";

const Inicio = () => {
  const {
    isOpenEdit,
    setIsOpenEdit,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
    isOpenConfirmModal,
    setIsOpenConfirmModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
    productos,
    setProductos,
  } = useContext(StaticContext);

  const navigate = useNavigate();

  const handleDeleteModal = () => {
    console.log("Eliminando..");
    setIsOpenConfirmModal(!isOpenConfirmModal);
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const handleModalClick = () => {
    setIsOpenEdit(!isOpenEdit);
    setIsOpenSaveModal(!isOpenSaveModal);
  };

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/productos`;
        // const url = `${import.meta.env.API_URL}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProductos(resultado);
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
      // setCargando(!cargando);
    };
    obtenerClienteAPI();
  }, []);

  // styles
  const tableStyles =
    "overflow-x-auto mt-5 table-auto shadow-lg bg-white w-full border-black border  text-center";

  return (
    <div>
      <Header title="Listado de Bebidas" />

      <table className={tableStyles}>
        <thead className=" text-black border border-black  ">
          <tr>
            <th className="p-2">Imagen</th>
            <th className="p-2">Producto</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Costo</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Funciones</th>
          </tr>
        </thead>

        <tbody className="">
          {productos.map((producto) => (
            <Producto key={producto.id} producto={producto} />
          ))}

          {/* <tr className="border-b hover:bg-gray-50">
            <td className="p-3  ">
              <div className="flex">
                <input type="image" src={Fernet} className="h-32 mx-auto" />
              </div>
            </td>
            <td className="text-center">Fernet 750</td>
            <td className="p-3">
              <p>
                <span className="text-gray-800 uppercase ">100 </span>
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
          </tr> */}
        </tbody>
      </table>
      {isOpenSaveModal ? (
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
        />
      ) : (
        ""
      )}
      {isOpenErrorModal ? (
        <ModalError titleModal="¡Ops, Error!" buttonLabel="ir al listado" />
      ) : (
        ""
      )}
    </div>
  );
};

export default Inicio;
