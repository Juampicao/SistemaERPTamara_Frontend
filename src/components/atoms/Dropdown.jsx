import React from "react";
import { BotonBlancoRedondeado } from "../../helpers/colores";

const Prueba = ({ link1, link2, link3, onClick1 }) => {
  // styles
  const optionStyles =
    "dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100";
  return (
    <div>
      <div className="flex justify-center">
        <div>
          <div className="dropdown relative">
            <button
              className={BotonBlancoRedondeado}
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Ordenar
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-down"
                className="w-2 ml-2"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
              >
                <path
                  fill="currentColor"
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </svg>
            </button>
            <ul
              className=" dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none
        "
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <button className={optionStyles} onClick={onClick1}>
                  Ordenar A-Z
                </button>
              </li>
              <li>
                <a className={optionStyles} href="#">
                  Ordenar Z-A
                </a>
              </li>
              <li>
                <a className={optionStyles} href="#">
                  Stock
                </a>
              </li>
              <li>
                <a className={optionStyles} href="#">
                  Mayor Precio
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prueba;
