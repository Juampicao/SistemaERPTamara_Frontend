import React, { useContext, useEffect, useState } from "react";
import Fernet from "../../img/fernet.jpg";

import VerVenta from "./VerVenta";

import { useNavigate } from "react-router-dom";
import StaticContext from "../../contexts/StaticProvider";

const Venta = ({ venta }) => {
  const { ventas, setVentas } = useContext(StaticContext);
  const navigate = useNavigate();

  const { id, nombre, cantidad, valor } = venta;

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
  return (
    <div>
      <tr className="hover:bg-gray-100 border border-slate-500">
        {/* <td className=" p-3">
          <img src={imagen} alt="" className="h-32 mx-auto" />
        </td> */}
        <td> {id}</td>
        <td> {nombre}</td>
        <td> ${cantidad}</td>
        <td> ${valor}</td>
        <td className="p-3 space-y-3 ">
          <button
            type="button"
            className="bg-yellow-500 hover:bg-yellow-600 block mx-auto w-[75px] text-white p-2 uppercase font-bold text-xs"
            onClick={() => navigate(`/productos/${id}`)}
          >
            Ver
          </button>
        </td>
      </tr>
    </div>
  );
};

export default Venta;

//  <td className=" p-3">
//           <img src={Fernet} alt="" className="h-32 mx-auto" />
//         </td>
//         <td>Producto: {nombre}</td>
//         <td>Cantidad: {cantidad}</td>
//         <td>Costo: {valor}</td>
