import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["1", "2", "3", "4", "5", "6"],
  datasets: [
    {
      label: "# of queries pending",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: "rgb(255, 99, 132)",
    },
    {
      label: "# of Payments pending",
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: "rgb(54, 162, 235)",
    },
    {
      label: "# of Revenue generated",
      data: [3, 10, 13, 15, 22, 30],
      backgroundColor: "rgb(75, 192, 192)",
    },
  ],
};

const options = {
  scales: {
    y: {
      stacked: true,
      ticks: {
        beginAtZero: true,
      },
    },
    x: {
      stacked: true,
    },
  },
};

const StackedBar = () => (
  <div>
    <div>
      <h1 className="pb-10">Stacked Bar Chart</h1>
    </div>
    <Bar data={data} options={options} />
  </div>
);

export default StackedBar;
