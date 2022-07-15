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
import * as Yup from "Yup";
import Alerta from "../../atoms/Alerta";
import StaticContext from "../../../contexts/StaticProvider";
// import { DiaActual, formatearFecha } from "../../../helpers";
// import { fechaHoy } from "../../../helpers/index";
import { BotonVer } from "../../atoms/Botones";

const FormularioGasto = () => {
  const {
    gasto,
    setGasto,
    isOpenSaveModal,
    setIsOpenSaveModal,
    isOpenErrorModal,
    setIsOpenErrorModal,
  } = useContext(StaticContext);

  const navigate = useNavigate();
  const location = useLocation();
  const urlActual = location.pathname;

  if (urlActual.includes("editar")) {
    console.log("Si");
  } else {
    console.log("no");
  }
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState();
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");

  const toDay = new Date().toISOString().substring(0, 10);
  console.log(toDay);

  // const fechaEdit = gasto.fecha.subs(0, 10);
  // console.log(fechaEdit);

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
  // });

  const { _id } = gasto;
  console.log(gasto);

  // // Llamado a la base de datos
  // useEffect(() => {
  //   const obtenerClienteAPI = async () => {
  //     try {
  //       const url = `${import.meta.env.VITE_API_URL}/gastos/${id}`;
  //       const respuesta = await fetch(url);
  //       const resultado = await respuesta.json();
  //       setGasto(resultado);
  //       console.log(gasto);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     // setIsCargando(!isCargando);
  //   };
  //   obtenerClienteAPI();
  // }, []);
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
          }
        );
        console.log(respuesta);
        setIsOpenSaveModal(!isOpenSaveModal);
        navigate("/gastos");
      } else {
        const respuesta = await axios.post(
          `${import.meta.env.VITE_API_URL}/gastos`,
          {
            nombre,
            valor,
            categoria,
            fecha,
          }
        );
        console.log(respuesta);
        setIsOpenSaveModal(true);
        navigate("/gastos");
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
      {/* <p> Fecha: {gasto.fecha.substr(0, 10)} </p> */}

      <p className="text-lg">
        {gasto._id ? `Editar el gasto: ${gasto.nombre}` : ""}
      </p>
      <p className="text-md text-slate-400 mt-1">
        {gasto._id
          ? `La fecha y la categoria por un problema aparecen vacias, pero si vas a "ver gasto" existen. Lo que modifiques aca se va a cambiar, lo que no toques,queda igual.`
          : ""}
      </p>
      <div className="bg-white rounded-lg  max-w-xl mx-auto">
        <form action="submit" className="mt-5 py-5" onSubmit={handleSubmit}>
          <div className={divStyles}>
            <label htmlFor="nombre" className={labelStyles}>
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Nombre del gasto"
              className={inputStyles}
              // value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              defaultValue={gasto.nombre}
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
              // value={valor}
              onChange={(e) => setValor(e.target.value)}
              defaultValue={gasto.valor}
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
              // defaultValue={gasto._id ? gasto.fecha.substr(0, 10) : toDay}
              // defaultValue={toDay}

              // defaultValue={
              //   urlActual.includes("editar")
              //     ? gasto.fecha.substr(0, 10)
              //     : { toDay }
              // }
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
              // type="tel"
              placeholder=""
              className={inputStyles}
              // value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              defaultValue={gasto.categoria}
            >
              <option value=""> -- Select -- </option>
              <option value="Gastos" selected>
                {" "}
                Gastos Varios{" "}
              </option>
              <option value="Comida"> Comida </option>
              <option value="Proveedor"> Proveedores </option>
            </select>
          </div>

          {/* <div className={divStyles}>
            <label htmlFor="categoria" className={labelStyles}>
              {" "}
              Notas{" "}
            </label>
            <textarea
              name=""
              id=""
              cols=""
              rows=""
              className="w-full border  h-28 p-2 "
            ></textarea>
          </div> */}

          {/* Prueba acordion */}
          <div class="accordion" id="accordionExample">
            <div class="accordion-item ">
              <h2 class="accordion-header mb-0" id="headingOne">
                <button
                  class="
        accordion-button
        relative
        flex
        items-center
        w-full
        py-4
        px-5
        text-base text-black text-left
        bg-white
        rounded-none
        transition
        focus:outline-none
        
      "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
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
                  {/* <label htmlFor="categoria" className={labelStyles}>
                    {" "}
                    Notas{" "}
                  </label> */}
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows=""
                    className="w-full border  h-28 p-2 "
                    placeholder="Escribe alguna nota..."
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

FormularioGasto.defaultProps = {
  gasto: {},
  // cargando: false,
};

export default FormularioGasto;

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
