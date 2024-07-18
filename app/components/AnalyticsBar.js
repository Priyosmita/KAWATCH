import React, { useState, useEffect } from 'react';
import PieChart from './Charts/PieChart.js';
import LineChart from './Charts/LineChart.js';
import '../globals.css';

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
    <div className='mt-8 max-h-80 overflow-y-auto w-full outline'>
      <table className='w-full text-center'>
        <thead className='sticky top-0'>
          <tr>
            <th className='p-2 border-b'>Record</th>
            <th className='p-2 border-b'>Prediction</th>
            <th className='p-2 border-b'>Negative Probability</th>
            <th className='p-2 border-b'>Positive Probability</th>
          </tr>
        </thead>
        <tbody>
          {bulkResults.map((result, index) => (
            <tr key={index}>
              <td className='text-center p-2 border-b-2'>{bulkResults.indexOf(result) + 1}</td>
              <td className='text-center p-2 border-b-2'>{result.prediction === 0 ? "No Money Laundering" : "Laundering Detected"}</td>
              <td className='text-center p-2 border-b-2'>{result.probability && result.probability.length > 1 ? result.probability[1].toFixed(3) : 'N/A'}</td>
              <td className='text-center p-2 border-b-2'>{result.probability && result.probability.length > 0 ? result.probability[0].toFixed(3) : 'N/A'}</td>
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
        <h3 className='text-5xl mb-4'>Predictions:</h3>
        <div className='mb-4'>
          <label className='mr-2 text-2xl'>Filter :</label>
          <div className="relative inline-block w-40 h-12">
            <select
              value={filter}
              onChange={handleFilterChange}
              className="absolute inset-0 opacity-0 text-white bg-transparent peer w-full h-full p-2 border rounded appearance-none"
            >
              <option className="bg-white text-black" value="all">All</option>
              <option className="bg-white text-black" value="1">Laundering</option>
              <option className="bg-white text-black" value="0">Not Laundering</option>
            </select>
            <div className="pointer-events-none p-2 border rounded bg-transparent text-white flex items-center justify-between w-full h-full">
              <span>
                {filter === 'all' ? 'All' : filter === '1' ? 'Laundering' : 'Not Laundering'}
              </span>
              <svg
                className="w-4 h-4"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fillRule="evenodd" d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3A1 1 0 0110 12z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
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
    return <p className='text-3xl outline outline-slate-600 rounded-lg p-3 m-3 mt-5 w-101 min-h-screen'>No prediction available.</p>;
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
        <div className='text-5xl'>No prediction available</div>
      )}
    </div>
  );
};

export default AnalyticsBar;