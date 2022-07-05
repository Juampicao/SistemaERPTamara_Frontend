import {
  BotonAzulClasico,
  BotonBlancoClasicoSinZoom,
} from "../../../helpers/colores";
import StaticContext from "../../../contexts/StaticProvider";
import { useContext, useState } from "react";

import { BotonPrimario } from "../../atoms/Botones";
const InicioCaja = () => {
  const { inicioCaja, setInicioCaja } = useContext(StaticContext);

  // ObjetoGasto
  const objetoCaja = {
    inicioCaja,
  };
  // Boton Enviar Formulario
  // function AgregarIncicioCajaa(e) =
  const AgregarInicioCaja = async (e) => {
    e.preventDefault();
    console.log(inicioCaja);
    let respuesta;

    try {
      if (inicioCaja.id) {
        // Editando un registro
        const url = `http://localhost:4000/caja`;
        respuesta = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(objetoCaja),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        // Nuevo Registro
        const url = `http://localhost:4000/caja/`;
        respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(objetoCaja),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      await respuesta.json();
      //   navigate("/ventas");
    } catch (error) {
      console.log(error);
    }
    // resetearForm();
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
            type="text"
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

        {/* </div> */}
      </form>
    </>
  );
};

export default InicioCaja;
