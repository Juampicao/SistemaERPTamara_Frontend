import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";

const VerVenta = () => {
  const { venta, setVenta } = useContext(StaticContext);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/ventas/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setVenta(resultado);
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
      //   setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);
  return (
    <div>
      <div>
        <div> El producto es: {venta.nombre} </div>
        <div> Costo: {venta.cantidad} </div>
        <div> Cantidad: {venta.valor} </div>
      </div>
    </div>
  );
};

export default VerVenta;
