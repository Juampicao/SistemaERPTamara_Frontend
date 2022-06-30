import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { BotonEliminar, BotonEditar } from "../atoms/Botones";

import StaticContext from "../../contexts/StaticProvider";

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
  //     const url = `http://localhost:4000/productos/${id}`;
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
    <tr className="hover:bg-gray-100 border border-slate-500">
      <td className=" p-3">
        <img src={imagen} alt="" className="h-32 mx-auto" />
      </td>
      <td> {nombre}</td>
      <td> {cantidad}</td>
      <td> ${costo}</td>
      <td> ${precio}</td>
      <td className="p-3 space-y-3 ">
        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-600 block mx-auto w-[75px] text-white p-2 uppercase font-bold text-xs"
          onClick={() => navigate(`/productos/${id}`)}
        >
          Ver
        </button>

        <BotonEditar onClick={handleEdit} value="Editar" />

        {/* <BotonEliminar onClick={handleDelete} value="Eliminar" /> */}
        <input
          type="submit"
          className="bg-red-600 hover:bg-red-700 block mx-auto w-[75px] text-white p-2 uppercase font-bold text-xs  cursor-pointer"
          onClick={handleDelete}
          value="Eliminar"
        />
      </td>
    </tr>
  );
};

export default Producto;
