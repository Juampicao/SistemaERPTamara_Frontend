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

  const { id, nombre, cantidad, costo, precio, categoria, descripcion } =
    producto;

  const handleEdit = () => {
    console.log("Editando");
    setIsOpenEdit(!isOpenEdit);
  };

  const handleDelete = () => {
    console.log("Eliminando..");
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  return (
    <tr className="hover:bg-gray-100">
      <td className=" p-3"> {id}</td>
      <td> {nombre}</td>
      <td> {cantidad}</td>
      <td> ${costo}</td>
      <td> ${precio}</td>
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
  );
};

export default Producto;

//  <tr className="border-b hover:bg-gray-50">
//       <td className="p-3">{nombre}</td>
//       <td className="p-3">
//         <p>
//           <span className="text-gray-800 uppercase font-bold">Email: </span>{" "}
//           {email}{" "}
//         </p>
//         <p>
//           <span className="text-gray-800 uppercase font-bold">Tel: </span>{" "}
//           {telefono}{" "}
//         </p>
//       </td>
//       <td className="p-3">{empresa}</td>
//       <td className="p-3">
//         <button
//           type="button"
//           className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
//           onClick={() => navigate(`/clientes/${id}`)}
//         >
//           Ver
//         </button>

//         <button
//           type="button"
//           className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
//           onClick={() => navigate(`/clientes/editar/${id}`)}
//         >
//           Editar
//         </button>

//         <button
//           type="button"
//           className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
//           onClick={() => handleEliminar(id)}
//         >
//           Eliminar
//         </button>
//       </td>
//     </tr>
