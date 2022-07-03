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
  BotonEditar,
  BotonNuevoProducto,
  BotonPrimario,
} from "../atoms/Botones";

import { BotonBlancoClasicoSinZoom } from "../../helpers/colores";

import StaticContext from "../../contexts/StaticProvider";
import Producto from "../molecules/Producto";
import Spiner from "../atoms/Spiner";
import Dropdown from "../atoms/Dropdown";
import Dropdown2 from "../atoms/Dropdown2";

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

  const handleNuevoProducto = () => {
    navigate(`/productos/editar/1`);
  };

  function ordenarAlfabeticamente() {
    productos.reverse(function (a, b) {
      return b - a;
    });
  }
  ordenarAlfabeticamente();

  // const numeros = ["Juan", "Agus", "Carlos"];

  // numeros.reverse(function (a, b) {
  //   return b - a;
  // });
  // console.log(numeros);

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
  const linea = <div className="h-[2px] w-full mx-auto bg-slate-500"> </div>;

  return (
    <div>
      <div className="flex p-4 justify-end space-x-3">
        {/* <h3 className="text-2xl text-left	">Inventario</h3> */}
        <BotonNuevoProducto
          value=" Nuevo Producto"
          onClick={handleNuevoProducto}
        />
        <BotonNuevoProducto
          value=" Nueva Venta"
          onClick={handleNuevoProducto}
        />
      </div>
      {linea}
      <Header title="Listado de Bebidas" />

      <div className="flex space-x-3">
        <Dropdown />
        <Dropdown2 />
      </div>
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
