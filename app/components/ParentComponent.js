import React, { useState } from 'react';
import TransactionBar from './TransactionBar';
import AnalyticsBar from './AnalyticsBar';

const ParentComponent = () => {
  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);
  const [bulkResults, setBulkResults] = useState([]);

  return (
    <div className='flex flex-row justify-between overflow-hidden'>
      <TransactionBar
        setPrediction={setPrediction}
        setProbability={setProbability}
        setBulkResults={setBulkResults}
      />
      <AnalyticsBar
        prediction={prediction}
        probability={probability}
        bulkResults={bulkResults}
      />
    </div>
  );
};

export default ParentComponent;