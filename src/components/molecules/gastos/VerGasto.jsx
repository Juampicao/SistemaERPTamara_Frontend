import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";
import { formatearFecha } from "../../../helpers";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";

import axios from "axios";

const VerGasto = () => {
  const { gasto, setGasto, isCargando, setIsCargando } =
    useContext(StaticContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const params = useParams();
  // const { _id } = gasto;
  console.log(params.id);

  useEffect(() => {
    const obtenerGasto = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/gastos/${params.id}`,
          config
        );
        console.log(data);
        setGasto(data);
      } catch (error) {
        console.log(error);
        console.log(error.response.data.msg);
      }
      setIsCargando(!isCargando);
    };
    obtenerGasto();
  }, []);

  return (
    <div>
      <div className="space-y-3 p-5 xs:p-0">
        <p> El Gasto es: {gasto.nombre} </p>
        {/* <p> El producto relacionado es: {gasto.productoIngresado}</p> */}
        <p> El ID es: {gasto._id} </p>
        <p> Valor: ${gasto.valor} </p>
        <p> Categoria: {gasto.categoria} </p>
        <p> Fecha: {formatearFecha(gasto.fecha)} </p>
        <p> Notas: {gasto.notas ? gasto.notas : "No hay notas."} </p>
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
