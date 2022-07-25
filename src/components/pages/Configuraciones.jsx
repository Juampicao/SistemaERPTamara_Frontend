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
import Spiner from "../atoms/Spiner";
import FormularioVentaConStock from "../molecules/ventas/FormularioVentaConStock";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useEstadisticas from "../../hooks/useEstadisticas";
import ContenedorLayout from "../molecules/ContenedorLayout";

const Configuraciones = () => {
  const { isOpenModal, openModal, closeModal } = useContext(StaticContext);

  // const { estadisticas } = useEstadisticas();

  return (
    <div>
      <Header title="Configuracion" />

      <ContenedorLayout>
        <div className="py-3">
          <p>Pagina en Construccion...</p>
        </div>

        {/* <Tab.Group>
        <Tab.List>
          <Tab
            className={({ selected }) =>
              selected ? "bg-blue-500 text-white" : "bg-white text-black"
            }
          >
            Tab 1
          </Tab>
          <Tab
            className={({ selected }) =>
              selected ? "bg-blue-500 text-white" : "bg-white text-black"
            }
          >
            Tab 1
          </Tab>
          ...
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          ....
        </Tab.Panels>
      </Tab.Group> */}
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
      </ContenedorLayout>
    </div>
  );
};

export default Configuraciones;
