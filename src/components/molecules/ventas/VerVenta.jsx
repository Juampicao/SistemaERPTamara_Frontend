import React, { useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";
import { formatearFecha } from "../../../helpers";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";
const VerVenta = () => {
  const { venta, setVenta } = useContext(StaticContext);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(venta._id);
  const {
    _id,
    producto,
    cantidad,
    valorIndividual,
    valorTotal,
    metodoPago,
    categoria,
    fecha,
    notas,
  } = venta;

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/ventas/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setVenta(resultado);
      } catch (error) {
        // console.log(error);
      }
      //   setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);
  return (
    <div>
      <div className="space-y-5 xs:space-y-3 p-5 xs:p-0">
        <p> El producto es: {producto} </p>
        <p> El ID es: {_id} </p>
        <p> La cantidad vendida: {cantidad} unidades</p>

        <p> Valor Individual: ${valorIndividual} </p>
        <p> Valor Total: ${valorTotal} </p>

        <p> Categoria: {categoria} </p>
        {/* <p> Fecha: {gasto.fecha.substr(0, 10)} </p> */}
        <p> Fecha: {formatearFecha(fecha)} </p>
        <p> Notas: {notas ? notas : "No hay notas."} </p>
        <div className="py-5 flex justify-center space-x-3">
          <BotonPrimario
            Color={BotonAzulRedondeado}
            value="Editar Venta"
            onClick={() => navigate(`/ventas/editar/${_id}`)}
          />
          <BotonPrimario
            Color={BotonBlancoRedondeado}
            value="Volver Atras"
            type="button"
            onClick={() => {
              navigate("/ventas"), setGasto("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerVenta;
