import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { BotonEliminar, BotonEditar, BotonVer } from "../../atoms/Botones";

import StaticContext from "../../../contexts/StaticProvider";

const Producto = ({ producto }) => {
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

  const {
    id,
    imagen,
    nombre,
    cantidad,
    costo,
    precio,
    categoria,
    descripcion,
  } = producto;

  const handleEdit = () => {
    console.log("Editando");
    setIsOpenEdit(!isOpenEdit);
    navigate(`/productos/editar/${id}`);
  };

  const handleDelete = () => {
    console.log(`Eliminando el: ${id}`);
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  // const handleDelete = async (id) => {
  //   // const confirmar = confirm("¿Deseas eliminar este cliente?");
  //   setIsOpenConfirmModal(!isOpenConfirmModal);

  //   try {
  // const url = `${import.meta.env.VITE_API_URL}/productos/${id}`;

  //     const respuesta = await fetch(url, {
  //       method: "DELETE",
  //     });
  //     await respuesta.json();
  //     console.log("Eliminando");
  //     // const arrayClientes = clientes.filter((cliente) => cliente.id !== id);
  //     // setClientes(arrayClientes);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <tr className="hover:bg-gray-200 border ">
      <td className=" p-3">
        <img src={imagen} alt="" className="max-h-16 mx-auto" />
      </td>
      <td> {nombre}</td>
      <td> {cantidad}</td>
      <td> ${costo}</td>
      <td> ${precio}</td>
      <td className="p-3 space-y-3 ">
        <div className="flex">
          <BotonVer value="Ver" onClick={() => navigate(`/productos/${id}`)} />

          <BotonEditar onClick={handleEdit} value="Editar" />

          <BotonEliminar onClick={handleDelete} value="Eliminar" />
        </div>
      </td>
    </tr>
  );
};

export default Producto;
