import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ColorAzul,
  ColorNegro,
  ColorRojo,
  ColorVerde,
} from "../../helpers/colores";
import IconAdd from "../../img/newIcons/iconAdd.png";

const BotonFlotante = () => {
  const navigate = useNavigate();

  // Styles
  const ButtonStyle =
    "px-3 flex py-2.5  hover:scale-105 font-medium text-xs leading-tight uppercase  transition duration-200 ease-in-out hover:shadow-lg active:shadow-lg  focus:outline-none hover:duration-200  cursor-pointer items-center rounded-full origin-left ";

  const ButtonAdd = "bg-black hover:bg-slate-900 active:bg-slate-800";

  return (
    <div>
      {/* {abrirBoton ? <p> Abierto</p> : <p> Cerrado</p>} */}
      <div className="flex justify-center absolute z-50 right-0  p-5 md:pr-10 pb-5 bottom-0 ">
        <div>
          <div className="dropup relative ">
            <button
              className={`${ButtonStyle}, ${ButtonAdd}`}
              type="submit"
              value="Agregar"
              id="dropdownMenuButton1u"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img src={IconAdd} alt="" className="h-10 " />
            </button>

            <ul
              class=" dropdown-menu min-w-max absolute hidden text-base z-50 float-left py-2 list-none text-left rounded-lg  mt-1  m-0 bg-clip-padding border-none space-y-3 origin-left duration-300
        "
              aria-labelledby="dropdownMenuButton1u"
            >
              <button
                className={`${ButtonStyle}, ${ColorVerde}`}
                onClick={() => navigate("/ventas/nuevaventa")}
                type="submit"
                value="Agregar"
                id="dropdownMenuButton1u"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={IconAdd} alt="" className="h-6 " />
                <p className="px-2">Venta</p>
              </button>
              <button
                className={`${ButtonStyle}, ${ColorRojo}`}
                onClick={() => navigate("/gastos/nuevogasto")}
                type="submit"
                value="Agregar"
                id="dropdownMenuButton1u"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={IconAdd} alt="" className="h-6 " />
                <p className="px-2">Gasto</p>
              </button>
              <Link
                to="gastos/nuevogasto"
                className={`${ButtonStyle}, ${ColorAzul}`}
                onClick={() => navigate("/gastos/nuevogasto")}
                id="dropdownMenuButton1u"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={IconAdd} alt="" className="h-6 " />
                <p className="px-2">Stock</p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotonFlotante;
