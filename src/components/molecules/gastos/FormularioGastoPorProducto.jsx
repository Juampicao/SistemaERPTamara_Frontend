import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import StaticContext from "../../../contexts/StaticProvider";

import axios from "axios";

import { BotonPrimario } from "../../atoms/Botones";
import {
  BotonAzulClasico,
  BotonAzulRedondeado,
  BotonBlancoClasico,
  BotonBlancoClasicoSinZoom,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";

import { BotonVer } from "../../atoms/Botones";
import Error from "../../atoms/Error";
import { toDay } from "../../../helpers";
import Spiner from "../../atoms/Spiner";

import IconoTooltip from "../../../img/iconoExclamacion2.png";
const FormularioGastoPorProducto = () => {
  const {
    gasto,
    setGasto,
    gastos,
    setGastos,
    producto,
    setProducto,
    productos,
    setProductos,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
    isCargando,
    setIsCargando,
  } = useContext(StaticContext);

  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [notas, setNotas] = useState("");

  //   const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [valorIndividual, setValorIndividual] = useState("");
  const [valorTotal, setValorTotal] = useState("");

  const [productoAVender, setProductoAVender] = useState("");
  const accionstock = "aumentar"; // disminuir o aumentar. (stock).
  const [error, setError] = useState(false);

  const { _id } = gasto;

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Valores de Inputs

  useEffect(() => {
    if (productoAVender?._id) {
      setNombre(productoAVender.nombreProducto);
      setValorIndividual(productoAVender.precio);
      setValorTotal(productoAVender.precio * cantidad);
      setValor(productoAVender.precio * cantidad);
      setCategoria("Inventario");
      setNotas(`${cantidad} Unidades.`);

      return;
    }
    setProducto("");
    setCantidad(1);
    setValorIndividual("");
    setValorTotal("");
    setCategoria("");
    setFecha("");
    setNotas("");
  }, [productoAVender, cantidad]);

  // Fin Valores de Inputs

  // Inicio UseEffect para traer Datos.
  useEffect(() => {
    const obtenerGastos = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/gastos`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setGastos(resultado);
        console.log(gastos.gastos);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerGastos();
  }, []);

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/productos`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setProductos(resultado);
        console.log(productos);
      } catch (error) {
        console.log(error);
      }
      // setIsCargando(!isCargando);
    };
    obtenerProducto();
  }, []);

  function obtenerProductoAVender(e) {
    console.log(e);
    const inputValorIndividual = document.getElementById(
      "inputValorIndividual"
    );
    console.log(inputValorIndividual.value);
    if (producto.length < 0) {
      console.log("esta vacio");
    } else {
      console.log("Esta lleno");
    }
    iterarArrayProductos();
    // 1 - Buscar en el array Productos el que tenga nombre igual
    function iterarArrayProductos() {
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombreProducto === e) {
          setProductoAVender(productos[i]);
          console.log(productoAVender);
        }
      }
    }
  }

  // Inicio UseEffect para traer Datos.

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validacion del formulario
      if ([nombre, valor, categoria, fecha].includes("")) {
        console.log("Completa todos los casilleros por favor.");
        setError(true);
        return;
      }
      const respuesta = await axios.post(
        `${import.meta.env.VITE_API_URL}/gastos`,
        {
          nombre,
          valor,
          categoria,
          fecha,
          notas,
          productoIngresado: productoAVender._id,
        }
      );
      const editarCantidad = await axios.put(
        `${import.meta.env.VITE_API_URL}/productos/${productoAVender._id}`,
        {
          cantidad,
          accionstock,
        }
      );
      console.log(editarCantidad);
      navigate("/gastos");
      setIsOpenSaveModal(true);
      setProducto("");
      setProductoAVender("");
    } catch (error) {
      console.log(error);
      setIsOpenErrorModal(!isOpenErrorModal);
    }
  };
  // styles
  const labelStyles = "text-slate-900 font-bold capitalize pl-1 mb-1 ";
  const inputStyles =
    "block w-full p-2 px-4 bg-gray-100 rounded-md mt-1 capitalize";
  const divStyles = "px-5 py-3 space-x-1";

  return (
    <div>
      <div className="bg-white rounded-lg  max-w-xl mx-auto">
        <div className="flex pt-5 gap-x-10 ">
          <img
            src={IconoTooltip}
            alt=""
            className="pl-5  h-6 float-left cursor-pointer"
            data-bs-toggle="tooltip"
            title="Se añadira un gasto y se aumentara el stock del producto seleccionado."
          />
          <h1 className=" text-xl uperrcase font-black float-rigth uppercase">
            Gasto por Producto en Stock
          </h1>
        </div>
        <form action="submit" className="" onSubmit={handleSubmit}>
          <div className={divStyles}>
            {error && <Error mensaje="Completa todos los campos" />}
            <label htmlFor="inputProducto" className={labelStyles}>
              Producto
            </label>

            {/* Pruebas */}
            <input
              type="search"
              className={inputStyles}
              id="inputProducto"
              name="producto"
              value={producto}
              onChange={(e) => {
                setProducto(e.target.value),
                  obtenerProductoAVender(e.target.value);
              }}
              placeholder="Selecciona un producto.."
              list="pruebaLista"
              autocomplete="off"
              // onClick={() => console.log(venta.producto)}
            />
            <datalist id="pruebaLista">
              {/* <option value=""> --- </option> */}
              {productos.map((producto) => (
                <option value={producto.nombreProducto}>
                  {producto.nombreProducto}
                </option>
              ))}
            </datalist>
            {/* Pruebas */}
          </div>

          <div className={divStyles}>
            <label htmlFor="cantidad" className={labelStyles}>
              Cantidad{" "}
              <span className=" pl-3 capitalize text-slate-300 text-sm">
                Aumenta el stock del inventario automaticamente..
              </span>
            </label>
            <input
              id="cantidad"
              name="cantidad"
              type="number"
              placeholder="Cantidad de unidades"
              className={inputStyles}
              value={cantidad}
              onChange={(e) => setCantidad(Number(e.target.value))}
            />
          </div>

          <div className={divStyles}>
            <label htmlFor="inputValorIndividual" className={labelStyles}>
              Precio Individual
            </label>
            <input
              id="inputValorIndividual"
              name="valor"
              type="number"
              placeholder="$"
              className={inputStyles}
              value={valorIndividual}
              onChange={(e) => setValorIndividual(e.target.value)}
              // onChange={() => setValorIndividual(value)}
            />
          </div>
          <div className={divStyles}>
            <label htmlFor="valorTotal" className={labelStyles}>
              Precio Total
            </label>
            <input
              id="valorTotal"
              name="valor"
              type="number"
              placeholder="$"
              className={inputStyles}
              value={
                productoAVender._id ? valorIndividual * cantidad : valorTotal
              }
              // value={valorTotal}
              onChange={(e) => setValorTotal(e.target.value)}
            />
          </div>
          <div className={divStyles}>
            <label htmlFor="fecha" className={labelStyles}>
              Fecha
            </label>
            <input
              id="fecha"
              name="fecha"
              type="date"
              placeholder=""
              className={inputStyles}
              onChange={(e) => setFecha(e.target.value)}
              value={fecha}
            />
          </div>

          <div className={divStyles}>
            <label htmlFor="categoria" className={labelStyles}>
              Categoria
            </label>
            <select
              as="select"
              id="categoria"
              name="categoria"
              placeholder=""
              className={inputStyles}
              value={categoria}
              // value={productoAVender._id ? productoAVender.categoria : ""}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value="Inventario"> Inventario </option>
            </select>
          </div>

          {/* Prueba acordion TextArea */}
          <div class="accordion" id="accordionExample">
            <div class="accordion-item ">
              <h2 class="accordion-header mb-0" id="headingOne">
                <button
                  class=" accordion-button relative flex items-center w-full py-4 px-5 text-base text-black text-left  bg-white rounded-none transition focus:outline-none"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  Agregar Notas
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className={divStyles}>
                  <textarea
                    name="notas"
                    id="notas"
                    cols=""
                    rows=""
                    className="w-full border  h-28 p-2 "
                    placeholder="Escribe alguna nota..."
                    value={notas}
                    onChange={(e) => setNotas(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* fin prueba acordeon */}

          <div className="py-5 flex justify-center space-x-3">
            {producto._id ? (
              <BotonPrimario
                Color={BotonBlancoRedondeado}
                value="Ver"
                type="button"
                onClick={() => navigate(`/productos/${_id}`)}
              />
            ) : (
              ""
            )}
            <BotonPrimario
              Color={BotonAzulRedondeado}
              value="Agregar Producto y Gasto"
              type="submit"
            />
            <BotonPrimario
              Color={BotonBlancoRedondeado}
              value="Volver Atras"
              type="button"
              onClick={() => {
                navigate("/gastos"), setVenta("");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioGastoPorProducto;
