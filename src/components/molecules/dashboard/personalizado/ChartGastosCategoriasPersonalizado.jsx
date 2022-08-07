import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

import { Bar, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";

import useEstadisticas from "../../../../hooks/useEstadisticas";
import Spiner from "../../../atoms/Spiner";

const ChartGastosCategoriasPersonalizado = () => {
  const {
    getEstadisticasGastosPersonalizada,
    montoTotalGastosProveedoresPersonalizada,
    montoTotalGastosVariosPersonalizada,
    montoTotalGastosComidaPersonalizada,
    montoTotalGastosInventarioPersonalizada,
    seleccionarFechaABuscar,
    dataPersonalizado,
    isCargandoFecha,
  } = useEstadisticas();

  useEffect(() => {
    getEstadisticasGastosPersonalizada();
  }, []);

  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

  // console.log(
  //   `desde chart..${seleccionarFechaABuscar}`,
  //   chartData.datasets.data
  // );

  useEffect(() => {
    setChartData({
      labels: ["Varios", "Proveedores", "Comida", "Inventario"],
      datasets: [
        {
          label: "Evolucion de Ventas",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
            "rgb(00, 00, 00)",
          ],
          data: [
            montoTotalGastosProveedoresPersonalizada,
            montoTotalGastosVariosPersonalizada,
            montoTotalGastosComidaPersonalizada,
            montoTotalGastosInventarioPersonalizada,
            // 10, 20, 30, 60,
          ],
        },
      ],
    });
    setChartsOptions({
      type: "doughnut",
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Gastos por Categoria General",
        },
      },
    });
  }, [getEstadisticasGastosPersonalizada]);

  const labels = ["Varios", "Proveedores", "Comida", "Inventario"];

  return (
    <div>
      {isCargandoFecha ? (
        <Spiner />
      ) : (
        <Pie options={chartOptions} data={chartData} />
      )}
    </div>
  );
};

export default ChartGastosCategoriasPersonalizado;
