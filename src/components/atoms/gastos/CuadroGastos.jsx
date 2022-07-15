import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import IconoGasto from "../../../img/iconoCosto.png";

const CuadroGastos = ({ title, valor }) => {
  // const { gastos, setGastos, gasto, setGasto, totalGastos, setTotalGastos } =
  //   useContext(StaticContext);

  const [totalGastosHoy, setTotalGastosHoy] = useState("");

  return (
    <>
      <div className="p-10  bg-white hover:bg-slate-200 cursor-pointer border rounded-2xl  ">
        <div className="flex items-center space-x-3">
          {/* <img src={IconoGasto} className="h-8" alt="" /> */}
          <p className="text-start pl-2 uppercase font-medium text-slate-500">
            {title}
          </p>
          <p className="pl-2 text-slate-900">${valor}.00 </p>
        </div>
      </div>
    </>
  );
};

export default CuadroGastos;
