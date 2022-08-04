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
import { FechaHoyArgentina } from "../../../helpers";
import ContenedorFormularios from "../ContenedorFormularios";
const FormularioVenta = () => {
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
    obtenerProducto,
  } = useContext(StaticContext);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Resetear el state Venta.
  if (urlActual.includes("nuevaventa")) {
    setVenta("");
  }

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

  const { _id } = venta;

  useEffect(() => {
    if (venta?._id) {
      setProducto(venta.producto);
      setCantidad(venta.cantidad);
      setValorIndividual(venta.valorIndividual);
      setValorTotal(venta.valorTotal * cantidad);
      setMetodoPago(venta.metodoPago);
      setCategoria(venta.categoria);
      setFecha(venta.fecha?.split("T")[0]);
      setNotas(venta.notas);

      return;
    }

    setProducto("");
    setCantidad(1);
    setValorIndividual("");
    setValorTotal("");
    setMetodoPago("Efectivo");
    setCategoria("Bebida");
    setFecha(FechaHoyArgentina);
    setNotas("");
  }, [venta]);

  // useEffect(() => {
  //   if (venta._id) {
  //     setValorTotal(valorIndividual * cantidad);
  //   }
  //   setValorTotal("");
  // }, [cantidad]);

  // Prueba con AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (_id) {
        const tokenActual = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenActual}`,
          },
        };
        const { data } = await axios.put(
          `${import.meta.env.VITE_API_URL}/ventas/${_id}`,
          {
            producto,
            cantidad,
            valorIndividual,
            valorTotal,
            metodoPago,
            categoria,
            fecha,
            notas,
          },
          config
        );
        console.log(data);
        setVenta("");
        navigate("/ventas");
        setIsOpenSaveModal(true);
      } else {
        // Validacion del formulario
        if (
          [
            producto,
            valorIndividual,
            // valorTotal,
            metodoPago,
            categoria,
            fecha,
          ].includes("")
        ) {
          console.log("Completa todos los casilleros por favor.");
          setError(true);
        }
        const tokenActual = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokenActual}`,
          },
        };
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
          },
          config
        );
        navigate("/ventas");
        setIsOpenSaveModal(true);
        setVenta("");
        console.log(respuesta);
      }
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
    <div className="">
      <ContenedorFormularios>
        <p className="text-lg ">
          {venta._id ? `Editar la venta: ${venta.producto}` : ""}
        </p>
        <div className="bg-white rounded-lg  max-w-xl mx-auto mt-5">
          <h1 className="pt-5 text-xl uperrcase font-black text-center uppercase">
            {venta._id ? `` : "Nuevo Producto"}
          </h1>
          <form action="submit" className="" onSubmit={handleSubmit}>
            <div className={divStyles}>
              {error && <Error mensaje="Completa todos los campos" />}
              <label htmlFor="inputProducto" className={labelStyles}>
                Producto
              </label>

              {/* Pruebas */}
              <input
                type="text"
                className={inputStyles}
                id="inputProducto"
                name="producto"
                value={producto}
                onChange={(e) => {
                  setProducto(e.target.value);
                }}
                placeholder="Nuevo Producto..."
                autoComplete="off"
              />
            </div>

            <div className={divStyles}>
              <label htmlFor="cantidad" className={labelStyles}>
                Cantidad
              </label>
              <input
                id="cantidad"
                name="cantidad"
                type="number"
                placeholder={
                  venta._id ? venta.cantidad : "Cantidad de unidades"
                }
                className={inputStyles}
                value={cantidad}
                onChange={(e) => setCantidad(Number(e.target.value))}
              />
            </div>

            <div className={divStyles}>
              <label htmlFor="inputValorIndividual" className={labelStyles}>
                Precio Individual
                <span className="text-slate-300 pl-3">
                  {venta._id ? "No Tocar" : ""}{" "}
                </span>
              </label>
              {venta._id ? (
                <input
                  disabled="true"
                  id="inputValorIndividual"
                  name="valor"
                  type="number"
                  placeholder="$ "
                  className={`${inputStyles} opacity-60`}
                  value={valorIndividual}
                  onChange={(e) => setValorIndividual(e.target.value)}
                  // onChange={() => setValorIndividual(value)}
                />
              ) : (
                <input
                  id="inputValorIndividual"
                  name="valor"
                  type="number"
                  placeholder="$ "
                  className={inputStyles}
                  value={valorIndividual}
                  onChange={(e) => setValorIndividual(e.target.value)}
                  // onChange={() => setValorIndividual(value)}
                />
              )}
            </div>
            <div className={divStyles}>
              <label htmlFor="valorTotal" className={labelStyles}>
                Precio Total
              </label>
              {venta._id ? (
                <input
                  disabled="true"
                  id="valorTotal"
                  name="valor"
                  type="number"
                  placeholder="$"
                  className={`${inputStyles} opacity-60`}
                  value={valorIndividual ? valorIndividual * cantidad : ""}
                  onChange={(e) => setValorTotal(e.target.value)}
                />
              ) : (
                <input
                  id="valorTotal"
                  name="valor"
                  type="number"
                  placeholder="$"
                  className={`${inputStyles} opacity-60`}
                  value={valorIndividual ? valorIndividual * cantidad : ""}
                  onChange={(e) => setValorTotal(e.target.value)}
                />
              )}
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
                onChange={(e) => setCategoria(e.target.value)}
              >
                <option value="Bebida"> Bebida </option>
                <option value="Comida"> Comida </option>
                <option value="Otros"> Otros </option>
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
      </ContenedorFormularios>
    </div>
  );
};

export default FormularioVenta;
