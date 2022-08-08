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
import ChartMensualVentasPersonalizado from "../personalizado/ChartMensualVentasPersonalizado";

const SeleccionadorGeneraFechaPersonalizada = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    getEstadisticasGastosPersonalizada,
    getEstadisticasGeneralesPersonalizada,
    getEstadisticasVentasMensual,
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

  // Llamar funciones getEstadisticas Cuando cambia la fecha.
  const handleVerEstadisticasPorFecha = (e) => {
    e.preventDefault();
    console.log(seleccionarFechaABuscar);
    getEstadisticasGeneralesPersonalizada();
    getEstadisticasGastosPersonalizada();
    getEstadisticasVentasMensual();
  };

  return (
    <div className="space-y-5 ">
      <h1 className="font-bold capitalize text-xl my-2">Buscar por fecha</h1>
      <div className="flex items-center space-x-3">
        <form action="submit" onSubmit={handleVerEstadisticasPorFecha}>
          <input
            type="date"
            value={seleccionarFechaABuscar}
            onChange={(e) => setSeleccionarFechaABuscar(e.target.value)}
            name=""
            id=""
            className="p-2 rounded-xl"
          />
          <button
            type="submit"
            className="bg-black rounded-xl text-white px-3 py-1"
          >
            {" "}
            Actualizar
          </button>
        </form>

        <div className="text-center font-bold text-md">
          {formatearFecha(seleccionarFechaABuscar)}
        </div>
      </div>

      {isCargandoFecha ? (
        <Spiner />
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-3">
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
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center">
        <div className="max-w-xs">
          <ChartVentasMetodoPagoPersonalizado />
        </div>
        <div className="max-w-xs">
          <ChartGastosCategoriasPersonalizado />
        </div>
        <div className="max-w-lg">
          <ChartMensualVentasPersonalizado />
        </div>
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
