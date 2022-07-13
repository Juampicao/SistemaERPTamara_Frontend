import { useContext, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import axios from "axios";

import {
  BotonAzulClasico,
  BotonBlancoClasicoSinZoom,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";
import { useNavigate } from "react-router-dom";
import Spiner from "../../atoms/Spiner";
import { ModalError } from "../../atoms/ModalNotificacion";

const InicioCaja = () => {
  const {
    inicioCaja,
    setInicioCaja,
    setIsCargando,
    isCargando,
    setIsOpenErrorModal,
    isOpenErrorModal,
    modalCaja,
    setModalCaja,
  } = useContext(StaticContext);
  const navigate = useNavigate();

  // ObjetoGasto
  const objetoCaja = {
    inicioCaja,
  };
  // Boton Enviar Formulario
  // const AgregarInicioCaja = async (e) => {
  //   e.preventDefault();
  //   console.log(inicioCaja);
  //   let respuesta;
  //   try {
  //     {
  //       // Editando el ID 1. Solo puede haber 1 registro por dia. Si toca devuelta, se edita el mismo.
  //       const url = `${import.meta.env.VITE_API_URL}/caja/1`;
  //       respuesta = await fetch(url, {
  //         method: "PUT",
  //         body: JSON.stringify(objetoCaja),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       });
  //     }
  //     await respuesta.json();
  //     //   navigate("/ventas");
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // resetearForm();
  // };

  const AgregarInicioCaja = async (e) => {
    e.preventDefault();
    let respuesta;
    setIsCargando(true);
    try {
      respuesta = await axios.put(`${import.meta.env.VITE_API_URL}/caja`, {
        inicioCaja,
      });
      console.log(respuesta);
      setIsCargando(false);
      navigate("/gastos");
    } catch (error) {
      setIsCargando(true);
      console.log(error);
      setIsCargando(false);
      setModalCaja(false);
      setIsOpenErrorModal(true);
    }
  };

  // Styles
  const InputStyle = "p-3 bg-slate-50 space-x-3";
  const PlaceHolderStyle = "border-2 p-2  placeholder-gray-400 rounded-md";

  return (
    <>
      <form action="submit">
        <div className={InputStyle}>
          <label htmlFor="caja" className="">
            ¿Cual es el inicio de la caja?
          </label>

          <input
            className={PlaceHolderStyle}
            id="caja"
            type="number"
            value={inicioCaja}
            onChange={(e) => setInicioCaja(Number(e.target.value))}
          />
        </div>
        {/* <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"> */}
        <div className="flex justify-end mt-2 pt-5 border-t border-gray-200">
          <BotonPrimario
            value="Guardar Caja"
            Color={BotonAzulClasico}
            onClick={AgregarInicioCaja}
          />
        </div>
        {isCargando ? <Spiner /> : " "}
        {isOpenErrorModal ? (
          <ModalError
            titleModal="Error"
            subtitleModal="Problema al cargar la caja"
          />
        ) : (
          " "
        )}
      </form>
    </>
  );
};

export default InicioCaja;
