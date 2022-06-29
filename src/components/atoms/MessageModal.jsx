import React, { useContext } from "react";
import "./MessageModal.css";

import Boton from "./Boton";

import iconoCerrar from "../../img/iconoCerrar.png";
import iconoExclamacion from "../../img/iconoExclamacion.png";

import StaticContext from "../../contexts/StaticProvider";

const MessageModal = ({
  titleModal,
  subtitleModal,
  buttonLabel,
  buttonLabel2,
}) => {
  const { isOpenDeleteModal, setIsOpenDeleteModal } = useContext(StaticContext);

  const handleClick = () => {
    console.log("Eliminando..");
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const handleClick2 = () => {
    console.log("Volviendo..");
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  const handleClickClose = () => {
    setIsOpenDeleteModal(!isOpenDeleteModal);
  };

  return (
    <div className="flex">
      <div
        data-aos="fade-right"
        className="MessageModal  border  shadow-lg rounded-md bg-white"
      >
        <button onClick={handleClickClose}>
          <img
            src={iconoCerrar}
            alt="cerrar"
            className=" hover:scale-110 hover:duration-200"
          />
        </button>
        <div className="mb-1 text-center">
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-slate-200">
            <img
              src={iconoExclamacion}
              alt="cerrar"
              className=" hover:scale-110 hover:duration-200 h-6"
            />
          </div>
          <h3 className="text-lg mt-2 leading-6 font-medium text-gray-900">
            {titleModal}
          </h3>
          <div className="mt-2 px-7 py-3">
            <p className="text-sm text-gray-500">{subtitleModal}</p>
          </div>
          {/* <div className="items-center px-4 py-3"> */}
          <div className="sm:flex  md:space-x-3 ">
            <button
              onClick={handleClick}
              className="uppercase px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md w-full shadow-sm hover:bg-red-600 hover:scale-105 hover:duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-red-700 active:text-white"
            >
              {buttonLabel}
            </button>
            <button
              onClick={handleClick2}
              className="uppercase px-4 py-2 bg-slate-500 text-white text-sm font-medium rounded-md w-full shadow-sm hover:bg-slate-600 hover:scale-105 hover:duration-200 focus:outline-none focus:ring-2 focus:ring-green-300 active:bg-slate-700 active:text-white"
            >
              {buttonLabel2}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
