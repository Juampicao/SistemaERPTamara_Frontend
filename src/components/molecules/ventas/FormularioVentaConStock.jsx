import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { BotonPrimario } from "../../atoms/Botones";
import {
  BotonAzulRedondeado,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";

import StaticContext from "../../../contexts/StaticProvider";
import { BotonVer } from "../../atoms/Botones";
import Error from "../../atoms/Error";
import Busqueda from "../../atoms/Busqueda";

import IconoTooltip from "../../../img/iconoExclamacion2.png";

const FormularioVentaConStock = () => {
  const {
    venta,
    setVenta,
    productos,
    setProductos,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
    buscador,
    handleBuscador,
  } = useContext(StaticContext);

  const [producto, setProducto] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [valorIndividual, setValorIndividual] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [metodoPago, setMetodoPago] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [notas, setNotas] = useState("");
  const [error, setError] = useState(false);

  const [productoAVender, setProductoAVender] = useState("");
  const accionstock = "disminuir"; // disminuir o aumentar. (stock).

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

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

  // Prueba con AXIOS
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

  useEffect(() => {
    if (productoAVender?._id) {
      setProducto(productoAVender.nombreProducto);
      setValorIndividual(productoAVender.precio);
      setValorTotal(productoAVender.precio * cantidad);

      setCategoria(productoAVender.categoria);
      return;
    }
    setProducto("");
    setCantidad(1);
    setValorIndividual("");
    setValorTotal("");
    setMetodoPago("Efectivo");
    setCategoria("Bebida");
    setFecha("");
    setNotas("");
  }, [productoAVender, cantidad]);

  // Prueba con AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validacion del formulario
      if (
        [
          producto,
          valorIndividual,
          valorTotal,
          metodoPago,
          cantidad,
          categoria,
        ].includes("")
      ) {
        console.log("Completa todos los casilleros por favor.");
        setError(true);
        return;
      }
      const respuesta = await axios.post(
        `${import.meta.env.VITE_API_URL}/ventas`,
        {
          producto,
          cantidad,
          valorIndividual,
          valorTotal,
          metodoPago,
          categoria,
          fecha,
          notas,
          productoVendido: productoAVender._id,
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
      navigate("/ventas");
      setIsOpenSaveModal(true);
      setVenta("");
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
        <div className="flex pt-5 gap-x-24">
          <div className="pl-5">
            <img
              src={IconoTooltip}
              alt=""
              className="pl-5  h-6 float-left cursor-pointer items-center"
              data-bs-toggle="tooltip"
              title="Se añadira una venta y se disminuira el stock del producto seleccionado automaticamente."
            />
            {/* <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="far"
              data-icon="check-circle"
              className="w-7 h-7"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                data-bs-toggle="tooltip"
                title="Se añadira una venta y se disminuira el stock del producto seleccionado automaticamente."
                fill="currentColor"
                d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"
              ></path>
            </svg> */}
          </div>
          <h1 className=" text-xl uperrcase  float-rigth uppercase">
            Producto en Stock
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
              Cantidad
              <span className=" capitalize pl-3  text-slate-300 text-sm">
                Disminuye el stock del inventario automaticamente..
              </span>
            </label>
            <input
              id="cantidad"
              name="cantidad"
              type="number"
              placeholder={venta._id ? venta.cantidad : "Cantidad de unidades"}
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
              disabled="true"
              id="inputValorIndividual"
              name="valor"
              type="number"
              placeholder="$"
              className={`${inputStyles} opacity-60 `}
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
              disabled="true"
              id="valorTotal"
              name="valor"
              type="number"
              placeholder="$"
              className={`${inputStyles} opacity-60 `}
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
            <label htmlFor="metodoPago" className={labelStyles}>
              Metodo de pago
            </label>
            <select
              as="select"
              id="metodoPago"
              name="metodoPago"
              placeholder=""
              className={inputStyles}
              onChange={(e) => setMetodoPago(e.target.value)}
              value={metodoPago}
            >
              <option value="Efectivo"> Efectivo </option>
              <option value="Tarjeta"> Tarjeta </option>
            </select>
          </div>
          {/* <div className={divStyles}>
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
              <option value="Bebida"> Bebida </option>
              <option value="Comida"> Comida </option>
              <option value="Otros"> Otros </option>
            </select>
          </div> */}

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
                class="accordion-collapse collapse"
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
                    value={venta.nota}
                    onChange={(e) => setNotas(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* fin prueba acordeon */}

          <div className="py-5 flex justify-center space-x-3">
            {venta._id ? (
              <BotonPrimario
                Color={BotonBlancoRedondeado}
                value="Ver"
                type="button"
                onClick={() => navigate(`/ventas/${_id}`)}
              />
            ) : (
              ""
            )}
            <BotonPrimario
              Color={BotonAzulRedondeado}
              value={venta?.producto ? "Editar venta" : "Agregar venta"}
              type="submit"
            />
            <BotonPrimario
              Color={BotonBlancoRedondeado}
              value="Volver Atras"
              type="button"
              onClick={() => {
                navigate("/ventas"), setVenta("");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioVentaConStock;
