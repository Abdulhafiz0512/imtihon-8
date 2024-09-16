import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Button } from 'flowbite-react';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const initialData2023 = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
  datasets: [
    {
      label: "2023",
      data: [65, 59, 80, 81, 56, 55, 40, 60], // Example data for 2023
      fill: true,
      tension: 0.2,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
    },
  ],
};

const initialData2024 = {
  labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
  datasets: [
    {
      label: "2024",
      data: [70, 60, 85, 90, 65, 70, 50, 65], // Example data for 2024
      fill: true,
      tension: 0.2,
      backgroundColor: "rgba(153,102,255,0.4)",
      borderColor: "rgba(153,102,255,1)",
    },
  ],
};

const LineChartWithFilters = () => {
  const [chartData, setChartData] = useState(initialData2023);

  const handleAllClick = () => {
    setChartData({
      labels: ["January", "February", "March", "April", "May", "June", "July", "August"],
      datasets: [
        {
          label: "2023",
          data: [65, 59, 80, 81, 56, 55, 40, 60],
          fill: true,
          tension: 0.2,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
        },
        {
          label: "2024",
          data: [70, 60, 85, 90, 65, 70, 50, 65],
          fill: true,
          tension: 0.2,
          backgroundColor: "rgba(153,102,255,0.4)",
          borderColor: "rgba(153,102,255,1)",
        },
      ],
    });
  };

  const handle2023Click = () => setChartData(initialData2023);
  const handle2024Click = () => setChartData(initialData2024);

  return (
    <div>
      <div style={{ width: '600px', height: '400px' }}>
        <Line data={chartData} options={{
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Monthly Spending",
            },
          },
        }} />
      </div>
      <div className="mt-4 flex">
        <Button onClick={handleAllClick} className="mr-2">All</Button>
        <Button onClick={handle2023Click} className="mr-2">2023</Button>
        <Button onClick={handle2024Click}>2024</Button>
      </div>
    </div>
  );
};

export default LineChartWithFilters;
