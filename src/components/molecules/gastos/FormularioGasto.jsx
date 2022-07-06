// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import StaticContext from "../../../contexts/StaticProvider";
// import { BotonBlancoClasicoSinZoom } from "../../../helpers/colores";
// import { BotonPrimario } from "../../atoms/Botones";
// import { ModalGuardado } from "../../atoms/ModalNotificacion";

// const FormularioGasto = () => {
//   const {
//     setIsOpenSaveModal,
//     isOpenSaveModal,
//     gasto,
//     setGasto,
//     gastos,
//     setGastos,
//     totalGastos,
//     setTotalGastos,
//   } = useContext(StaticContext);
//   //Estados Locales.
//   const [nombre, setNombre] = useState("");
//   const [valor, setValor] = useState("");
//   const [categoria, setCategoria] = useState("");
//   const [fecha, setFecha] = useState("");

//   //Use navigate
//   const navigate = useNavigate();

//   //   Validacion del formulario
//   const [esTrue, setIsTrue] = useState(true);

//   // UseEffect
//   useEffect(() => {
//     if (Object.keys(gasto).length > 0) {
//       setNombre(gasto.nombre);
//       setValor(gasto.valor);
//       setCategoria(gasto.categoria);
//       setFecha(gasto.fecha);
//     }
//   }, [gasto]);

//   // ObjetoGasto
//   const objetoGasto = {
//     nombre,
//     valor,
//     categoria,
//     fecha,
//   };

//   // Validar Formulario
//   function validarForm() {
//     if ([nombre, valor, categoria].includes("")) {
//       setMensaje("Todos los campos son obligatorios");
//       setTimeout(() => {
//         setMensaje("");
//       }, 3000);
//     }
//   }

//   // Resetear Formulario
//   function resetearForm() {
//     setNombre("");
//     setValor("");
//     setCategoria("");
//     setFecha("");
//   }

//   // Boton Enviar Formulario
//   const handleNuevoGasto = async (e, id) => {
//     e.preventDefault();
//     try {
//       let respuesta;
//       if (gasto.id) {
//         // Editando un registro
//         const url = `http://localhost:4000/gastos/${gasto.id}`;
//         respuesta = await fetch(url, {
//           method: "PUT",
//           body: JSON.stringify(objetoGasto),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//       } else {
//         // Nuevo Registro
//         const url = `http://localhost:4000/gastos/`;
//         respuesta = await fetch(url, {
//           method: "POST",
//           body: JSON.stringify(objetoGasto),
//           headers: {
//             "Content-Type": "application/json",
//           },
//         });
//         // setTotalGastos(...totalGastos, valor);
//         resetearForm();
//       }

//       await respuesta.json();
//       // const arrayGastos = gastos.filter((gasto) => gasto.id !== id);
//       // setGastos(arrayGastos);
//       //   navigate("/ventas");
//     } catch (error) {
//       console.log(error);
//     }
//     // resetearForm();
//   };

//   // styles

//   const InputStyle = "p-3 bg-slate-50 space-x-3";
//   const PlaceHolderStyle = "border-2 p-2  placeholder-gray-400 rounded-md";
//   return (
//     <div>
//       <form action="submit" onSubmit={handleNuevoGasto}>
//         <div className={InputStyle}>
//           <label htmlFor="nombre"> Nombre Gasto </label>
//           <input
//             className={PlaceHolderStyle}
//             type="text"
//             name=""
//             id="nombre"
//             placeholder="Nombre"
//             value={nombre}
//             onChange={(e) => setNombre(e.target.value)}
//           />
//         </div>
//         <div className={InputStyle}>
//           <label htmlFor="valor"> Monto Total: </label>
//           <input
//             className={PlaceHolderStyle}
//             type="number"
//             name=""
//             id="valor"
//             placeholder=" Valor"
//             value={valor}
//             onChange={(e) => setValor(Number(e.target.value))}
//           />
//         </div>
//         <div className={InputStyle}>
//           <label htmlFor="fecha" className="">
//             Fecha Gasto
//           </label>

