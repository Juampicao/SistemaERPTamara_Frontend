import React from "react";
import IconoGasto from "../../../img/iconoCosto.png";

const CuadroGastos = ({ title, valor }) => {
  const rojo = "bg-red-500";
  const azul = "bg-blue-500";

  return (
    <>
      <div className="p-10   rounded-lg bg-white hover:bg-slate-200 cursor-pointer ">
        <div className="flex items-center space-x-3">
          <img src={IconoGasto} className="h-8" alt="" />
          <p className="uppercase font-medium">{title}</p>
        </div>

        <p>{valor} </p>
      </div>
    </>
  );
};

export default CuadroGastos;
