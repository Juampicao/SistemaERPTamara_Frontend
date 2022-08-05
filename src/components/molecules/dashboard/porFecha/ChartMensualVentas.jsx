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
import { useState } from "react";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PruebaChart = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  const [chartOptions, setChartsOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
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
    </div>
  );
};

export default PruebaChart;
