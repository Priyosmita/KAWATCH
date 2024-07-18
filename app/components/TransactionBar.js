import React, { useState } from 'react';
import axios from 'axios';
import '../globals.css';

const TransactionBar = ({ setPrediction, setProbability, setBulkResults }) => {
  const [amount, setAmount] = useState('');
  const [paymentCurrency, setPaymentCurrency] = useState('');
  const [receivedCurrency, setReceivedCurrency] = useState('');
  const [senderBankLocation, setSenderBankLocation] = useState('');
  const [receiverBankLocation, setReceiverBankLocation] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [predictionType, setPredictionType] = useState('Single Transaction');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      Amount: parseFloat(amount),
      Payment_currency: paymentCurrency,
      Received_currency: receivedCurrency,
      Sender_bank_location: senderBankLocation,
      Receiver_bank_location: receiverBankLocation,
      Payment_type: paymentType
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', data);
      setPrediction(response.data.prediction);
      setProbability(response.data.probability);
      setBulkResults([]); // Clear bulk results
    } catch (error) {
      console.error('Error making prediction:', error);
    }
  };

  const handleBulkSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', e.target.file.files[0]);

    try {
      const response = await axios.post('http://127.0.0.1:5000/bulk_predict', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setBulkResults(response.data);
      setPrediction(null); // Clear single prediction
      setProbability(null); // Clear single probability
    } catch (error) {
      console.error('Error making bulk prediction:', error);
    }
  };

  return (
    <div className='outline outline-slate-600 rounded-lg p-6 ml-2 mr-1 mt-5 mb-4 w-full max-w-md text-lg'>
      <div className='mb-12 text-2xl'>
        <p>Prediction Type</p>
        <select
          className='w-full p-2 border border-gray-400 rounded text-black'
          value={predictionType}
          onChange={(e) => setPredictionType(e.target.value)}
        >
          <option value="Single Transaction">Single Transaction</option>
          <option value="Bulk Upload">Bulk Upload</option>
        </select>
      </div>

      {predictionType === 'Single Transaction' ? (
        <form onSubmit={handleSubmit}>
          <p>Enter Amount</p>
          <div className='mb-8'>
            <input
              className='w-full p-2 border border-gray-400 rounded text-black'
              type='number'
              placeholder='Amount'
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className='mb-8'>
            <p>Select Payment Currency</p>
            <select
              className='w-full p-2 border border-gray-400 rounded text-black'
              value={paymentCurrency}
              onChange={(e) => setPaymentCurrency(e.target.value)}
            >
              <option value="">Select Payment Currency</option>
              <option value="UK pounds">UK Pounds</option>
              <option value="US dollar">US Dollar</option>
              <option value="Indian rupee">Indian Rupee</option>
              <option value="Albanian lek">Albanian Lek</option>
              <option value="Swiss franc">Swiss Franc</option>
              <option value="Pakistani rupee">Pakistani Rupee</option>
              <option value="Naira">Nigerian Naira</option>
              <option value="Yen">Japanese Yen</option>
              <option value="Euro">Euro</option>
              <option value="Dirham">Arabiam Dirham</option>
              <option value="Mexican Peso">Mexican Peso</option>
              <option value="Turkish lira">Turkish Lira</option>
              <option value="Moroccan dirham">Moroccan Dirham</option>
            </select>
          </div>
          <div className='mb-8'>
            <p>Select Received Currency</p>
            <select
              className='w-full p-2 border border-gray-400 rounded text-black'
              value={receivedCurrency}
              onChange={(e) => setReceivedCurrency(e.target.value)}
            >
              <option value="">Select Received Currency</option>
              <option value="UK pounds">UK Pounds</option>
              <option value="US dollar">US Dollar</option>
              <option value="Indian rupee">Indian Rupee</option>
              <option value="Albanian lek">Albanian Lek</option>
              <option value="Swiss franc">Swiss Franc</option>
              <option value="Pakistani rupee">Pakistani Rupee</option>
              <option value="Naira">Nigerian Naira</option>
              <option value="Yen">Japanese Yen</option>
              <option value="Euro">Euro</option>
              <option value="Dirham">Arabiam Dirham</option>
              <option value="Mexican Peso">Mexican Peso</option>
              <option value="Turkish lira">Turkish Lira</option>
              <option value="Moroccan dirham">Moroccan Dirham</option>
            </select>
          </div>
          <div className='mb-8'>
            <p>Select Sender Bank Location</p>
            <select
              className='w-full p-2 border border-gray-400 rounded text-black'
              value={senderBankLocation}
              placeholder='Sender Bank Location'
              onChange={(e) => setSenderBankLocation(e.target.value)}
            >
              <option value="">Select Sender Bank Location</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
              <option value="Albania">Albania</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Japan">Japan</option>
              <option value="Spain">Spain</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Mexico">Mexico</option>
              <option value="Austria">Austria</option>
              <option value="Germany">Germany</option>
              <option value="Turkey">Turkey</option>
              <option value="India">India</option>
              <option value="Morocco">Morocco</option>
              <option value="Netherlands">Netherlands</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className='mb-8'>
            <p>Select Receiver Bank Location</p>
            <select
              className='w-full p-2 border border-gray-400 rounded text-black'
              placeholder='Receiver Bank Location'
              value={receiverBankLocation}
              onChange={(e) => setReceiverBankLocation(e.target.value)}
            >
              <option value="">Select Receiver Bank Location</option>
              <option value="UK">UK</option>
              <option value="UAE">UAE</option>
              <option value="Albania">Albania</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Japan">Japan</option>
              <option value="Spain">Spain</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Mexico">Mexico</option>
              <option value="Austria">Austria</option>
              <option value="Germany">Germany</option>
              <option value="Turkey">Turkey</option>
              <option value="India">India</option>
              <option value="Morocco">Morocco</option>
              <option value="Netherlands">Netherlands</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div className='mb-8'>
            <p>Select Payment Type</p>
            <select
              className='w-full p-2 border border-gray-400 rounded text-black'
              value={paymentType}
              onChange={(e) => setPaymentType(e.target.value)}
            >
              <option value="">Select Payment Type</option>
              <option value="Cash Deposit">Cash Deposit</option>
              <option value="Cross-border">Cross-border</option>
              <option value="Cheque">Cheque</option>
              <option value="ACH">ACH</option>
              <option value="Credit card">Credit card</option>
              <option value="Debit card">Debit card</option>
              <option value="Cash Withdrawal">Cash Withdrawal</option>
            </select>
          </div>
          <button
            type='submit'
            className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Predict
          </button>
        </form>
      ) : (
        <form onSubmit={handleBulkSubmit}>
          <div className='mb-8'>
            <p>Upload CSV</p>
            <input
              className='w-full p-2 border border-gray-400 rounded text-black'
              type='file'
              name='file'
              accept='.csv'
            />
          </div>
          <button
            type='submit'
            className='w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700'
          >
            Upload and Predict
          </button>
        </form>
      )}
    </div>
  );
};

export default TransactionBar;