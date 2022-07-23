import { useContext, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import axios from "axios";

import {
  BotonAzulClasico,
  BotonAzulRedondeado,
} from "../../../helpers/colores";
import { BotonPrimario } from "../../atoms/Botones";
import { useNavigate, useLocation } from "react-router-dom";

const InicioCaja = () => {
  const {
    setIsCargando,
    isCargando,
    setIsOpenErrorModal,
    isOpenErrorModal,
    modalCaja,
    setModalCaja,
  } = useContext(StaticContext);

  const location = useLocation();
  const navigate = useNavigate();

  const [inicioCaja, setInicioCaja] = useState(Number(""));

  // ObjetoGasto
  const objetoCaja = {
    inicioCaja,
  };

  const AgregarInicioCaja = async (e) => {
    e.preventDefault();
    let respuesta;
    setIsCargando(true);
    try {
      respuesta = await axios.put(
        `${import.meta.env.VITE_API_URL}/caja/62cf04d320fdec269473e073`,
        {
          // primerValorCaja,
          inicioCaja,
        }
      );
      console.log(respuesta);
      setIsCargando(false);
      setModalCaja(false);
      window.location.reload();
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
      <form action="submit" className="">
        <div className={InputStyle}>
          <label htmlFor="caja" className="">
            ¿Cual es el inicio de la caja?
          </label>

          <input
            className={PlaceHolderStyle}
            id="caja"
            type="number"
            name="caja"
            placeholder={inicioCaja}
            onChange={(e) => setInicioCaja(Number(e.target.value))}
            // onChange={(e) => setPrimerValorCaja(Number(e.target.value))}
          />
        </div>
        {/* <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md"> */}
        <div className="flex justify-end mt-2 pt-5 border-t border-gray-200">
          <BotonPrimario
            value="Guardar Caja"
            Color={BotonAzulRedondeado}
            onClick={AgregarInicioCaja}
          />
        </div>
      </form>
    </>
  );
};

export default InicioCaja;
