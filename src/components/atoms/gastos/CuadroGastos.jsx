import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../../contexts/StaticProvider";
import IconoGasto from "../../../img/iconoCosto.png";

const CuadroGastos = ({ title, title2, valor, img, ClassNameDiv }) => {
  // const { gastos, setGastos, gasto, setGasto, totalGastos, setTotalGastos } =
  //   useContext(StaticContext);

  const [totalGastosHoy, setTotalGastosHoy] = useState("");
  const CuadroGastosDivStylesPhone =
    "bg-white rounded-xl bg-green-400 py-2 text-white min-w-[150px] ";

  const CuadroGastosDivStyles =
    "flex p-2 py-3 xs:px-4 xs:py-6 align-middle items-center bg-white hover:bg-slate-200 cursor-pointer border rounded-2xl gap-y-2   xs:w-[210px] text-start";
  return (
    <>
      <div className={`${CuadroGastosDivStyles}`}>
        <div className="">
          <p className=" pl-2 capitalize font-medium text-slate-500 ">
            {title}
          </p>
          <p className=" pl-2 capitalize font-medium text-slate-500 ">
            {title2}
          </p>
        </div>
        <div className="h-10 border border-slate-300 mx-3"></div>

        <div className="">
          {/* <img src={img} alt="gasto" className="h-10 opacity-80 flex mx-auto" /> */}
          <p className="pl-2 text-slate-900 botom-0 ">${valor}.00 </p>
        </div>
      </div>
    </>
  );
};

export default CuadroGastos;
