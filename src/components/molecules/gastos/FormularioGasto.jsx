import React, { useState } from "react";

const FormularioGasto = () => {
  const [nombreGasto, setNombreGasto] = useState("");
  const [valor, setValor] = useState("");
  const [categoria, setCategoria] = useState("");

  // styles

  const InputStyle = "p-3 bg-slate-50 space-x-3";
  return (
    <div>
      <form action="submit">
        <div className={InputStyle}>
          <label htmlFor="nombre"> Nombre Gasto </label>
          <input
            type="text"
            name=""
            id="nombre"
            placeholder="Nombre"
            value={nombreGasto}
            onChange={(e) => setNombreGasto(e.target.value)}
          />
        </div>
        <div className={InputStyle}>
          <label htmlFor="nombre"> Monto Total: </label>
          <input
            type="num"
            name=""
            id="nombre"
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
            <option value="Ahorro"> Gastos Varios </option>
            <option value="Comida"> Comida </option>
            <option value="Varios"> Proveedores </option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormularioGasto;
