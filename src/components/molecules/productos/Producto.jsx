import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import { BotonEliminar, BotonEditar, BotonVer } from "../../atoms/Botones";

import StaticContext from "../../../contexts/StaticProvider";
import { formatearFechaCorta, FormatearNumero } from "../../../helpers";

const Producto = ({ producto }) => {
  const {
    productos,
    setProductos,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenDeleteModal,
    setIsOpenDeleteModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);

  const navigate = useNavigate();

  const {
    _id,
    nombreProducto,
    cantidad,
    precio,
    costo,
    categoria,
    fecha,
    notas,
  } = producto;

  const handleDelete = async (id) => {
    // const confirmar = confirm("¿Deseas eliminar este cliente?");
    setIsOpenConfirmModal(!isOpenConfirmModal);

    try {
      const url = `${import.meta.env.VITE_API_URL}/productos/${id}`;

      const respuesta = await fetch(url, {
        method: "DELETE",
      });
      await respuesta.json();
      console.log("Eliminando");
      const arrayProductos = clientes.filter(
        (producto) => producto._id !== _id
      );
      setProductos(arrayProductos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <tr className="hover:bg-gray-200 border ">
      {/* <td className=" p-3">
        <img src={imagen} alt="" className="max-h-16 mx-auto" />
      </td> */}
      <td> {nombreProducto}</td>
      <td> {cantidad}u.</td>
      <td> {FormatearNumero(costo)}</td>
      <td> {FormatearNumero(precio)}</td>
      <td> {formatearFechaCorta(fecha)}</td>
      <td className="p-3 space-y-3 ">
        <div className=" ">
          <BotonVer value="Ver" onClick={() => navigate(`/productos/${_id}`)} />
          <BotonEditar
            value="Editar"
            onClick={() => navigate(`/productos/editar/${_id}`)}
          />
          <BotonEliminar value="Eliminar" onClick={() => handleDelete(_id)} />
        </div>
      </td>
    </tr>
  );
};

export default Producto;
