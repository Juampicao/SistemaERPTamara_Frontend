import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../contexts/StaticProvider";

import Header from "../molecules/Header";
import ContenedorLayout from "../molecules/ContenedorLayout";
import Spiner from "../atoms/Spiner";
import ListadoEstadisticas from "../molecules/dashboard/ListadoEstadisticas";

const Dashbord = () => {
  const { isCargando, setIsCargando } = useContext(StaticContext);

  return (
    <>
      <Header title="Dashboard" />
      <ContenedorLayout>
        <ListadoEstadisticas />
      </ContenedorLayout>
    </>
  );
};

export default Dashbord;
