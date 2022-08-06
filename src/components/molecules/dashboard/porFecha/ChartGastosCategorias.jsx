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
import { useState, useEffect, useContext } from "react";
import StaticContext from "../../../../contexts/StaticProvider";
import Spiner from "../../../atoms/Spiner";

import useEstadisticas from "../../../../hooks/useEstadisticas";

import axios from "axios";
const ChartGastosCategorias = () => {
  const { isOpenErrorModal, setIsOpenErrorModal, isCargando, setIsCargando } =
    useContext(StaticContext);

  const {
    getEstadisticasGastos,
    montoTotalGastosProveedores,
    montoTotalGastosVarios,
    montoTotalGastosComida,
    montoTotalGastosInventario,
  } = useEstadisticas();

  // Llamado Funciones
  useEffect(() => {
    getEstadisticasGastos();
  }, []);

  const [chartData, setChartData] = useState({ datasets: [] });
  const [chartOptions, setChartsOptions] = useState({});

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
          //   borderColor: "rgb(99, 55, 0)",
          //   data: [5, 20, 15, 30, 50, 20, 35],
          data: [
            montoTotalGastosVarios,
            montoTotalGastosProveedores,
            montoTotalGastosComida,
            montoTotalGastosInventario,
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
  }, []);

  const labels = ["Varios", "Proveedores", "Comida", "Inventario"];

  return (
    <div>
      <Pie options={chartOptions} data={chartData} />
    </div>
  );
};

export default ChartGastosCategorias;