//           <input
//             className={PlaceHolderStyle}
//             id="fecha"
//             type="date"
//             value={fecha}
//             onChange={(e) => setFecha(e.target.value)}
//           />
//         </div>

//         <div className={InputStyle}>
//           <label htmlFor="producto"> Seleccionar Producto </label>
//           <input
//             className={PlaceHolderStyle}
//             type="text"
//             name=""
//             id="producto"
//             placeholder=" Producto"
//             list="pruebaLista"
//             // value={valor}
//             // onChange={(e) => setValor(e.target.value)}
//           />
//         </div>
//         <datalist id="pruebaLista">
//           <option value="Jamon"></option>
//           <option value="Queso"></option>
//           <option value="Marimba"></option>
//         </datalist>
//         <div className={InputStyle}>
//           <label htmlFor="categoria"> Categoria </label>
//           <select
//             className={PlaceHolderStyle}
//             name=""
//             id="categoria"
//             value={categoria}
//             onChange={(e) => setCategoria(e.target.value)}
//           >
//             <option value=""> -- Select -- </option>
//             <option value="Gastos"> Gastos Varios </option>
//             <option value="Comida"> Comida </option>
//             <option value="Proveedor"> Proveedores </option>
//           </select>

//           <BotonPrimario
//             value="Envio"
//             Color={BotonBlancoClasicoSinZoom}
//             onClick={handleNuevoGasto}
//           />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FormularioGasto;

import React, { useContext, useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import Header from "../Header";
import { BotonPrimario } from "../../atoms/Botones";
import {
  BotonAzulClasico,
  BotonBlancoClasico,
  BotonBlancoClasicoSinZoom,
  BotonNegroClasico,
  BotonRojoClasico,
} from "../../../helpers/colores";
import * as Yup from "Yup";
import Alerta from "../../atoms/Alerta";
import { useNavigate } from "react-router-dom";
import StaticContext from "../../../contexts/StaticProvider";

const FormularioGasto = () => {
  const { gasto, setGasto } = useContext(StaticContext);
  const navigate = useNavigate();

  // Nuevo Schema
  const nuevoGastoSchema = Yup.object().shape({
    nombre: Yup.string().required(`El nombre es Obligatorio`),
    valor: Yup.number()
      .required(`El monto es Obligatorio`)
      .positive("Número no válido")
      .integer("Número no válido")
      .typeError("El Número no es válido"),
    categoria: ``,
    fecha: ``,
  });
  // Funcion Submit
  // const handleSubmit = (values) => {
  //   console.log(values);
  //   navigate("/gastos");
  // };

  const { id, nombre, valor, cantidad, categoria } = gasto;

  // Funcion Submit
  const handleSubmit = async (valores) => {
    try {
      let respuesta;
      if (id) {
        // Editando un registro
        const url = `http://localhost:4000/gastos/${id}`;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // Nuevo Registro
        const url = `http://localhost:4000/gastos/`;
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(valores),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }

      await respuesta.json();
      navigate("/gastos");
    } catch (error) {
      console.log(error);
    }
  };

  // styles
  const labelStyles = "text-slate-900 font-bold capitalize ";
  const inputStyles =
    "block w-full p-2 px-4 bg-gray-100 rounded-md mt-1 capitalize";
  const divStyles = "p-5  space-x-1";
  return (
    <div>
      <div className="bg-white ">
        <Formik
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
                    Color={BotonAzulClasico}
                    value={gasto?.nombre ? "Editar Gasto" : "Agregar Gasto"}
                    type="submit"
                  />
                  <BotonPrimario
                    Color={BotonBlancoClasico}
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
        </Formik>
      </div>
    </div>
  );
};

FormularioGasto.defaultProps = {
  gasto: {},
  // cargando: false,
};

export default FormularioGasto;
