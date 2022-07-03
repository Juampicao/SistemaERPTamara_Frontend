import React, { Children, useContext } from "react";
import "./MessageModal.css";

import iconoCerrar from "../../img/iconoCerrar.png";
import iconoExclamacion from "../../img/iconoExclamacion.png";

import StaticContext from "../../contexts/StaticProvider";
import { BotonEliminar, BotonModal } from "./Botones";

import {
  BotonAzulRedondeado,
  BotonVerdeClasico,
  BotonVerdeRedondeado,
  BotonPrimaryRedondeado,
  BotonRojoRedondeado,
} from "../../helpers/colores";

const MessageModal = ({
  titleModal,
  subtitleModal,
  buttonLabel,
  buttonLabel2,
  onClick,
  // onClick2,
  Children,
  // handleClickClose,
}) => {
  const { isOpenConfirmModal, setIsOpenConfirmModal } =
    useContext(StaticContext);

  const onClick2 = () => {
    console.log("Volviendo..");
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  const handleClickClose = () => {
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  return (
    <div className="flex ">
      <div
        data-aos="fade-right"
        className="MessageModal  border   shadow-lg rounded-md bg-white m-5 p-10 max-w-xs max-h-[300px] "
      >
        <button onClick={handleClickClose}>
          <img
            src={iconoCerrar}
            alt="cerrar"
            className=" hover:scale-110 hover:duration-200 "
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
          {Children}
          <div className="space-y-2 xs:space-x-2 ">
            <BotonModal
              Color={BotonRojoRedondeado}
              value="Eliminar"
              onClick={onClick}
            >
              {buttonLabel}
            </BotonModal>

            <BotonModal
              value="Cancelar"
              Color={BotonPrimaryRedondeado}
              onClick={onClick2}
            >
              {buttonLabel2}
            </BotonModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageModal;
