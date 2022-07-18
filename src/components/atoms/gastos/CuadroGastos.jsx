import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import IconoGasto from "../../../img/iconoCosto.png";

const CuadroGastos = ({ title, title2, valor, img }) => {
  // const { gastos, setGastos, gasto, setGasto, totalGastos, setTotalGastos } =
  //   useContext(StaticContext);

  const [totalGastosHoy, setTotalGastosHoy] = useState("");

  return (
    <>
      <div className="px-4 py-6 bg-white hover:bg-slate-200 cursor-pointer border rounded-2xl space-y-2  w-[150px]">
        <div className="">
          <p className=" pl-2 capitalize font-medium text-slate-500">{title}</p>
          <p className=" pl-2 capitalize font-medium text-slate-500">
            {title2}
          </p>
        </div>
        <div className="">
          <img src={img} alt="gasto" className="h-10 opacity-80 flex mx-auto" />
          <p className="pl-2 text-slate-900 ">${valor}.00 </p>
        </div>
      </div>
    </>
  );
};

export default CuadroGastos;
