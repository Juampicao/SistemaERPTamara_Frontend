import React from "react";
import Header from "../Header";
import FormularioVenta from "./FormularioVenta";
import FormularioVentaConStock from "./FormularioVentaConStock";

const NuevaVenta = () => {
  return (
    <div>
      <Header title="Nueva Venta" />

      <p className="mt-2">
        Selecciona si el producto a vender es nuevo o existente.
      </p>
      <div className="flex mt-3">
        <ul
          class="mx-auto nav nav-pills flex flex-col md:flex-row flex-wrap list-none pl-0 mb-4"
          id="pills-tab"
          role="tablist"
        >
          <li class="nav-item" role="presentation">
            <a
              href="#pills-home"
              class=" nav-link block font-medium text-xs leading-tight uppercase rounded px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Producto en Stock
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              href="#pills-profile"
              class=" nav-link block font-medium text-xs leading-tight uppercase rounded px-6 py-3 my-2 md:mx-2 focus:outline-none focus:ring-0  underline underline-offset-4 decoration-slate-300"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Nuevo Producto
            </a>
          </li>
        </ul>
      </div>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <FormularioVenta />
        </div>
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <FormularioVentaConStock />
        </div>
      </div>
    </div>
  );
};

export default NuevaVenta;
