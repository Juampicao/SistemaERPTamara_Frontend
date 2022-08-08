import React from "react";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
import { useState, useEffect } from "react";
import useEstadisticas from "../../../../hooks/useEstadisticas";
import Spiner from "../../../atoms/Spiner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartMensualVentasPersonalizado = () => {
  const { ventasPorMes, seleccionarFechaABuscar, isCargandoFecha } =
    useEstadisticas();

  console.log(`Desde chart ${ventasPorMes}`);

  const [chartData, setChartData] = useState({ datasets: [] });

  const [chartOptions, setChartsOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: [
        "Ene",
        "Feb",
        "Mar",
        "Abr",
        "May",
        "Jun",
        "Jul",
        "Ago",
        "Sep",
        "Oct",
        "Nov",
        "Dic",
      ],
      datasets: [
        {
          label: "Evolucion de Ventas",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          borderColor: "rgb(255, 99, 999)",
          data: [5, 20, 15, 30, 50, 20, 35],
        },
      ],
    });
    setChartsOptions({
      responsive: true,
      plugins: {
        datalabels: {
          formatter: function (value, context) {
            console.log(context.chart.data);
            return context.chart.data.labels[context.dataIndex];
          },
        },
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Estadisticas",
        },
      },
    });
  }, []);

  return (
    <div>
      <Bar options={chartOptions} data={chartData} />
      {/* {ventasPorMes.map((gasto) => {
        console.log(`${gasto._id} - ${gasto.valor}`);
      })} */}
    </div>
  );
};

export default ChartMensualVentasPersonalizado;
