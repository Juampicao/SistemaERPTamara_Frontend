import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Producto from "./Producto";
import StaticContext from "../../contexts/StaticProvider";
import Spiner from "../atoms/Spiner";

const VerProducto = () => {
  const { producto, setProducto, isCargando, setIsCargando } =
    useContext(StaticContext);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        const url = `http://localhost:4000/productos/${id}`;
        // const url = `${import.meta.env.API_URL}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProducto(resultado);
        console.log(resultado);
      } catch (error) {
        console.log(error);
      }
      setIsCargando(!isCargando);
    };
    obtenerClienteAPI();
  }, []);

  return isCargando ? (
    <Spiner />
  ) : Object.keys(producto).length === 0 ? (
    <p> No hay resultados para mostrar</p>
  ) : (
    <div>
      <div> El producto es: {producto.nombre} </div>
      <div> Costo: {producto.costo} </div>
      <div> Cantidad: {producto.cantidad} </div>
    </div>
  );
};

export default VerProducto;
