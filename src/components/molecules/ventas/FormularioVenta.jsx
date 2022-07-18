import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import { BotonPrimario } from "../../atoms/Botones";
import {
  BotonAzulClasico,
  BotonAzulRedondeado,
  BotonBlancoClasico,
  BotonBlancoClasicoSinZoom,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";

import StaticContext from "../../../contexts/StaticProvider";
import { BotonVer } from "../../atoms/Botones";
import Error from "../../atoms/Error";

const FormularioVenta = () => {
  const {
    venta,
    setVenta,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(1);
  const [valorIndividual, setValorIndividual] = useState("");
  const [valorTotal, setValorTotal] = useState("");
  const [metodoPago, setMetodoPago] = useState("Efectivo");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [notas, setNotas] = useState("");

  const [error, setError] = useState(false);

  const toDay = new Date().toISOString().substring(0, 10);
  console.log(toDay);

  const { _id } = venta;

  // Prueba con AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (_id) {
        const respuesta = await axios.put(
          `${import.meta.env.VITE_API_URL}/ventas/${_id}`,
          {
            nombre,
            cantidad,
            valorIndividual,
            valorTotal,
            metodoPago,
            categoria,
            fecha,
            notas,
          }
        );
        console.log(respuesta);
        setVenta("");
        navigate("/ventas");
        setIsOpenSaveModal(true);
      } else {
        // Validacion del formulario
        if (
          [nombre, valorIndividual, valorTotal, metodoPago, categoria].includes(
            ""
          )
        ) {
          console.log("Completa todos los casilleros por favor.");
          setError(true);
        }
        const respuesta = await axios.post(
          `${import.meta.env.VITE_API_URL}/ventas`,
          {
            nombre,
            cantidad,
            valorIndividual,
            valorTotal,
            metodoPago,
            categoria,
            fecha,
            notas,
          }
        );
        console.log(respuesta);
        navigate("/ventas");
        setIsOpenSaveModal(true);
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
    <div>
      <p className="text-md text-slate-400 my-2">
        {venta._id
          ? `- La fecha y la categoria por un problema aparecen con datos erroneos, pero si vas a "ver venta" existen. Lo que modifiques aca se va a cambiar, lo que no toques,queda igual a como esta en VER venta.`
          : ""}
      </p>
      <p className="text-md text-slate-400 my-2">
        {venta._id
          ? `- Si aparece esto cuando queres crear NUEVO venta, refresca la pagina.`
          : ""}
      </p>
      <p className="text-lg">
        {venta._id ? `Editar la venta: ${venta.nombre}` : ""}
      </p>
      <div className="bg-white rounded-lg  max-w-xl mx-auto">
        <form action="submit" className="mt-5 py-5" onSubmit={handleSubmit}>
          <div className={divStyles}>
            {error && <Error mensaje="Completa todos los campos" />}
            <label htmlFor="nombre" className={labelStyles}>
              Producto
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre de venta"
              className={inputStyles}
              // value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              defaultValue={venta.nombre}
            />
          </div>
          {/* {nombre === "" ? <p> Campo Obligatorio </p> : ""} */}
          <div className={divStyles}>
            <label htmlFor="cantidad" className={labelStyles}>
              Cantidad de unidades
            </label>
            <input
              id="cantidad"
              name="cantidad"
              type="number"
              placeholder={venta._id ? venta.valorIndividual : "Valor de venta"}
              className={inputStyles}
              // value={valor}
              onChange={(e) => setCantidad(e.target.value)}
              defaultValue={venta.cantidad}
            />
          </div>

          <div className={divStyles}>
            <label htmlFor="valor" className={labelStyles}>
              Valor Unitario
            </label>
            <input
              id="valor"
              name="valor"
              type="number"
              placeholder={venta._id ? venta.valorIndividual : "Valor de venta"}
              className={inputStyles}
              // value={valor}
              onChange={(e) => setValorIndividual(e.target.value)}
              defaultValue={venta.valorIndividual}
            />
          </div>
          <div className={divStyles}>
            <label htmlFor="valorTotal" className={labelStyles}>
              Valor Total
            </label>
            <input
              id="valorTotal"
              name="valor"
              type="number"
              // placeholder={venta._id ? venta.valorIndividual : "Valor de venta"}
              className={inputStyles}
              // value={valor}
              onChange={(e) => setValorTotal(e.target.value)}
              defaultValue={venta.valorTotal}
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
              // defaultValue={toDay}
              // defaultValue={urlActual.includes("editar") ? { toDay } : ""}
              defaultValue={venta._id ? venta.fecha : toDay}
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
              // defaultValue={venta._ ? venta.categoria : ""}
            >
              <option value=""> Efectivo </option>
              <option value="ventas"> Tarjeta </option>
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
              onChange={(e) => setCategoria(e.target.value)}
              defaultValue={venta._ ? venta.categoria : ""}
            >
              <option value="ventas"> Bebida </option>
              <option value="Comida"> Comida </option>
              <option value="Proveedor"> Otros </option>
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
                    defaultValue={venta.notas}
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
              value={venta?.nombre ? "Editar venta" : "Agregar venta"}
              type="submit"
            />
            <BotonPrimario
              Color={BotonBlancoRedondeado}
              value="Volver Atras"
              type="button"
              onClick={() => {
                navigate("/ventas"), setventa("");
              }}
              // onClick={({ handleBack }, setventa(""))}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioVenta;
