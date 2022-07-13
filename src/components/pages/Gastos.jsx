import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";

import CuadroGastos from "../atoms/gastos/CuadroGastos";
import ListadoGastos from "../molecules/gastos/ListadoGastos";
import Header from "../molecules/Header";
import CajaEfectivo from "../atoms/CajaEfectivo";
import InicioCaja from "../molecules/gastos/InicioCaja";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import ModalReutilizable from "../atoms/modal/ModalReutilizable";
import Dropdown from "../atoms/Dropdown";
import BarraSearch from "../atoms/BarraSearch";

import { BotonPrimario } from "../atoms/Botones";
import {
  BotonAzulClasico,
  BotonAzulClasicoSinZoom,
  BotonAzulRedondeado,
  BotonBlancoClasicoSinZoom,
  BotonBlancoRedondeado,
  BotonRojoRedondeado,
} from "../../helpers/colores";

import { formatearFecha } from "../../helpers";

// import { IconSearch } from "../../img/iconSearch.png";
import IconoIncioCaja from "../../img/iconCaja.png";
import IconoGastos from "../../img/iconoGastos.png";
import Flecha from "../../img/newIcons/flechaIzquierda.png";

const Gastos = () => {
  const {
    gastos,
    setGastos,
    gasto,
    setGasto,
    totalGastos,
    setTotalGastos,
    inicioCaja,
    setInicioCaja,
    ventas,
    modalCaja,
    setModalCaja,
    // isOpenErrorModal,
  } = useContext(StaticContext);
  const navigate = useNavigate();

  // const [modalCaja, setModalCaja] = useState(false);
  const [abrirModal, setAbrirModal] = useState(false);

  const { id, nombre, valor, cantidad } = gasto;

  const handleReiniciarTotalGastos = () => {
    setTotalGastos(0);
  };

  // SetTotalGastos (suma todos los valor de cada gasto)
  useEffect(() => {
    const totalGastado = gastos.reduce(
      (total, gasto) => gasto.valor + total,
      0
    );
    setTotalGastos(totalGastado);
  }, [gastos]);

  // Prueba Sumar Ventas como si fuera EGRESO para sumar al TOTAL GASTOS.
  // useEffect(() => {
  //   const totalVentas = ventas.reduce((total, venta) => venta.valor + total, 0);
  //   console.log(totalVentas);
  //   console.log(totalGastos + totalVentas);
  // }, [ventas]);

  // de

  // let totalValores = [];
  // for (let i = 0; i < gastos.length; i++) {
  //   let result = gastos[i].valor;
  //   totalValores.push(result);
  //   for (let i = 0; i < result.length; i++) {
  //     let resultado = result;
  //     // console.log(resultado);
  //   }
  //   // console.log(result);
  // }
  // // console.log(totalValores);

  return (
    <div>
      <Header title="Gastos" />
      <div className="flex flex-wrap lg:space-x-3 space-x-0">
        <CajaEfectivo
          valorCaja={totalGastos}
          title="Gastos"
          Imagen={IconoIncioCaja}
        />
        <CajaEfectivo
          valorCaja={Number(inicioCaja - totalGastos)}
          title="Total Caja"
          Imagen={Flecha}
        />
        <CajaEfectivo
          valorCaja={inicioCaja}
          title="Inicio Caja"
          Imagen={IconoIncioCaja}
        />
      </div>
      <div className="py-5 flex flex-wrap space-x-3">
        {/* Nuevo Gasto */}
        <BotonPrimario
          value="Nuevo Gasto"
          Color={BotonRojoRedondeado}
          onClick={() => navigate(`/gastos/nuevogasto`)}
        />
        {abrirModal ? (
          <ModalReutilizable closeModal={cerrar}>
            <FormularioGasto onClick={() => {}} />
          </ModalReutilizable>
        ) : (
          ""
        )}
        {/* Nuevo Gasto */}

        {/* Abrir Inicio Caja */}
        <BotonPrimario
          value="Inicio Caja"
          Color={BotonBlancoRedondeado}
          onClick={() => setModalCaja(!modalCaja)}
        />
        {modalCaja ? (
          <ModalReutilizable closeModal={() => setModalCaja(!modalCaja)}>
            <InicioCaja />
          </ModalReutilizable>
        ) : (
          ""
        )}
        {/* Inicio Caja */}
        <BotonPrimario
          value="Reiniciar Gastos"
          Color={BotonBlancoRedondeado}
          onClick={handleReiniciarTotalGastos}
        />
      </div>
      <div className="flex items-center gap-x-3">
        <BarraSearch />
        <Dropdown onClick1={() => {}} />
      </div>
      <ListadoGastos />
      <div className="grid grid-rows space-y-10 my-10">
        <div className="">
          <h3 className="text-2xl font-bold font-mono uppercase">Gastos Hoy</h3>
          <div className="flex space-x-3 text-center my-2">
            <CuadroGastos title="Gastos Totales" valor={totalGastos} />
            <CuadroGastos title="Gastos Proveedores" valor={totalGastos} />
            <CuadroGastos title="Gastos Comidas" valor={totalGastos} />
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">
            Gastos Semana
          </h3>
          <div className="flex space-x-3 text-center my-2">
            <CuadroGastos title="Gastos Totales" valor="$9890" />
            <CuadroGastos title="Gastos Proveedores" valor={totalGastos} />
            <CuadroGastos title="Gastos Comidas" valor={totalGastos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gastos;

{
  /* Abrir Nuevo Gasto */
}
{
  /* <BotonPrimario
          value="Nuevo Gasto"
          Color={BotonAzulClasicoSinZoom}
          onClick={() => setAbrirModal(!abrirModal)}
        />
        {abrirModal ? (
          <ModalReutilizable closeModal={cerrar}>
            <FormularioGasto onClick={() => {}} />
          </ModalReutilizable>
        ) : (
          ""
        )} */
}
{
  /* Nuevo Gasto */
}
{
  /* Abrir Nuevo Gasto */
}
