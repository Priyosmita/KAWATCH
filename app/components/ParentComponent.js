import React, { useState } from 'react';
import TransactionBar from './TransactionBar';
import AnalyticsBar from './AnalyticsBar';

const ParentComponent = () => {
  const [prediction, setPrediction] = useState(null);
  const [probability, setProbability] = useState(null);

  // implementing here so that it is shown in analytics bar
  return (
    <div className="flex">
      <TransactionBar setPrediction={setPrediction} setProbability={setProbability} />  
      <AnalyticsBar prediction={prediction} probability={probability} />
    </div>
  );
};

export default ParentComponent;