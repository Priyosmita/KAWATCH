import React from 'react';
import Header from '../components/Header';
import AnalyticsBar from '../components/AnalyticsBar';
import TransactionBar from '../components/TransactionBar';
import ParentComponent from '../components/ParentComponent';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className='backgroundGradient min-h-screen flex flex-row justify-between pt-20 flex flex-row justify-between'> 
        {/* Added padding-top to create space for the header */}
        <ParentComponent/>
      </div>
    </>
  );
};

export default Dashboard;