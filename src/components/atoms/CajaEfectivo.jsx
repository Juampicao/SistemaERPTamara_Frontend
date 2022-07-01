import React from "react";

const CajaEfectivo = ({ valorCaja }) => {
  return (
    <div>
      <div className="flex border border-slate-500 p-5 space-x-5 font-bold uppercase text-2xl">
        <h3> Caja</h3>
        <div className="h-10 border border-slate-500"></div>
        <p> ${valorCaja}</p>
      </div>
    </div>
  );
};

export default CajaEfectivo;
