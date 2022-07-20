import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StaticContext from "../../../contexts/StaticProvider";

import { formatearFecha } from "../../../helpers";

const VerProducto = () => {
  const { producto, setProducto, isCargando, setIsCargando } =
    useContext(StaticContext);
  const { id } = useParams();

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
        const url = `${import.meta.env.VITE_API_URL}/productos/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProducto(resultado);
        console.log(producto);
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
      <p> La cantidad vendida: {cantidad} unidades</p>

      <p> El precio: ${precio} </p>
      <p> El costo: ${costo} </p>

      <p> Categoria: {categoria} </p>
      {/* <p> Fecha: {gasto.fecha.substr(0, 10)} </p> */}
      <p> Fecha: {formatearFecha(fecha)} </p>
      <p> Notas: {notas ? notas : "No hay notas."} </p>
    </div>
  );
};

export default VerProducto;

//  return isCargando ? (
//    <Spiner />
//  ) : Object.keys(producto).length === 0 ? (
//    <p> No hay resultados para mostrar</p>
//  ) : (
//    <div>
//      <div> El producto es: {producto.nombre} </div>
//      <div> Costo: {producto.costo} </div>
//      <div> Cantidad: {producto.cantidad} </div>
//    </div>
//  );
