'use client';
import React, { useState } from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Dashboard from '../Dashboard';
import './manual.css';

const Manual = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [showDashboard, setShowDashboard] = useState(false);

  const openModal = (imageSrc) => {
    setCurrentImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage('');
  };

  const handleDashboardClick = () => {
    setShowDashboard(true); // Set the state to show the Dashboard component
  };

  return (
    <>
      <div className='backgroundGradient min-h-screen overflow-hidden'>
        <Header onDashboardClick={handleDashboardClick} />
        {showDashboard ? (
          <Dashboard /> // Render the Dashboard component if showDashboard is true
        ) : (
          <>
            <div className='flex justify-center text-white text-7xl mt-32'>User Manual</div>
            <div className='flex justify-center'>
              <div className='flex flex-col ml-8 mt-12 outline outline-slate-600 rounded-lg customWidth mr-8 mb-10'>
                {/* Content */}
                <div className='flex flex-row text-white gap-x-20 mt-10'>
                  <div className='flex-shrink-0'>
                    <img
                      src='/assets/dualmode.png'
                      className='ml-10 cursor-pointer imgSize'
                      onClick={() => openModal('/assets/dualmode.png')}
                      alt='Column guide'
                    />
                  </div>
                  <div className='mr-20 flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold'>Dual-mode prediction</h2>
                    <h2 className='mt-5'>
                      The dual-mode prediction feature enables the prediction of money laundering activities for either a single transaction or multiple transactions uploaded via a .csv file. Users can switch between these modes using the drop-down menu.
                    </h2>
                  </div>
                </div>
                <hr className='mt-8'></hr>
                <div className='flex flex-row text-white gap-x-20 mt-10'>
                  <div className='flex-shrink-0'>
                    <img
                      src='/assets/excel.png'
                      className='ml-10 cursor-pointer imgSize'
                      onClick={() => openModal('/assets/excel.png')}
                      alt='Column guide'
                    />
                  </div>
                  <div className='mr-20 flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold'>CSV preparation for Bulk-Prediction</h2>
                    <h2>
                      For precise and accurate predictions of money laundering activities, it is essential that your CSV file includes the following columns with the exact specified column names, in addition to any other required columns:
                    </h2>
                    <ul className='list-disc list-inside text-white'>
                      <li>Amount</li>
                      <li>Payment_currency</li>
                      <li>Received_currency</li>
                      <li>Sender_bank_location</li>
                      <li>Receiver_bank_location</li>
                      <li>Payment_type</li>
                    </ul>
                  </div>
                </div>
                <hr className='mt-8'></hr>
                <div className='flex flex-row text-white gap-x-20 mt-10'>
                  <div className='flex-shrink-0'>
                    <img
                      src='/assets/blockchain.png'
                      className='ml-10 cursor-pointer imgSize'
                      onClick={() => openModal('/assets/blockchain.png')}
                      alt='Column guide'
                    />
                  </div>
                  <div className='mr-20 flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold'>Data uploading on Blockchain</h2>
                    <h2 className='mt-5'>
                      After completing the standard login process, data can be uploaded to the Ethereum blockchain via smart contract. Please note that a gas fee will be required to comply with blockchain protocols.
                    </h2>
                  </div>
                </div>
                <hr className='mt-8'></hr>
                <div className='flex flex-row text-white gap-x-20 mt-10'>
                  <div className='flex-shrink-0'>
                    <img
                      src='/assets/piechart.png'
                      className='ml-10 cursor-pointer imgSize'
                      onClick={() => openModal('/assets/piechart.png')}
                      alt='Column guide'
                    />
                  </div>
                  <div className='mr-20 flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold'>Pie Chart: Money Laundering vs. No Money Laundering</h2>
                    <h2 className='mt-5'>
                      The Pie Chart visually represents the ratio of transactions flagged for money laundering versus those not flagged. This helps users quickly gauge the proportion of suspicious transactions in their data for both modes.
                    </h2>
                  </div>
                </div>
                <hr className='mt-8'></hr>
                <div className='flex flex-row text-white gap-x-20 mt-10'>
                  <div className='flex-shrink-0'>
                    <img
                      src='/assets/linechart.png'
                      className='ml-10 cursor-pointer imgSize'
                      onClick={() => openModal('/assets/linechart.png')}
                      alt='Column guide'
                    />
                  </div>
                  <div className='mr-20 flex flex-col justify-center'>
                    <h2 className='text-3xl font-bold'>Line Chart: Probability vs. Record ID</h2>
                    <h2 className='mt-5'>
                      The Line Chart plots the probability of money laundering against the record ID for each transaction. This allows users to see the distribution of probabilities across all transactions in the dataset.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Manual;





