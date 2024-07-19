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
        label: 'Not Money Laundering',
        data: negativeData,
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        // borderColor: '#FF6384',
        // fill: false,
        tension: 0.1,
      },
      {
        label: 'Money Laundering',
        data: positiveData,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        // borderColor: '#36A2EB',
        // fill: false,
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
    plugins: {
      legend: {
        labels: {
          color: '#ACABAD', // Change the color of the legend labels
        },
      },
    },
  };


  return <Line data={data} options={options} />;
};


export default LineChart;