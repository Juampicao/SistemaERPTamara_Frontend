import React from "react";
import SeleccionadoGastos from "./SeleccionadoGastos";
import SeleccionadoGeneral from "./SeleccionadoGeneral";
import SeleccionadorInventario from "./SeleccionadorInventario";
import SeleccionadoVentas from "./SeleccionadoVentas";

const SelectorEstadisticas = () => {
  // Styles
  const buttonStyle =
    "nav-link block font-medium text-xs leading-tight uppercase rounded px-6 py-3 my-2 md:mr-2 focus:outline-none focus:ring-0 ";
  return (
    <div>
      <ul
        className=" nav nav-pills flex scroll-x-auto overflow-x-auto py-2"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <a
            href="#pills-general"
            class={`${buttonStyle} active`}
            id="pills-general-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-general"
            role="tab"
            aria-controls="pills-general"
            aria-selected="false"
          >
            General
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            href="#pills-home"
            className={buttonStyle}
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            Gastos
          </a>
        </li>
        <li class="nav-item" role="presentation">
          <a
            href="#pills-profile"
            className={buttonStyle}
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            Ventas
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#pills-inventario"
            className={buttonStyle}
            id="pills-inventario-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-inventario"
            role="tab"
            aria-controls="pills-inventario"
            aria-selected="false"
          >
            Inventario
          </a>
        </li>
      </ul>

      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          {/* <p className="text-center mt-2">Ventas..</p> */}
          <SeleccionadoVentas />
        </div>
        <div
          class="tab-pane fade"
          id="pills-inventario"
          role="tabpanel"
          aria-labelledby="pills-inventario-tab"
        >
          <p className="text-center mt-2">
            {" "}
            <SeleccionadorInventario />
          </p>
        </div>
        <div
          class="tab-pane fade show active"
          id="pills-general"
          role="tabpanel"
          aria-labelledby="pills-general-tab"
        >
          <SeleccionadoGeneral />
        </div>
        <div
          class="tab-pane fade "
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <SeleccionadoGastos />
        </div>
      </div>
    </div>
  );
};

export default SelectorEstadisticas;
