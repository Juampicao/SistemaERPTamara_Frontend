import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";
import { DiaActual, formatearFecha } from "../../../helpers";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";

const VerGasto = () => {
  const { gasto, setGasto } = useContext(StaticContext);
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/gastos/${id}`;
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

  const { _id } = gasto;

  return (
    <div>
      <div>
        <p> El producto es: {gasto.nombre} </p>
        <p> El ID es: {gasto._id} </p>
        <p> Valor: {gasto.valor} </p>
        <p> Categoria: {gasto.categoria} </p>
        <p> Fecha: {gasto.fecha.substr(0, 10)} </p>
        {/* <p> Fecha: {formatearFecha(gasto.fecha)} </p> */}

        <div className="py-5 flex justify-center space-x-3">
          <BotonPrimario
            Color={BotonAzulRedondeado}
            value="Editar Gasto"
            onClick={() => navigate(`/gastos/editar/${_id}`)}
          />
          <BotonPrimario
            Color={BotonBlancoRedondeado}
            value="Volver Atras"
            type="button"
            onClick={() => {
              navigate("/gastos"), setGasto("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerGasto;
