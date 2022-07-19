import React from "react";
import Header from "../Header";
import FormularioVenta from "./FormularioVenta";

const NuevaVenta = () => {
  return (
    <div>
      <Header title="Nueva Venta" />
      <p className="mt-3">
        Llena los siguientes campos para registrar un nueva venta.
      </p>
      <FormularioVenta />
    </div>
  );
};

export default NuevaVenta;
