import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import axios from "axios";

import { BotonPrimario } from "../../atoms/Botones";
import {
  BotonAzulClasico,
  BotonAzulRedondeado,
  BotonBlancoClasico,
  BotonBlancoClasicoSinZoom,
  BotonBlancoRedondeado,
} from "../../../helpers/colores";
// import * as Yup from "Yup";
// import Alerta from "../../atoms/Alerta";
import StaticContext from "../../../contexts/StaticProvider";

import { BotonVer } from "../../atoms/Botones";
import Error from "../../atoms/Error";
import { toDay } from "../../../helpers";

const FormularioGasto = () => {
  const {
    gasto,
    setGasto,
    gastos,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  // Resetear el state Gasto.
  if (urlActual.includes("nuevogasto")) {
    setGasto("");
  }

  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");
  const [notas, setNotas] = useState("");

  const [error, setError] = useState(false);

  const { _id } = gasto;

  useEffect(() => {
    if (gasto?._id) {
      setNombre(gasto.nombre);
      setValor(gasto.valor);
      setCategoria(gasto.categoria);
      setFecha(gasto.fecha?.split("T")[0]);
      setNotas(gasto.notas);
      return;
    }
    setNombre("");
    setValor("");
    setCategoria("Gastos");
    setFecha(toDay);
    setNotas("");
  }, [gasto]);

  // Prueba con AXIOS
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (_id) {
        const respuesta = await axios.put(
          `${import.meta.env.VITE_API_URL}/gastos/${_id}`,
          {
            nombre,
            valor,
            categoria,
            fecha,
            notas,
          }
        );
        console.log(respuesta);
        setGasto("");
        navigate("/gastos");
        setIsOpenSaveModal(true);
      } else {
        // Validacion del formulario
        if ([nombre, valor, fecha, categoria].includes("")) {
          console.log("Completa todos los casilleros por favor.");
          setError(true);
        }
        const respuesta = await axios.post(
          `${import.meta.env.VITE_API_URL}/gastos`,
          {
            nombre,
            valor,
            categoria,
            fecha,
            notas,
          }
        );
        console.log(respuesta);
        navigate("/gastos");
        setIsOpenSaveModal(true);
        setGasto("");
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
      <p className="text-lg">
        {gasto._id ? `Editar el gasto: ${gasto.nombre}` : ""}
      </p>
      <div className="bg-white rounded-lg  max-w-xl mx-auto">
        <form action="submit" className="mt-5 py-5" onSubmit={handleSubmit}>
          <div className={divStyles}>
            {error && <Error mensaje="Completa todos los campos" />}
            <label htmlFor="nombre" className={labelStyles}>
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre del gasto"
              className={inputStyles}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className={divStyles}>
            <label htmlFor="valor" className={labelStyles}>
              Monto
            </label>
            <input
              id="valor"
              name="valor"
              type="number"
              placeholder={gasto._id ? gasto.valor : "Valor del gasto"}
              className={inputStyles}
              value={valor}
              onChange={(e) => setValor(e.target.value)}
            />
          </div>
          <div className={divStyles}>
            <label htmlFor="fecha" className={labelStyles}>
              Fecha
            </label>
            {gasto?._id ? (
              <p className="text-slate-400 ">
                {" "}
                La fecha no aparece pero existe.En "Ver gasto" aparece bien.
              </p>
            ) : (
              ""
            )}
            <input
              id="fecha"
              name="fecha"
              type="date"
              placeholder=""
              className={inputStyles}
              onChange={(e) => setFecha(e.target.value)}
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
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value=""> -- Select -- </option>
              <option value="Gastos"> Gastos Varios </option>
              <option value="Comida"> Comida </option>
              <option value="Proveedor"> Proveedores </option>
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
                    value={gasto.notas}
                    onChange={(e) => setNotas(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* fin prueba acordeon */}

          <div className="py-5 flex justify-center space-x-3">
            {gasto._id ? (
              <BotonPrimario
                Color={BotonBlancoRedondeado}
                value="Ver"
                type="button"
                onClick={() => navigate(`/gastos/${_id}`)}
              />
            ) : (
              ""
            )}
            <BotonPrimario
              Color={BotonAzulRedondeado}
              value={gasto?.nombre ? "Editar Gasto" : "Agregar Gasto"}
              type="submit"
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
        </form>
      </div>
    </div>
  );
};

// FormularioGasto.defaultProps = {
//   gasto: {},
//   // cargando: false,
// };

export default FormularioGasto;

// Nuevo Schema
// const nuevoGastoSchema = Yup.object().shape({
//   nombre: Yup.string().required(`El nombre es Obligatorio`),
//   valor: Yup.number()
//     .required(`El monto es Obligatorio`)
//     .positive("Número no válido")
//     .integer("Número no válido")
//     .typeError("El Número no es válido"),
//   categoria: ``,
//   fecha: ``,

{
  /* <Formik
        initialValues={{
          nombre: gasto?.nombre ?? "",
          valor: gasto?.valor ?? "",
          categoria: gasto?.categoria ?? "Gastos",
          fecha: gasto?.fecha ?? "2022-07-05",
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={nuevoGastoSchema}
        // El modelo que va a respetar (cambiar por otro si hace falta.)
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-10 ">
              <div className={divStyles}>
                <label htmlFor="nombre" className={labelStyles}>
                  Nombre
                </label>
                <Field
                  id="nombre"
                  name="nombre"
                  type="text"
                  placeholder="Tipo de gasto"
                  className={inputStyles}
                />

                {errors.nombre && touched.nombre ? (
                  <Alerta>{errors.nombre}</Alerta>
                ) : null}
              </div>
              <div className={divStyles}>
                <label htmlFor="valor" className={labelStyles}>
                  Monto
                </label>
                <Field
                  id="valor"
                  name="valor"
                  type="number"
                  placeholder="Monto"
                  className={inputStyles}
                />
                {errors.valor && touched.valor ? (
                  <Alerta>{errors.valor}</Alerta>
                ) : null}
              </div>
              <div className={divStyles}>
                <label htmlFor="categoria" className={labelStyles}>
                  Categoria
                </label>
                <Field
                  as="select"
                  id="categoria"
                  name="categoria"
                  type="tel"
                  placeholder=""
                  className={inputStyles}
                >
                  <option value=""> -- Select -- </option>
                  <option value="Gastos"> Gastos Varios </option>
                  <option value="Comida"> Comida </option>
                  <option value="Proveedor"> Proveedores </option>
                </Field>
              </div>
              <div className={divStyles}>
                <label htmlFor="fecha" className={labelStyles}>
                  Fecha
                </label>
                <Field
                  id="fecha"
                  name="fecha"
                  type="date"
                  placeholder=""
                  className={inputStyles}
                />
              </div>
              <div className="py-5 flex justify-center space-x-3">
                <BotonPrimario
                  Color={BotonAzulRedondeado}
                  value={gasto?.nombre ? "Editar Gasto" : "Agregar Gasto"}
                  type="submit"
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
            </Form>
          );
        }}
      </Formik> */
}
