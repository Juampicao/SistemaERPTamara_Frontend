import React from "react";

const CuadroEstadisticas = ({ tittle, tittle2, value }) => {
  return (
    <>
      <div className="grid grid-cols-5 text-center  bg-white  rounded-r-xl">
        <div className="col-span-2 bg-blue-700 text-white  rounded-l-xl py-2 ">
          <h2 className="">{tittle}</h2>
          <h2>{tittle2}</h2>
        </div>
        <p className="col-span-3 bg-white  text-center  rounded-r-xl my-auto  ">
          ${value}.00
        </p>
      </div>
    </>
  );
};

export default CuadroEstadisticas;
