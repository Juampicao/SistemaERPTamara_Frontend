import React, { useContext } from "react";
import MessageModal from "./MessageModal";

import StaticContext from "../../contexts/StaticProvider";

const ButtonEliminar = ({ handleClick }) => {
  return (
    <div>
      <button
        type="button"
        className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
        onClick={handleClick}
      >
        Eliminar
      </button>
    </div>
  );
};

export default ButtonEliminar;
