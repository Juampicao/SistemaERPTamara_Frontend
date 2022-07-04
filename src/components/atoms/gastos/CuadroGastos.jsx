import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import IconoGasto from "../../../img/iconoCosto.png";

const CuadroGastos = ({ title, valor }) => {
  // const { gastos, setGastos, gasto, setGasto, totalGastos, setTotalGastos } =
  //   useContext(StaticContext);

  const [totalGastosHoy, setTotalGastosHoy] = useState("");

  return (
    <>
      <div className="p-10   rounded-lg bg-white hover:bg-slate-200 cursor-pointer ">
        <div className="flex items-center space-x-3">
          <img src={IconoGasto} className="h-8" alt="" />
          <p className="uppercase font-medium">{title}</p>
        </div>
        <p className="mt-1">${valor} </p>
      </div>
    </>
  );
};

export default CuadroGastos;
