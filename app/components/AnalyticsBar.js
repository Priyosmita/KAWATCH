import React, { useState, useEffect } from 'react';
import PieChart from './Charts/PieChart.js';
import LineChart from './Charts/LineChart.js';
import ScatterChart from './Charts/ScatterChart.js';
import BarChart from './Charts/BarChart.js';
import '../globals.css';
import web3 from '../utils/web3';
import transactionStorage from '../utils/transactionStorage';

const AnalyticsBar = ({ prediction, probability, bulkResults }) => {
  const [filter, setFilter] = useState('all');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    // Initialize with all results and add sequential record IDs
    const resultsWithIds = bulkResults.map((result, index) => ({
      ...result,
      recordId: index + 1,
    }));
    setFilteredResults(resultsWithIds);
  }, [bulkResults]);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    const resultsWithIds = bulkResults.map((result, index) => ({
      ...result,
      recordId: index + 1,
    }));

    const filteredData = resultsWithIds.filter((result) => {
      if (selectedFilter === 'all') return true;
      return result.prediction === parseInt(selectedFilter);
    });

    setFilteredResults(filteredData);
  };

  const uploadToBlockchain = async (result) => {
    const accounts = await web3.eth.getAccounts();
    await transactionStorage.methods.storeTransaction(
      result.prediction === 0 ? "No Money Laundering" : "Laundering Detected",
      result.probability && result.probability.length > 1 ? result.probability[1].toFixed(3) : 'N/A',
      result.probability && result.probability.length > 0 ? result.probability[0].toFixed(3) : 'N/A'
    ).send({ from: accounts[0] });
  };

  const BulkTable = () => (
    <div className='mt-8 tableHeight overflow-y-auto w-full outline '>
      <table className='w-full text-center'>
        <thead className='sticky top-0'>
          <tr>
            <th className='p-2 border-b'>Record ID</th> {/* Updated header */}
            <th className='p-2 border-b'>Prediction</th>
            <th className='p-2 border-b'>Negative Probability</th>
            <th className='p-2 border-b'>Positive Probability</th>
            <th className='p-2 border-b'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((result) => (
            <tr key={result.recordId}> {/* Updated key */}
              <td className='text-center p-2 border-b-2'>{result.recordId}</td> {/* Display sequential ID */}
              <td className='text-center p-2 border-b-2'>{result.prediction === 0 ? "No Money Laundering" : "Laundering Detected"}</td>
              <td className='text-center p-2 border-b-2'>{result.probability && result.probability.length > 1 ? result.probability[1].toFixed(3) : 'N/A'}</td>
              <td className='text-center p-2 border-b-2'>{result.probability && result.probability.length > 0 ? result.probability[0].toFixed(3) : 'N/A'}</td>
              <td className='text-center p-2 border-b-2'>
                {/* <button onClick={() => uploadToBlockchain(result)} className='px-4 py-2 bg-blue-500 rounded-full text-white hover:bg-[#94d5f8] hover:text-black '>Upload to Blockchain</button> */}
                <button onClick={() => uploadToBlockchain(result)}  type="button" class="mt- text-gray-900 bg-gray-100 hover:bg-gray-200 hover:scale-110 transition duration-150 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 me-2 mb-2">
                  <svg class="w-4 h-4 me-2 -ms-1 text-[#626890]" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="ethereum" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M311.9 260.8L160 353.6 8 260.8 160 0l151.9 260.8zM160 383.4L8 290.6 160 512l152-221.4-152 92.8z"></path></svg>
                  Upload to Blockchain
                </button>
              </td>
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
        <h3 className='text-5xl mb-4 mt-3'>Predictions:</h3>
        <div className='mb-4'>
          <label className='mr-2 text-2xl'>Filter :</label>
          <div className="relative inline-block w-40 h-12">
            <select
              value={filter}
              onChange={handleFilterChange}
              className="absolute inset-0 opacity-0 text-white bg-transparent peer w-full h-full p-2 border rounded appearance-none"
            >
              <option className="bg-white text-black" value="all">All</option>
              <option className="bg-white text-black" value="1">Laundering Detected</option>
              <option className="bg-white text-black" value="0">No Money Laundering</option>
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
        {bulkResults && bulkResults.length > 0 && (
          <div className='mt-16 h-80'>
            <LineChart bulkResults={bulkResults} />
          </div>
        )}
        {bulkResults && bulkResults.length > 0 && (
          <div className='mt-11 h-80'>
            <ScatterChart bulkResults={bulkResults} />
          </div>
        )}
        {bulkResults && bulkResults.length > 0 && (
          <div className='mt-11 h-80'>
            <BarChart bulkResults={bulkResults} />
          </div>
        )}
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
          <h3 className='text-5xl mt-3 mb-3'>Prediction: {prediction === 0 ? "No Money Laundering" : "Laundering Detected"}</h3>
          <p className='text-3xl mb-3'>Money laundering: {probability[1].toFixed(3)}</p>
          <p className='text-3xl mb-3'>Not money laundering: {probability[0].toFixed(3)}</p>
          <div className='flex justify-center'>
            <PieChart data={data} options={options} />
          </div>
        </div>
      ) : (
        <div className='text-5xl'>No prediction available</div>
      )}
    </div>
  );
};

export default AnalyticsBar;
