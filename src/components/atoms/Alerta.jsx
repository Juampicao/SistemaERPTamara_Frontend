import React from "react";

const Alerta = ({ children }) => {
  return (
    <div className=" text-center mt-3 bg-red-500  text-white font-bold p-2  uppercase">
      {children}
    </div>
  );
};

export default Alerta;
