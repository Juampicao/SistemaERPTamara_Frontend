import React from "react";

const CajaEfectivo = ({
  valorCaja,
  title,
  title2,
  valorCaja2,
  valorCaja3,
  title3,
}) => {
  return (
    <div>
      {/* <div className="flex border border-slate-500 p-5 space-x-5 font-bold uppercase text-2xl">
        <h3> {title}</h3>
        <div className="h-10 border border-slate-500"></div>
        <p> ${valorCaja}</p>
      </div>
     */}
      <div className="flex border border-slate-500 justify-between ">
        <div className="flex   p-5 space-x-5 font-bold uppercase text-2xl">
          <h3> {title}</h3>
          <div className="h-10  border-slate-500"></div>
          <p> ${valorCaja}</p>
        </div>
        <div className="flex    p-5 space-x-5 font-bold uppercase text-2xl">
          <h3> {title2}</h3>
          <div className="h-10  border-slate-500"></div>
          <p> {valorCaja2}</p>
        </div>
        <div className="flex    p-5 space-x-5 font-bold uppercase text-2xl">
          <h3> {title3}</h3>
          <div className="h-10  border-slate-500"></div>
          <p> {valorCaja3}</p>
        </div>
      </div>
    </div>
  );
};

export default CajaEfectivo;
