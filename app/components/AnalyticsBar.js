import React, { useState, useEffect } from 'react';
import PieChart from './Charts/PieChart.js';
import LineChart from './Charts/LineChart.js';

const AnalyticsBar = ({ prediction, probability, bulkResults }) => {
  const [filter, setFilter] = useState('all');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Initialize with all results
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

  const BulkTable = () => (
    <div className='w-full overflow-y-auto max-h-96 p-4 bg-gray-100 text-black rounded-lg'>
      <table className='w-full'>
        <thead className='sticky top-0 bg-white'>
          <tr>
            <th className='sticky top-0 bg-white z-10'>Record</th>
            <th className='sticky top-0 bg-white z-10'>Prediction</th>
            <th className='sticky top-0 bg-white z-10'>Positive Probability</th>
            <th className='sticky top-0 bg-white z-10'>Negative Probability</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((result, index) => (
            <tr key={index}>
              <td>{bulkResults.indexOf(result) + 1}</td>
              <td>{result.prediction === 0 ? "No Money Laundering" : "Laundering Detected"}</td>
              <td>{result.probability && result.probability.length > 1 ? result.probability[1].toFixed(3) : 'N/A'}</td>
              <td>{result.probability && result.probability.length > 0 ? result.probability[0].toFixed(3) : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (bulkResults && bulkResults.length > 0) {
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
        <div className='flex flex-col items-center'>
          <BulkTable />
          <div className='mt-10'>
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
          <h3 className='text-5xl'>Prediction: {prediction === 0 ? "No Money Laundering" : "Laundering Detected"}</h3>
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