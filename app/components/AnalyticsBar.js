// AnalyticsBar.js
import React from 'react';
import PieChart from './Charts/PieChart.js';

const AnalyticsBar = ({ prediction, probability }) => {
  if (!probability || probability.length < 2) {
    return <p className='outline outline-slate-600 rounded-lg p-3 m-3 mt-5 w-101 min-h-screen'>No prediction available</p>;
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
          <PieChart data={data} options={options} />
        </div>
      ) : (
        <p>No prediction available</p>
      )}
    </div>
  );
};

export default AnalyticsBar;