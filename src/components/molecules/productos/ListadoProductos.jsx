import React from "react";
import { useEffect, useContext, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Spiner from "../../atoms/Spiner";

import Producto from "./Producto";

const ListadoProductos = () => {
  const {
    producto,
    setProducto,
    productos,
    setProductos,
    screenSize,
    setScreenSize,
    isOpenErrorModal,
    setIsOpenErrorModal,
    isCargando,
    setIsCargando,
  } = useContext(StaticContext);

  // Get Base de datos
  useEffect(() => {
    const obtenerClienteAPI = async () => {
      setIsCargando(true);
      try {
        const url = `${import.meta.env.VITE_API_URL}/productos`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProductos(resultado);
        console.log(resultado);
      } catch (error) {
        console.log(error);
        setIsOpenErrorModal(true);
      }
      setIsCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  const {
    _id,
    nombreProducto,
    cantidad,
    precio,
    valorTotal,
    costo,
    categoria,
    fecha,
    notas,
  } = producto;

  // Styles
  const tableStyles = "w-full ";
  const tableStylesPhone = "";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  return (
    <div>
      {isCargando ? <Spiner /> : ""}

      <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center  ">
        <table className={tableStyles}>
          <thead className=" bg-white border-b-2 border-gray-200">
            <tr className="  bg-white">
              <th className="p-2 ">Producto</th>
              <th className="p-2 ">Cantidad</th>
              <th className="p-2">Costo</th>
              <th className="p-2">Precio U.</th>
              <th className="p-2"> Valor Total</th>
              {/* <th className="p-2">Fecha</th> */}
              <th className="p-2 ">Funciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {productos.length > 0 ? (
              productos.map((producto) => (
                <Producto key={producto._id} producto={producto} />
              ))
            ) : (
              <p className="my-5 text-center">
                No hay ningun producto para mostrar
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoProductos;
