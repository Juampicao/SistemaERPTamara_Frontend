import React from "react";
import { useEffect, useContext, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import Spiner from "../../atoms/Spiner";

import Venta from "../ventas/Venta";

const ListadoVentas = () => {
  const {
    ventas,
    setVentas,
    venta,
    setVenta,
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
        const url = `${import.meta.env.VITE_API_URL}/ventas`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setVentas(resultado.arrayTotalVentas);
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
    id_,
    producto,
    cantidad,
    valorIndividual,
    valorTotal,
    metodoPago,
    categoria,
    fecha,
    notas,
  } = venta;

  // Styles
  const tableStyles = "w-full ";
  const tableStylesPhone = "";
  const linea = <div className="h-[2px] w-full mx-auto bg-red-500"> </div>;

  return (
    <div>
      {isCargando ? <Spiner /> : ""}

      {/* hidden md:block */}
      <div className="overflow-auto rounded-xl  shadow-xl  my-5 text-center ">
        <table className={tableStyles}>
          <thead className=" bg-white border-b-2 border-gray-200">
            <tr className="  bg-white">
              <th className="p-2 ">Producto</th>
              <th className="p-2 ">Cantidad</th>

              <th className="p-2">Precio U.</th>
              <th className="p-2">Precio Total</th>

              <th className="p-2">Fecha</th>
              <th className="p-2 ">Funciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {ventas.length > 0 ? (
              ventas.map((venta) => <Venta key={venta._id} venta={venta} />)
            ) : (
              <p className="my-5 text-center">
                No hay ningun gasto para mostrar
              </p>
            )}
          </tbody>
        </table>
      </div>
      {/*      
           <>
             {ventas.length > 0 ? (
               ventas.map((venta) => <Venta key={venta._id} venta={venta} />)
             ) : (
               <p className="my-5 text-center">No hay ningun gasto para mostrar</p>
             )}
           </> */}
    </div>
  );
};

export default ListadoVentas;
