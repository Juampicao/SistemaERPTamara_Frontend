import React, { useContext, useState } from "react";
import Iconos from "../atoms/Iconos";
import Header from "../molecules/Header";

import { ModalGuardado } from "../atoms/ModalNotificacion";
import VerVenta from "../molecules/ventas/VerVenta";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import { BotonPrimario } from "../atoms/Botones";
import {
  BotonBlancoClasico,
  BotonClasico,
  BotonBlancoRedondeado,
} from "../../helpers/colores";

import "./../atoms/BarraSearch.css";

import UltimoModal from "../atoms/modal/ultimoModal/UltimoModal";
import StaticContext from "../../contexts/StaticProvider";

const Configuraciones = () => {
  const { isOpenModal, openModal, closeModal } = useContext(StaticContext);

  return (
    <div data-aos="fade-left">
      <Header title="Configuracion" />

      <p>Pagina en Construccion...</p>

      {/* <button onClick={openModal} className="bg-blue-500 p-3 rounded-xl">
        <p>abrir modal</p>
        <UltimoModal isOpen={isOpenModal} closeModal={closeModal}></UltimoModal>
      </button>
      <BotonPrimario
        Color={BotonBlancoClasico}
        onClick={() => openModalCaja()}
      /> */}
      {/* Prueba Tooltip */}
      {/* <p data-bs-toggle="tooltip" title="Hi! I'm tooltip">
        tooltip?
      </p> */}
      {/* Prueba Tooltip */}
      {/* Modal Reutilizable inicio caja funciona bien y es lindo.  */}
      {/* <BotonPrimario
        value="Inicio Caja"
        Color={BotonBlancoRedondeado}
        onClick={() => setModalCaja(!modalCaja)}
      /> */}
      {/* {modalCaja ? (
        <ModalReutilizable
          title="Caja"
          closeModal={() => setModalCaja(!modalCaja)}
        >
          <InicioCaja />
        </ModalReutilizable>
      ) : (
        ""
      )} */}
      {/* Modal Reutilizable inicio caja funciona bien y es lindo.  */}
    </div>
  );
};

export default Configuraciones;
