import React from "react";
import Header from "../Header";
import FormularioVenta from "./FormularioVenta";

const NuevaVenta = () => {
  return (
    <div>
      <Header title="Nueva Venta" />

      <p className="mt-1 space-y-3">
        Selecciona el producto que vas a vender.{" "}
        <span className="text-slate-400">
          {" "}
          (las cantidades todavia no disminuyen solas).
        </span>
        <p>
          Toda las "cantidades" que vendas aca, van a disminuir sobre el primer
          producto que tenemos en inventario stock. .
          <span className="font-bold"> "Producto Ejemplo"</span>
        </p>
      </p>
      <p className="mt-1">
        Llena los siguientes campos para registrar un nueva venta.
      </p>
      <FormularioVenta />
    </div>
  );
};

export default NuevaVenta;
