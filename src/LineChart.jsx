import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "#42a5f5",
        backgroundColor: "#90caf9",
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [10, 59, 40, 15, 20, 30, 17],
        fill: false,
        borderColor: "#8b5cf6",
        backgroundColor: "#ede9fe",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Line Chart Example",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
