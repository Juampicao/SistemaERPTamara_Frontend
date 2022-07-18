import React from "react";
import {
  BotonAzulClasico,
  BotonRojoRedondeado,
  BotonVerdeRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../Botones";
import "./PruebaModalin.css";

const ModalReutilizable = ({ title, children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();

  // function closeModal() {
  //   const cerrarModal = (document.getElementById("article").style.display =
  //     "none");
  //   cerrarModal;
  // }
  return (
    <div className="">
      <article
        id="article"
        className="modal is-open bg-half-transparent w-screen fixed nav-item"
        onClick={closeModal}
      >
        <div
          id="modal"
          className="modal-container border rounded-lg "
          onClick={handleModalContainerClick}
        >
          <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-300 rounded-t-md">
            <h5
              className="text-xl font-medium leading-normal text-gray-800"
              id="exampleModalLabel"
            >
              {title}
            </h5>
          </div>
          <button className="modal-close" onClick={closeModal}>
            X
          </button>
          <div className="p-3">{children}</div>
          {/* <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-300 rounded-b-md space-x-2">
            <BotonPrimario Color={BotonVerdeRedondeado} value="Registrar" />
            <BotonPrimario Color={BotonRojoRedondeado} value="Cancelar" />
          </div> */}
        </div>
      </article>
    </div>
  );
};

export default ModalReutilizable;
