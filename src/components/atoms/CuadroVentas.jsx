import React from "react";
import IconoCosto from "../../img/iconoCosto.png";

const CuadroVentas = ({ title, valor }) => {
  const rojo = "bg-red-500";
  const azul = "bg-blue-500";

  return (
    <>
      <div className="p-10   rounded-lg bg-white hover:bg-slate-200 cursor-pointer ">
        <div className="flex items-center space-x-3">
          <img src={IconoCosto} className="h-8" alt="" />
          <p className="uppercase font-medium">{title}</p>
        </div>

        <p>{valor} </p>
      </div>
    </>
  );
};

export default CuadroVentas;
