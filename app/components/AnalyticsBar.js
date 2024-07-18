import React, { useState, useEffect } from 'react';
import PieChart from './Charts/PieChart.js';

const AnalyticsBar = ({ prediction, probability, bulkResults }) => {
  const [filter, setFilter] = useState('all');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Filter results based on initial filter value ('all')
    setFilteredResults(bulkResults || []);
  }, [bulkResults]);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    const filteredData = bulkResults.filter((result) => {
      if (selectedFilter === 'all') return true;
      return result.prediction === parseInt(selectedFilter);
    });

    setFilteredResults(filteredData);
  };

  if (bulkResults && bulkResults.length > 0) {
    // Prepare data for the pie chart
    const pieChartData = {
      labels: ['Money laundering', 'Not money laundering'],
      datasets: [{
        data: [
          filteredResults.reduce((sum, result) => sum + (result.prediction === 1 ? 1 : 0), 0),
          filteredResults.reduce((sum, result) => sum + (result.prediction === 0 ? 1 : 0), 0),
        ],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
        borderWidth: 2,
        borderColor: '#FFFFFF',
      }],
    };

    return (
      <div className='outline outline-slate-600 rounded-lg p-3 m-3 mt-5 w-101 min-h-screen'>
        <h3 className='text-2xl mb-4'>Predictions:</h3>
        <div className='mb-4'>
          <label className='mr-2'>Filter:</label>
          <select value={filter} onChange={handleFilterChange} className='p-2 border rounded text-black'>
            <option value='all'>All</option>
            <option value='1'>Laundering</option>
            <option value='0'>Not Laundering</option>
          </select>
        </div>
        <div className='flex justify-between'>
          <div className='w-1/2 overflow-y-auto max-h-96 p-4 bg-gray-100 text-black rounded-lg'>
            {filteredResults.map((result, index) => (
              <div key={index} className='mb-4 p-2 bg-white rounded shadow'>
                <p className='text-xl'>Record {index + 1}</p>
                <p className='text-lg'>Prediction: {result.prediction}</p>
                <p className='text-lg'>Probability (Not Laundering): {result.probability[0].toFixed(3)}</p>
                <p className='text-lg'>Probability (Laundering): {result.probability[1].toFixed(3)}</p>
              </div>
            ))}
          </div>
          <div className='w-1/2 ml-20 '>
            <PieChart data={pieChartData} />
          </div>
        </div>
      </div>
    );
  }

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
        borderColor: '#FFFFFF',
        borderWidth: 2
      }
    ]
  };

  const options = {
    plugins: {
      glow: { enabled: true },
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
