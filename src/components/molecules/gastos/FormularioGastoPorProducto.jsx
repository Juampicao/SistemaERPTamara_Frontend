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
import Spiner from "../../atoms/Spiner";

import IconoTooltip from "../../../img/iconoExclamacion2.png";
import { FechaHoyArgentina } from "../../../helpers";
import ContenedorFormularios from "../ContenedorFormularios";

import useAuth from "../../../hooks/useAuth";

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
  const [cantidad, setCantidad] = useState("");
  const [valorIndividual, setValorIndividual] = useState("");
  const [valorTotal, setValorTotal] = useState("");

  const [productoAVender, setProductoAVender] = useState("");
  const [error, setError] = useState(false);

  const { _id } = gasto;

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Valores de Inputs

  useEffect(() => {
    if (productoAVender?._id) {
      setNombre(productoAVender.nombreProducto);
      setValorIndividual(productoAVender.costo);
      setValorTotal(productoAVender.costo * cantidad);
      setValor(productoAVender.costo * cantidad);
      setCategoria("Inventario");
      setNotas(`${cantidad} Unidades.`);

      return;
    }
    setProducto("");
    setCantidad(1);
    setValorIndividual("");
    setValorTotal("");
    setCategoria("");
    setFecha(FechaHoyArgentina);
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

      const tokenActual = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenActual}`,
        },
      };
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/gastos`,
        {
          nombre,
          valor,
          categoria,
          fecha,
          notas,
          productoIngresado: productoAVender._id,
          cantidadProductoIngresado: cantidad,
        },
        config
      );
      console.log(data);
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
      <ContenedorFormularios>
        <div className="bg-white rounded-lg  max-w-xl mx-auto">
          {/* <h1 className=" text-xl uperrcase font-black float-rigth uppercase">
            Gasto por Producto en Stock
          </h1> */}

          <form action="submit" className="mt-5 py-5" onSubmit={handleSubmit}>
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
                autoComplete="off"
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
                Costo Individual
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
              <label htmlFor="valorTotal" className={`${labelStyles}`}>
                Costo Total
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
                  class="accordion-collapse collapse "
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
              <div className="flex-wrap gap-y-3">
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
            </div>
          </form>
        </div>
      </ContenedorFormularios>
    </div>
  );
};

export default FormularioGastoPorProducto;
