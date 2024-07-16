import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const AnalyticsBar = ({ prediction, probability }) => {
  // Custom plugin for the glow effect
  const glowPlugin = {
    id: 'glow',
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      ctx.save();
      ctx.filter = 'drop-shadow(10px 10px 10px rgba(255, 99, 132, 0.8))'; // Adjust the shadow properties as needed
      chart.update();
    },
    afterDraw: function (chart) {
      chart.ctx.restore();
    }
  };

  if (!probability || probability.length < 2) {
    return <p>No prediction available</p>;
  }

  const data = {
    labels: ['Money laundering', 'Not money laundering'],
    datasets: [
      {
        label: 'Probability',
        data: [probability[1], probability[0]],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderColor: '#FFFFFF', // Border color to make edges clear
        borderWidth: 2
      }
    ]
  };

  const options = {
    plugins: {
      glow: { enabled: true }, // Enable the glow plugin
    },
  };

  return (
    <div className='outline outline-slate-600 rounded-lg p-3 m-3 mt-5 w-101 min-h-screen'>
      {prediction !== null && probability !== null ? (
        <div>
          <h3 className='text-5xl'>Prediction: {prediction}</h3>
          <p className='text-3xl'>Money laundering: {probability[1].toFixed(3)}</p>
          <p className='text-3xl'>Not money laundering: {probability[0].toFixed(3)}</p>
          <div className="pie-chart-container" style={{ position: 'relative', height: '400px', width: '400px' }}>
            <Pie data={data} options={options} plugins={[glowPlugin]} />
          </div>
        </div>
      ) : (
        <p>No prediction available</p>
      )}
    </div>
  );
};

export default AnalyticsBar;