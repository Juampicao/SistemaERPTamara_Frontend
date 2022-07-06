import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";
import { DiaActual, formatearFecha } from "../../../helpers";

const VerGasto = () => {
  const { gasto, setGasto } = useContext(StaticContext);
  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/gastos/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setGasto(resultado);
      } catch (error) {
        // console.log(error);
      }
      //   setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <div>
      <div>
        <div> El producto es: {gasto.nombre} </div>
        <div> El ID es: {gasto.id} </div>
        <div> Valor: {gasto.valor} </div>
        <div> Categoria: {gasto.categoria} </div>
        <div> Fecha: {gasto.fecha} </div>
        {/* Formatear Fecha */}
      </div>
    </div>
  );
};

export default VerGasto;
