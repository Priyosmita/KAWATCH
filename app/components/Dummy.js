import { useEffect, useState } from 'react';
import { fetchTransactions } from '../services/api'; // Adjust the relative path if needed

const Dummy = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTransactions();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='min-h-screen bg-slate-600'>
      <h1>Dashboard</h1>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.amount} {transaction.currency} - {transaction.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dummy;
