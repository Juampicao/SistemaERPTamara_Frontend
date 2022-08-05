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
const PruebaPie = () => {
  const [chartData, setChartData] = useState({ datasets: [] });

  const [chartOptions, setChartsOptions] = useState({});

  useEffect(() => {
    setChartData({
      //   labels: ["January", "February", "March", "April", "May", "June", "July"],
      labels: ["Efectivo", "Tarjeta"],
      datasets: [
        {
          label: "Evolucion de Ventas",
          backgroundColor: [
            "rgb(255, 99, 132)",
            "rgb(54, 162, 235)",
            "rgb(255, 205, 86)",
          ],
          //   borderColor: "rgb(99, 55, 0)",
          //   data: [5, 20, 15, 30, 50, 20, 35],
          data: [80, 20],
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
          text: "Metodo de Pago",
        },
      },
    });
  }, []);

  //   const labels = ["January", "February", "March", "April", "May", "June"];
  const labels = ["Efectivo", "Tarjeta"];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        // backgroundColor: "rgb(255, 99, 132)",
        // borderColor: "rgb(255, 99, 132)",
        // data: [0, 10, 5, 2, 20, 30, 45],
        data: [80, 20],
      },
    ],
  };

  const config = {
    type: "doughnut",
    data: data,
    options: {},
  };

  return (
    <div>
      <Pie options={chartOptions} data={chartData} />
    </div>
  );
};

export default PruebaPie;
