import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data, options }) => {
  const updatedData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      backgroundColor: ['rgba(255, 99, 132, 0.5)', 'rgba(54, 162, 235, 0.5)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: [1,1],
    })),
  };

  const updatedOptions = {
    ...options,
    plugins: {
      ...options?.plugins,
      legend: {
        ...options?.plugins?.legend,
        labels: {
          ...options?.plugins?.legend?.labels,
          color: '#ACABAD', // Change legend label text color to white
        },
      },
    },
  };

  return (
    <div className="pie-chart-container" style={{ position: 'relative', height: '400px', width: '400px' }}>
      <Pie data={updatedData} options={updatedOptions} />
    </div>
  );
};

export default PieChart;