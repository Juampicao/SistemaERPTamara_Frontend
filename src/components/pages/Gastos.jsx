import React, { useContext, useEffect, useState } from "react";
import CuadroGastos from "../atoms/gastos/CuadroGastos";
import ListadoGastos from "../molecules/gastos/ListadoGastos";
import Header from "../molecules/Header";

import { BotonPrimario } from "../atoms/Botones";
import CajaEfectivo from "../atoms/CajaEfectivo";

import StaticContext from "../../contexts/StaticProvider";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import {
  BotonAzulClasico,
  BotonAzulClasicoSinZoom,
  BotonBlancoClasicoSinZoom,
} from "../../helpers/colores";
import InicioCaja from "../molecules/gastos/InicioCaja";
import ModalReutilizable from "../atoms/modal/ModalReutilizable";
import { useNavigate } from "react-router-dom";
import BarraSearch from "../atoms/BarraSearch";
import PruebaDeleteModal from "../../EjemplosUtiles/modal/PruebaDeleteModal";
import { formatearFecha } from "../../helpers";
// import { IconSearch } from "../../img/iconSearch.png";

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
  } = useContext(StaticContext);
  const navigate = useNavigate();

  const [modalCaja, setModalCaja] = useState(false);
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

  const cerrar = () => {
    setAbrirModal(!abrirModal);

    // Llamado a la base de caja id 1.
    useEffect(() => {
      const obtenerClienteAPI = async () => {
        try {
          const url = `http://localhost:4000/caja/1`;
          // const url = `${import.meta.env.API_URL}`;
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setInicioCaja(resultado);
          console.log(inicioCaja);
          setAbrirModal(!abrirModal);

          // console.log(gasto);
        } catch (error) {
          console.log(error);
        }
        // setIsCargando(!isCargando);
      };
      obtenerClienteAPI();
    }, [inicioCaja]);
  };

  let totalValores = [];
  for (let i = 0; i < gastos.length; i++) {
    let result = gastos[i].valor;
    totalValores.push(result);
    for (let i = 0; i < result.length; i++) {
      let resultado = result;
      // console.log(resultado);
    }
    // console.log(result);
  }
  console.log(totalValores);

  // // Ordenar por VALOR.
  // gastos.sort(function (a, b) {
  //   if (a.valor > b.valor) {
  //     return 1;
  //   }
  //   if (a.valor < b.valor) {
  //     return -1;
  //   }
  //   // a must be equal to b
  //   return 0;
  // });

  // ordenarCualquierCosa(valores);
  // console.log(totalValores);

  return (
    <div>
      <Header title="Gastos" />
      <div className="flex flex-wrap">
        <CajaEfectivo
          valorCaja={totalGastos}
          title="Gastos"
          title2="Caja Total"
          valorCaja2={Number(inicioCaja - totalGastos)}
          title3="Inicio Caja"
          valorCaja3={inicioCaja}
        />
      </div>

      <div className="py-5 flex flex-wrap space-x-3">
        {/* Nuevo Gasto */}
        <BotonPrimario
          value="Nuevo Gasto"
          Color={BotonAzulClasicoSinZoom}
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
          Color={BotonBlancoClasicoSinZoom}
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
          Color={BotonBlancoClasicoSinZoom}
          onClick={handleReiniciarTotalGastos}
        />
      </div>
      <BarraSearch />

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
