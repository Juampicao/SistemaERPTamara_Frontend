import React from "react";
import Header from "../Header";
import FormularioGasto from "./FormularioGasto";

const NuevoGasto = () => {
  return (
    <div>
      <Header title="Nuevo Gasto" />
      <p className="mt-3">
        Llena los siguientes campos para registrar un nuevo gasto.
      </p>
      <FormularioGasto />
    </div>
  );
};

export default NuevoGasto;
