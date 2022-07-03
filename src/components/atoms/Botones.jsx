import React from "react";
import { useNavigate } from "react-router-dom";
import {} from "../../helpers/colores";

export const BotonVer = ({ value, onClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <input
        type="button"
        className="bg-yellow-500 hover:bg-yellow-600 block mx-auto w-[75px]  text-white p-2 uppercase font-bold text-xs  cursor-pointer "
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonEliminar = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        className="bg-red-600 hover:bg-red-700 block mx-auto w-[75px] text-white p-2 uppercase font-bold text-xs  cursor-pointer"
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
        className="bg-blue-600 hover:bg-blue-700 block mx-auto w-[75px]  text-white p-2 uppercase font-bold text-xs  cursor-pointer"
        onClick={onClick}
        value={value}
      />
    </>
  );
};

export const BotonNuevoProducto = ({ value, onClick }) => {
  return (
    <>
      <input
        type="submit"
        onClick={onClick}
        className="cursor-pointer border  border-slate-500 border-2 px-5 py-2 font-bold duration-200 ease-in-out  transition-all hover:bg-green-900 hover:text-white active:bg-green-700"
        value={value}
      />
    </>
  );
};

export const BotonModal = ({ value, onClick, Color }) => {
  return (
    <>
      <input type="submit" className={Color} onClick={onClick} value={value} />
    </>
  );
};

export const BotonPrimario = ({ value, onClick, Color }) => {
  return (
    <>
      <input type="submit" className={Color} onClick={onClick} value={value} />
    </>
  );
};

export default {
  BotonEliminar,
  BotonNuevoProducto,
  BotonVer,
  BotonModal,
  BotonPrimario,
};
