import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import StaticContext from "../../../contexts/StaticProvider";
import { BotonSecundario } from "../../atoms/Botones";
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
    }
  }, [gasto]);

  // ObjetoGasto
  const objetoGasto = {
    nombre,
    valor,
    categoria,
  };

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
      }

      await respuesta.json();
      //   navigate("/ventas");
    } catch (error) {
      console.log(error);
    }
  };

  // styles

  const InputStyle = "p-3 bg-slate-50 space-x-3";
  return (
    <div>
      <form action="submit" onSubmit={handleNuevoGasto}>
        <div className={InputStyle}>
          <label htmlFor="nombre"> Nombre Gasto </label>
          <input
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
            type="number"
            min="1"
            pattern="[0-9]{0,5}"
            name=""
            id="valor"
            placeholder=" Valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
          />
        </div>
        <div className={InputStyle}>
          <label htmlFor="categoria"> Categoria </label>
          <select
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
          <BotonSecundario value="Enviar" onClick={handleNuevoGasto} />
        </div>
      </form>
    </div>
  );
};

export default FormularioGasto;
