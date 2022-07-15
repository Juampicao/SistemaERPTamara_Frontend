import React, { useContext, useState } from "react";
import Iconos from "../atoms/Iconos";
import Header from "../molecules/Header";

import StaticContext from "../../contexts/StaticProvider";
import { ModalGuardado } from "../atoms/ModalNotificacion";
import VerVenta from "../molecules/ventas/VerVenta";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import { useModal } from "../../hooks/useModal";
import { BotonPrimario } from "../atoms/Botones";
import { BotonBlancoClasico, BotonClasico } from "../../helpers/colores";

import "./../atoms/BarraSearch.css";

const Configuraciones = () => {
  const { isOpenEdit, setIsOpenEdit } = useContext(StaticContext);

  // const [modalCaja, setModalCaja] = useState(true);

  function openModalCaja() {
    console.log("hola");
    setModalCaja(!modalCaja);
  }

  return (
    <div>
      <Header title="Configuracion" />
      <p>Pagina en Construccion</p>
      {isOpenEdit ? (
        <ModalGuardado
          titleModal="Guardado!"
          subtitleModal="Puedes ver los cambios en el Listado."
          buttonLabel="Ir al listado"
          // handleClick={handleModalClick}
        />
      ) : (
        ""
      )}
      <BotonPrimario
        Color={BotonBlancoClasico}
        onClick={() => openModalCaja()}
      />
      <div className="text-center">
        <p>
          Hover the link to see the
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 transition duration-150 ease-in-out"
            data-bs-toggle="tooltip"
            title="Hi! I'm tooltip"
          >
            tooltip
          </a>
        </p>
      </div>
    </div>
  );
};

export default Configuraciones;
