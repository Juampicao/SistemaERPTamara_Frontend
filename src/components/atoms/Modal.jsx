import React from "react";
import {
  BotonClasico,
  ColorAzul,
  BotonVerdeRedondeado,
} from "../../helpers/colores";
import Fernet from "../../img/fernet.jpg";
import {} from "./Botones";

const Modal = ({ onClick }) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className={`${BotonClasico}, ${ColorAzul}`}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Nueva venta
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Ventas
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* <div className="modal-body relative p-4">Fernet 750</div> */}
            <div className="my-5">
              <p className="pl-3 mt-2"> Producto: Fernet 750ml</p>
              <img src={Fernet} className="h-32" alt="" />
              <p className="pl-3 mt-2"> Precio: $1250</p>
              <p className="pl-3 mt-2"> Cantidad: 1</p>
              <p className="pl-3 mt-2"> Metodo: Efectivo</p>
            </div>

            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className={BotonVerdeRedondeado}
                data-bs-dismiss="modal"
                onClick={onClick}
              >
                Vender
              </button>
              <button
                type="button"
                className="px-6
      py-2.5
      bg-red-700
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-red-800 hover:shadow-lg
      focus:bg-red-900 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-red-500 active:shadow-lg
      transition
      duration-150
      ease-in-out
      ml-1"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
