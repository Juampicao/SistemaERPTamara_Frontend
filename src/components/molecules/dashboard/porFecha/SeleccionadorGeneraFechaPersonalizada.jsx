import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

import StaticContext from "../../../../contexts/StaticProvider";

import CuadroEstadisticas from "../CuadroEstadisticas";

import Spiner from "../../../atoms/Spiner";
import ContenedorSeleccionados from "../ContenedorSeleccionados";

import useEstadisticas from "../../../../hooks/useEstadisticas";
import { formatearFecha } from "../../../../helpers";

import ChartVentasMetodoPagoPersonalizado from "../personalizado/ChartVentasMetodoPagoPersonalizado";
import ChartGastosCategoriasPersonalizado from "../personalizado/ChartGastosCategoriasPersonalizado";

const SeleccionadorGeneraFechaPersonalizada = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    getEstadisticasGeneralesPersonalizada,
    seleccionarFechaABuscar,
    setSeleccionarFechaABuscar,
    montoTotalVentasPersonalizada,
    montoTotalVentasEfectivoPersonalizada,
    montoTotalVentasTarjetaPersonalizada,
    montoTotalGastosPersonalizada,
    utilidadVentaPersonalizada,
    setIsCargandoFecha,
    isCargandoFecha,
  } = useEstadisticas();

  useEffect(() => {
    getEstadisticasGeneralesPersonalizada();
  }, []);

  const handleVerEstadisticasPorFecha = (e) => {
    e.preventDefault();
    console.log(seleccionarFechaABuscar);
    getEstadisticasGeneralesPersonalizada();
  };

  return (
    <div className="space-y-5 ">
      <h1 className="font-bold capitalize text-xl my-2">Buscar por fecha</h1>
      <div className="flex items-center space-x-3">
        <form action="submit" onChange={handleVerEstadisticasPorFecha}>
          <input
            type="date"
            value={seleccionarFechaABuscar}
            onChange={(e) => setSeleccionarFechaABuscar(e.target.value)}
            name=""
            id=""
            className="p-2 rounded-xl"
          />
        </form>

        <div className="text-center font-bold text-md">
          {formatearFecha(seleccionarFechaABuscar)}
        </div>
      </div>

      {isCargandoFecha ? (
        <Spiner />
      ) : (
        <div className="flex">
          {/* <div className="text-center font-bold text-lg">
            {formatearFecha(seleccionarFechaABuscar)}
          </div> */}
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Totales"
            value={montoTotalVentasPersonalizada}
          />
          <CuadroEstadisticas
            tittle="Utilidad"
            tittle2="Ventas"
            value={utilidadVentaPersonalizada}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Efectivo"
            value={montoTotalVentasEfectivoPersonalizada}
          />
          <CuadroEstadisticas
            tittle="Ventas"
            tittle2="Tarjeta"
            value={montoTotalVentasTarjetaPersonalizada}
          />
          <CuadroEstadisticas
            tittle="Gastos"
            tittle2="Totales"
            value={montoTotalGastosPersonalizada}
          />
        </div>
      )}
      <div className="max-w-xs">
        <ChartVentasMetodoPagoPersonalizado />
        <ChartGastosCategoriasPersonalizado />
      </div>
    </div>
  );
};

export default SeleccionadorGeneraFechaPersonalizada;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useContext } from "react";

// import StaticContext from "../../../../contexts/StaticProvider";

// import CuadroEstadisticas from "../CuadroEstadisticas";

// import Spiner from "../../../atoms/Spiner";
// import ContenedorSeleccionados from "../ContenedorSeleccionados";

// import useEstadisticas from "../../../../hooks/useEstadisticas";
// import { formatearFecha } from "../../../../helpers";

// import ChartVentasMetodoPagoPersonalizado from "../personalizado/ChartVentasMetodoPagoPersonalizado";

// const SeleccionadorGeneraFechaPersonalizada = () => {
//   const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
//     useContext(StaticContext);

//   const { handleVerEstadisticasPorFecha, setSeleccionarFechaABuscar } =
//     useEstadisticas();

//   const [isCargandoFecha, setIsCargandoFecha] = useState(false);

