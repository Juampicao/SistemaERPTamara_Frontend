import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StaticContext from "../../../contexts/StaticProvider";

import { formatearFecha } from "../../../helpers";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";

import axios from "axios";

const VerProducto = () => {
  const { producto, setProducto, isCargando, setIsCargando } =
    useContext(StaticContext);
  const { id } = useParams();
  const params = useParams();

  const navigate = useNavigate();

  const {
    _id,
    nombreProducto,
    cantidad,
    precio,
    costo,
    categoria,
    fecha,
    notas,
  } = producto;

  useEffect(() => {
    const obtenerProductos = async () => {
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
          `${import.meta.env.VITE_API_URL}/productos/${id}`,
          config
        );
        console.log(data);
        setProducto(data);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerProductos();
  }, []);

  return (
    <div className="space-y-3 my-10 mx-10">
      <p> El producto es: {nombreProducto} </p>
      <p> El ID es: {_id} </p>
      <p> Stock: {cantidad} unidades</p>

      <p> El costo: ${costo} </p>
      <p> El precio: ${precio} </p>

      <p> Categoria: {categoria} </p>
      {/* <p> Fecha: {gasto.fecha.substr(0, 10)} </p> */}
      <p> Fecha: {formatearFecha(fecha)} </p>

      <p> Notas: {notas ? notas : "No hay notas."} </p>
      <div className="py-5 flex justify-center space-x-3">
        <BotonPrimario
          Color={BotonAzulRedondeado}
          value="Editar Producto"
          onClick={() => navigate(`/productos/editar/${_id}`)}
        />
        <BotonPrimario
          Color={BotonBlancoRedondeado}
          value="Volver Atras"
          type="button"
          onClick={() => {
            navigate("/productos"), setGasto("");
          }}
        />
      </div>
    </div>
  );
};

export default VerProducto;
