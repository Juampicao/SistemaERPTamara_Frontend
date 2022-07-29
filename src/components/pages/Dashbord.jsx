import React, { useEffect, useState } from 'react'
import { useContext } from 'react';

import StaticContext from '../../contexts/StaticProvider';

import Header from '../molecules/Header'
import ContenedorLayout from "../molecules/ContenedorLayout"
import Spiner from '../atoms/Spiner';
import ListadoEstadisticas from '../molecules/dashboard/ListadoEstadisticas';

const Dashbord = () => {
    const {
    isCargando,
    setIsCargando,
  } = useContext(StaticContext);


    return (
        <>
        <Header title="Dashboard" />
        <ContenedorLayout>
          <ListadoEstadisticas/>
        </ContenedorLayout>




        </>
  )
}

export default Dashbord 

  // const obtenerVentas = async () => {
  //     try {
  //       const respuesta = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/ventas`,
  //         );
  //         // console.log(respuesta.data.montoTotalVentasEfectivo);
  //         setMontoTotalVentas(respuesta.data.montoTotalVentasEfectivo)
  //       } catch (error) {
  //         console.log(error);
  //     }
  //   };
    
    
  //    const obtenerGastos = async () => {
  //      try {
  //        const url = `${import.meta.env.VITE_API_URL}/gastos`;
  //        const respuesta = await fetch(url);
  //        const resultado = await respuesta.json();
  //        // console.log(resultado)
  //        setMontoTotalGastos(  resultado.montoTotalGastosComida +
  //         resultado.montoTotalGastosVarios +
  //         resultado.montoTotalGastosProveedores +
  //         resultado.montoTotalGastosInventario)
          
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
      
  //     const obtenerCaja = async () => {
  //     try {
  //       const respuesta = await axios.get(
  //         `${import.meta.env.VITE_API_URL}/caja/62cf04d320fdec269473e073`,
  //       );
  //       // console.log(respuesta.data.inicioCaja);
  //       setValorCajaInicial(respuesta.data.inicioCaja);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
    