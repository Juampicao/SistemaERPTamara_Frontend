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
      <p className="mt-3">
        Aun no funciona el autocompletado del producto a vender. Toda las
        "cantidades" que vendas aca, van a disminuir sobre el primer producto
        que tenemos en inventario stock.{" "}
        <span className="font-bold"> "Producto Ejemplo"</span>
      </p>
      <FormularioVenta />
    </div>
  );
};

export default NuevaVenta;
