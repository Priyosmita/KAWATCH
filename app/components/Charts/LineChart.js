import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = ({ bulkResults }) => {
  const labels = bulkResults.map((_, index) => index + 1);
  const negativeData = bulkResults.map(result => result.probability[0].toFixed(3));
  const positiveData = bulkResults.map(result => result.probability[1].toFixed(3));

  const data = {
    labels,
    datasets: [
      {
        label: 'Negative Probability',
        // labelColor: '#ACABAD',
        data: negativeData,
        borderColor: '#FF6384',
        fill: false,
        tension: 0.1,
      },
      {
        label: 'Positive Probability',
        labelColor: '#ACABAD',
        data: positiveData,
        borderColor: '#36A2EB',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          color: '#ACABAD',
          text: "Record ID",
        },
        grid: {
          color: '#ACABAD',
        },
        ticks: {
          color: '#ACABAD',
        },
      },
      y: {
        title: {
          display: true,
          color: '#ACABAD',
          text: "Probability",
        },
        grid: {
          color: '#ACABAD',
        },
        ticks: {
          color: '#ACABAD',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;