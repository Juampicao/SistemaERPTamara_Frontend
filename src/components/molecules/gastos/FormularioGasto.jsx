import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";
import { BotonBlancoClasicoSinZoom } from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";
import { ModalGuardado } from "../../atoms/ModalNotificacion";

const FormularioGasto = () => {
  const {
    setIsOpenSaveModal,
    isOpenSaveModal,
    gasto,
    setGasto,
    totalGastos,
    setTotalGastos,
  } = useContext(StaticContext);
  //Estados Locales.
  const [nombre, setNombre] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");
  const [fecha, setFecha] = useState("");

  //Use navigate
  const navigate = useNavigate();

  //   Validacion del formulario
  const [esTrue, setIsTrue] = useState(true);

  // UseEffect
  useEffect(() => {
    if (Object.keys(gasto).length > 0) {
      setNombre(gasto.nombre);
      setValor(gasto.valor);
      setCategoria(gasto.categoria);
      setFecha(gasto.fecha);
    }
  }, [gasto]);

  // ObjetoGasto
  const objetoGasto = {
    nombre,
    valor,
    categoria,
    fecha,
  };

  // Validar Formulario
  function validarForm() {
    if ([nombre, valor, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje("");
      }, 3000);
    }
  }

  // Resetear Formulario
  function resetearForm() {
    setNombre("");
    setValor("");
    setCategoria("");
    setFecha("");
  }

  // Boton Enviar Formulario
  const handleNuevoGasto = async (e) => {
    e.preventDefault();
    try {
      let respuesta;
      if (gasto.id) {
        // Editando un registro
        const url = `http://localhost:4000/gastos/${gasto.id}`;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(objetoGasto),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // Nuevo Registro
        const url = `http://localhost:4000/gastos/`;
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(objetoGasto),
          headers: {
            "Content-Type": "application/json",
          },
        });
        // setTotalGastos(...totalGastos, valor);
        resetearForm();
      }

      await respuesta.json();
      //   navigate("/ventas");
    } catch (error) {
      console.log(error);
    }
    // resetearForm();
  };

  // styles

  const InputStyle = "p-3 bg-slate-50 space-x-3";
  const PlaceHolderStyle = "border-2 p-2  placeholder-gray-400 rounded-md";
  return (
    <div>
      <form action="submit" onSubmit={handleNuevoGasto}>
        <div className={InputStyle}>
          <label htmlFor="nombre"> Nombre Gasto </label>
          <input
            className={PlaceHolderStyle}
            type="text"
            name=""
            id="nombre"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className={InputStyle}>
          <label htmlFor="valor"> Monto Total: </label>
          <input
            className={PlaceHolderStyle}
            type="number"
            name=""
            id="valor"
            placeholder=" Valor"
            value={valor}
            onChange={(e) => setValor(Number(e.target.value))}
          />
        </div>
        <div className={InputStyle}>
          <label htmlFor="fecha" className="">
            Fecha Gasto
          </label>

          <input
            className={PlaceHolderStyle}
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>

        <div className={InputStyle}>
          <label htmlFor="producto"> Seleccionar Producto </label>
          <input
            className={PlaceHolderStyle}
            type="text"
            name=""
            id="producto"
            placeholder=" Producto"
            list="pruebaLista"
            // value={valor}
            // onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <datalist id="pruebaLista">
          <option value="Jamon"></option>
          <option value="Queso"></option>
          <option value="Marimba"></option>
        </datalist>
        <div className={InputStyle}>
          <label htmlFor="categoria"> Categoria </label>
          <select
            className={PlaceHolderStyle}
            name=""
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value=""> -- Select -- </option>
            <option value="Gastos"> Gastos Varios </option>
            <option value="Comida"> Comida </option>
            <option value="Proveedor"> Proveedores </option>
          </select>

          <BotonPrimario
            value="Envio"
            Color={BotonBlancoClasicoSinZoom}
            onClick={handleNuevoGasto}
          />
        </div>
      </form>
    </div>
  );
};

export default FormularioGasto;
