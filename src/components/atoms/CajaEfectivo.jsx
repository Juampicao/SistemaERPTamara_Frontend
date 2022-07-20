import React from "react";
import { FormatearNumero } from "../../helpers";

const CajaEfectivo = ({ valorCaja, title, Imagen }) => {
  return (
    <div>
      <div className="flex   bg-white  rounded-xl  p-3 md:p-5 space-x-5 capitalize text-lg items-center  ">
        <div className="flex items-center space-x-3 ">
          <div className="rounded-full border-4 p-2 border-blue-800 border- opacity-50 ">
            <img src={Imagen} alt="icono gasto" className="h-6" />
          </div>
          <h3 className=""> {title}</h3>
        </div>
        <div className="h-10 border border-slate-300"></div>
        {/* <p className="font-bold">{FormatearNumero(valorCaja)}</p> */}
        <p className="font-bold text-base">{FormatearNumero(valorCaja)}</p>
      </div>
    </div>
  );
};

export default CajaEfectivo;
