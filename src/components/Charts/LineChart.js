import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of users offline",
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 0.2)",
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const LineChart = () => (
  <div>
    <div className="pb-10">
      <h1>Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </div>
);

export default LineChart;
