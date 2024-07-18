// // Ensure this code runs after the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', (event) => {
//     // Get the context of the canvas element we want to select
//     const ctx = document.getElementById('interpolationChart').getContext('2d');
  
//     // Create the data and options for the chart
//     const data = {
//       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//       datasets: [{
//         label: 'Dataset',
//         data: [0, 10, 5, 2, 20, 30, 45],
//         borderColor: 'rgba(75, 192, 192, 1)',
//         backgroundColor: 'rgba(75, 192, 192, 0.2)',
//         fill: false,
//         tension: 0.4, // Interpolation effect
//         cubicInterpolationMode: 'monotone' // Change to 'default' or 'monotone' for different effects
//       }]
//     };
  
//     const options = {
//       responsive: true,
//       plugins: {
//         legend: {
//           position: 'top',
//         },
//         title: {
//           display: true,
//           text: 'Interpolation Mode Line Chart'
//         }
//       },
//       scales: {
//         x: {
//           display: true,
//           title: {
//             display: true,
//             text: 'Month'
//           }
//         },
//         y: {
//           display: true,
//           title: {
//             display: true,
//             text: 'Value'
//           }
//         }
//       }
//     };
  
//     // Create the chart
//     const interpolationChart = new Chart(ctx, {
//       type: 'line',
//       data: data,
//       options: options
//     });
//   });
  




// LineChart.js
import React, { useEffect } from 'react';
import Chart from 'chart.js'; // Ensure correct import

const LineChart = ({ data, options }) => {
  useEffect(() => {
    const ctx = document.getElementById('interpolationChart').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });
  }, [data, options]);

  return (
    <canvas id="interpolationChart" width="600" height="400"></canvas>
  );
};

export default LineChart;
