import React, { useContext } from "react";
import Fernet from "../../../img/fernet.jpg";
import FormularioGasto from "./FormularioGasto";
import StaticContext from "../../../contexts/StaticProvider";

const ModalGasto = ({ onClick }) => {
  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
     
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Nueva Gasto
      </button>

      {/* <!-- Modal --> */}
      <div
        className=" modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className=" modal-dialog relative w-auto pointer-events-none">
          <div className=" modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalLabel"
              >
                Gastos
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1  text-black border-none rounded-none opacity-0 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
                value="hola"
              ></button>
            </div>
            {/* <div className="modal-body relative p-4">Fernet 750</div> */}
            {/* <div className="my-5">
              <p className="pl-3 mt-2"> Producto: Fernet 750ml</p>
              <img src={Fernet} className="h-32" alt="" />
              <p className="pl-3 mt-2"> Precio: $1250</p>
              <p className="pl-3 mt-2"> Cantidad: 1</p>
              <p className="pl-3 mt-2"> Metodo: Efectivo</p>
            </div> */}
            <FormularioGasto />

            <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button
                type="button"
                className="px-6
          py-2.5
          bg-green-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-green-700 hover:shadow-lg
          focus:bg-green-800 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-green-500 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                data-bs-dismiss="modal"
                onClick={onClick}
              >
                Registrar Gasto
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

export default ModalGasto;
