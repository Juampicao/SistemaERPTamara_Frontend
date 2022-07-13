import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { fechaHoy } from "../../../helpers/index";

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

  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState();
  const [categoria, setCategoria] = useState("Gastos");
  const [fecha, setFecha] = useState("2022-07-01");

  // console.log(formatearFecha(DiaActual));

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
  const labelStyles = "text-slate-900 font-bold capitalize ";
  const inputStyles =
    "block w-full p-2 px-4 bg-gray-100 rounded-md mt-1 capitalize";
  const divStyles = "p-5  space-x-1";
  return (
    <div>
      <div className="bg-white rounded-lg  max-w-xl mx-auto">
        {/* <Formik
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
        </Formik> */}

        <form action="submit" className="mt-10" onSubmit={handleSubmit}>
          <div className={divStyles}>
            <label htmlFor="nombre" className={labelStyles}>
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Tipo de gasto"
              className={inputStyles}
              value={nombre}
              // value={gasto._id ? gasto.nombre : nombre}
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
              placeholder="Valor del gasto"
              className={inputStyles}
              value={valor}
              // value={gasto._id ? gasto.valor : valor}
              onChange={(e) => setValor(e.target.value)}
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
              value={fecha}
              // value={gasto._id ? gasto.fecha : fecha}
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
              type="tel"
              placeholder=""
              className={inputStyles}
              value={categoria}
              // value={gasto._id ? gasto.categoria : categoria}
              onChange={(e) => setCategoria(e.target.value)}
            >
              <option value=""> -- Select -- </option>
              <option value="Gastos"> Gastos Varios </option>
              <option value="Comida"> Comida </option>
              <option value="Proveedor"> Proveedores </option>
            </select>
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
