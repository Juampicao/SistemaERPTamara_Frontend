import React, { useContext, useState, useEffect } from "react";
import Venta from "./Venta";

import StaticContext from "../../contexts/StaticProvider";

const ListadoVentas = () => {
  const { productos, setProductos, ventas, setVentas } =
    useContext(StaticContext);

  //   const {
  //     id,
  //     imagen,
  //     nombre,
  //     cantidad,
  //     costo,
  //     precio,
  //     categoria,
  //     descripcion,
  //   } = producto;
  //   console.log(productos);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/ventas`;
        // const url = `${import.meta.env.API_URL}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setVentas(resultado);
        // console.log(resultado);
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
      {/* <table className={tableStyles}>
        <thead className=" text-black border border-black  ">
          <tr>
            <th className="p-2">Imagen</th>
            <th className="p-2">Producto</th>
            <th className="p-2">Cantidad</th>
            <th className="p-2">Valor</th>
            <th className="p-2">Funciones</th>
          </tr>
        </thead>
        <tbody className="">
          {ventas.map((venta) => (
            <Venta key={venta.id} venta={venta} />
          ))}
        </tbody>
      </table> */}
      <table className={tableStyles}>
        <thead className=" text-black border border-black  ">
          <tr>
            <th className="p-2">Imagen</th>
            <th className="p-2">Producto</th>
            <th className="p-2">Stock</th>
            <th className="p-2">Costo</th>
          </tr>
        </thead>

        <tbody className="">
          {ventas.map((venta) => (
            <Venta key={venta.id} venta={venta} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListadoVentas;
