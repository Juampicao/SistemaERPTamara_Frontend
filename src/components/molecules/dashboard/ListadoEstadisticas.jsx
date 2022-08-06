import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../contexts/StaticProvider";

import CuadroEstadisticas from "./CuadroEstadisticas";
import Spiner from "../../atoms/Spiner";
import SelectorEstadisticas from "./SelectorEstadisticas";

const ListadoEstadisticas = () => {
  return (
    <div>
      <h1 className="font-bold capitalize text-xl my-2">
        Estadisticas{" "}
        {/* <span className="text-slate-400 text-base"> Proximamente.. </span> */}
      </h1>
      <SelectorEstadisticas />
    </div>
  );
};

export default ListadoEstadisticas;