// //   const [seleccionarFechaABuscar, setSeleccionarFechaABuscar] = useState();
// //   // Estadisticas Generales
// //   const [montoTotalVentasPersonalizada, setMontoTotalVentasPersonalizada] =
// //     useState(0);
// //   const [
// //     montoTotalVentasEfectivoPersonalizada,
// //     setMontoTotalVentasEfectivoPersonalizada,
// //   ] = useState(0);
// //   const [
// //     montoTotalVentasTarjetaPersonalizada,
// //     setMontoTotalVentasarjetaPersonalizada,
// //   ] = useState(0);
// //   const [montoTotalGastosPersonalizada, setMontoTotalGastosPersonalizada] =
// //     useState(0);
// //   const [inicioCajaPersonalizada, setInicioCajaPersonalizada] = useState(0);
// //   const [montoCajaActualPersonalizada, setMontoCajaActualPersonalizada] =
// //     useState(0);
// //   const [utilidadVentaPersonalizada, setUtilidadVentaPersonalizada] =
// //     useState(0);

// //   const handleVerEstadisticasPorFecha = (e) => {
// //     e.preventDefault();
// //     console.log(seleccionarFechaABuscar);
// //     getEstadisticasGeneralesPersonalizada();
// //     async function getEstadisticasGeneralesPersonalizada() {
// //       setIsCargandoFecha(true);
// //       try {
// //         const token = localStorage.getItem("token");
// //         if (!token) return;

// //         const config = {
// //           headers: {
// //             "Content-Type": "application/json",
// //             Authorization: `Bearer ${token}`,
// //           },
// //         };
// //         const respuesta = await axios.post(
// //           `${import.meta.env.VITE_API_URL}/estadisticas/fechapersonalizada`,
// //           {
// //             seleccionarFechaABuscar,
// //           },
// //           config
// //         );
// //         setMontoTotalVentasPersonalizada(
// //           respuesta.data.montoTotalVentasPersonalizado
// //         );
// //         setUtilidadVentaPersonalizada(
// //           respuesta.data.UtilidadVentasPersonalizado
// //         );
// //         setMontoTotalVentasarjetaPersonalizada(
// //           respuesta.data.montoTotalVentasTarjetaPersonalizado
// //         );
// //         setMontoTotalVentasEfectivoPersonalizada(
// //           respuesta.data.montoTotalVentasEfectivoPersonalizado
// //         );
// //         setMontoTotalGastosPersonalizada(
// //           respuesta.data.montoTotalGastosPersonalizado
// //         );
// //         console.log(respuesta.data);
// //       } catch (error) {
// //         console.log(error);
// //         setIsOpenErrorModal(true);
// //       }
// //       setIsCargandoFecha(false);
// //     }
// //   };

//   return (
//     <div className="space-y-5 ">
//       <h1 className="font-bold capitalize text-xl my-2">Buscar por fecha</h1>
//       <div className="flex items-center space-x-3">
//         <form action="submit" onChange={handleVerEstadisticasPorFecha}>
//           <input
//             type="date"
//             value={seleccionarFechaABuscar}
//             onChange={(e) => setSeleccionarFechaABuscar(e.target.value)}
//             name=""
//             id=""
//             className="p-2 rounded-xl"
//           />
//         </form>

//         <div className="text-center font-bold text-md">
//           {formatearFecha(seleccionarFechaABuscar)}
//         </div>
//       </div>

//       {isCargandoFecha ? (
//         <Spiner />
//       ) : (
//         <div className="flex">
//           {/* <div className="text-center font-bold text-lg">
//             {formatearFecha(seleccionarFechaABuscar)}
//           </div> */}
//           <CuadroEstadisticas
//             tittle="Ventas"
//             tittle2="Totales"
//             value={montoTotalVentasPersonalizada}
//           />
//           <CuadroEstadisticas
//             tittle="Utilidad"
//             tittle2="Ventas"
//             value={utilidadVentaPersonalizada}
//           />
//           <CuadroEstadisticas
//             tittle="Ventas"
//             tittle2="Efectivo"
//             value={montoTotalVentasEfectivoPersonalizada}
//           />
//           <CuadroEstadisticas
//             tittle="Ventas"
//             tittle2="Tarjeta"
//             value={montoTotalVentasTarjetaPersonalizada}
//           />
//           <CuadroEstadisticas
//             tittle="Gastos"
//             tittle2="Totales"
//             value={montoTotalGastosPersonalizada}
//           />
//         </div>
//       )}
//       <div className="max-w-xs">
//         <ChartVentasMetodoPagoPersonalizado />
//       </div>
//     </div>
//   );
// };

// export default SeleccionadorGeneraFechaPersonalizada;
