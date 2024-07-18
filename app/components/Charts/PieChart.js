import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

// Custom plugin for the glow effect
// const glowPlugin = {
//   id: 'glow',
//   beforeDraw: function (chart) {
//     const ctx = chart.ctx;
//     ctx.save();
//     ctx.shadowColor = 'rgba(255, 99, 132, 0.8)'; // Adjust the shadow color
//     ctx.shadowBlur = 20; // Adjust the blur radius
//     ctx.shadowOffsetX = 0;
//     ctx.shadowOffsetY = 0;
//   },
//   afterDraw: function (chart) {
//     chart.ctx.restore();
//   }
// };

const PieChart = ({ data, options }) => {
  return (
    <div className="pie-chart-container" style={{ position: 'relative', height: '400px', width: '400px' }}>
      <Pie data={data} options={options}/>  {/* plugins={[glowPlugin]} /> */}
    </div>
  );
};

export default PieChart;