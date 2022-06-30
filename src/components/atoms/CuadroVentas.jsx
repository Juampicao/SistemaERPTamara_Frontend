import React from "react";

const CuadroVentas = ({ title, valor }) => {
  const rojo = "bg-red-500";
  const azul = "bg-blue-500";

  return (
    <>
      <div className="p-10 text-black  font-bold  rounded-lg bg-red-300 hover:bg-red-400 cursor-pointer">
        <p className="uppercase">
          {title} <span>{valor} </span>
        </p>
      </div>
    </>
  );
};

export default CuadroVentas;
