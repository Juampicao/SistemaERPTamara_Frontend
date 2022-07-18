import React, { useContext, useEffect, useState } from "react";
import StaticContext from "../../contexts/StaticProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CuadroGastos from "../atoms/gastos/CuadroGastos";
import ListadoGastos from "../molecules/gastos/ListadoGastos";
import Header from "../molecules/Header";
import CajaEfectivo from "../atoms/CajaEfectivo";
import InicioCaja from "../molecules/gastos/InicioCaja";
import FormularioGasto from "../molecules/gastos/FormularioGasto";
import ModalReutilizable from "../atoms/modal/ModalReutilizable";
import Dropdown from "../atoms/Dropdown";
import BarraSearch from "../atoms/BarraSearch";

import { BotonPrimario, BotonPrimarioIcono } from "../atoms/Botones";
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
import diccionarioIConos from "../../helpers/iconos";

import UltimoModal from "../atoms/modal/ultimoModal/UltimoModal";

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
    isOpenErrorModal,
    isOpenModal,
    openModal,
    closeModal,
  } = useContext(StaticContext);

  const [gastosComida, setGastosComida] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const obtenerCaja = async () => {
      try {
        const respuesta = await axios.get(
          `${import.meta.env.VITE_API_URL}/caja/62cf04d320fdec269473e073`,
          {
            inicioCaja,
          }
        );
        // console.log(respuesta.data.inicioCaja);
        setInicioCaja(respuesta.data.inicioCaja);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCaja();
  }, []);

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

  // --- Funcion arrays nuevos y sumas dinamicas -----//
  let arrayGastosComida = [];
  let arrayGastosVarios = [];
  let arrayGastosProveedor = [];

  function crearArraysGastosSegmentados() {
    for (let i = 0; i < gastos.length; i++) {
      if (gastos[i].categoria === "Comida") {
        arrayGastosComida.push(gastos[i]);
      }
      if (gastos[i].categoria === "Gastos") {
        arrayGastosVarios.push(gastos[i]);
      }
      if (gastos[i].categoria === "Proveedor") {
        arrayGastosProveedor.push(gastos[i]);
      }
    }
  }
  crearArraysGastosSegmentados();
  // console.log(arrayGastosComida, arrayGastosVarios, arrayGastosProveedor);

  // 2) Crear Array con los valores de gastosComida.
  let arrayGastosComidaValores = [];
  let arrayGastosVariosValores = [];
  let arrayGastosProveedorValores = [];
  function crearArrayValores(oldArr, newArr) {
    for (let i = 0; i < oldArr.length; i++) {
      let result = oldArr[i].valor;
      newArr.push(result);
      // console.log(newArr);
    }
  }
  crearArrayValores(arrayGastosComida, arrayGastosComidaValores);
  crearArrayValores(arrayGastosVarios, arrayGastosVariosValores);
  crearArrayValores(arrayGastosProveedor, arrayGastosProveedorValores);

  // 3) Funcion suma de arrays, dinamico.
  function sumarNumerosArray(arr) {
    // arr && arr.length ? arr : [0, 0];
    const reducer = (accumulator, curr) => accumulator + curr;
    let resultado = arr.reduce(reducer);
    // console.log(resultado);
    return resultado;
  }

  return (
    <div data-aos="fade-left">
      <Header title="Gastos" />
      <div className="flex flex-wrap gap-x-3 gap-y-3 ">
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
      <div className="py-5 flex flex-wrap gap-x-3 gap-y-3">
        {/* Nuevo Gasto */}
        <BotonPrimarioIcono
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
          onClick={openModal}
        />
        <UltimoModal isOpen={isOpenModal} closeModal={closeModal}>
          <InicioCaja />
        </UltimoModal>

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

          {arrayGastosComidaValores?.[0] ? (
            <div className="flex flex-wrap gap-x-3 gap-y-3 text-center my-2 scroll-x-auto">
              <CuadroGastos
                img={diccionarioIConos.Comida}
                title="Gastos Comidas"
                valor={sumarNumerosArray(arrayGastosComidaValores)}
              />{" "}
              <CuadroGastos
                img={diccionarioIConos.Proveedor}
                title="Gastos Proveedores"
                valor={sumarNumerosArray(arrayGastosProveedorValores)}
              />
              <CuadroGastos
                img={diccionarioIConos.Gastos}
                title="Gastos"
                title2="Varios"
                valor={sumarNumerosArray(arrayGastosVariosValores)}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div>
          <h3 className="text-2xl font-bold font-mono uppercase">
            Gastos Semana
          </h3>
          {arrayGastosComidaValores?.[0] ? (
            <div className="flex space-x-3 text-center my-2 scroll-x-auto">
              <CuadroGastos
                img={diccionarioIConos.Comida}
                title="Gastos Comidas"
                valor={sumarNumerosArray(arrayGastosComidaValores)}
              />{" "}
              <CuadroGastos
                img={diccionarioIConos.Proveedor}
                title="Gastos Proveedores"
                valor={sumarNumerosArray(arrayGastosProveedorValores)}
              />
              <CuadroGastos
                img={diccionarioIConos.Gastos}
                title="Gastos"
                title2="Varios"
                valor={sumarNumerosArray(arrayGastosVariosValores)}
              />
            </div>
          ) : (
            ""
          )}
          <div className="flex space-x-3 text-center my-2 scroll-x-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Gastos;
