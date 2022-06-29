import React from "react";

export const BotonPrincipal = ({ value, onClick }) => {
  const BotonStyle =
    "bg-black hover:bg-white hover:text-black hover:border hover:border-black text-white px-2 py-3 w-full mx-auto uppercase text-xs  font-bold uppercase cursor-pointer hover:scale-x-105 hover:duration-150 duration-150 ";
  const SecondaryStyle = "";
  const BotonEliminarStyle = "bg-red-500 rounded-lg";
  const Tamaño = "";
  return (
    <>
      <input
        type="submit"
        className={`${BotonStyle}${SecondaryStyle}`}
        value={value}
        onClick={onClick}
      />
    </>
  );
};

export const BotonSecundario = () => {
  return (
    <>
      <h2> Boton Secundario </h2>
    </>
  );
};

export const BotonEliminar = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs  cursor-pointer"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonEditar = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs  cursor-pointer"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export default { BotonPrincipal, BotonSecundario, BotonEliminar };
