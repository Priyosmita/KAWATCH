export async function fetchTransactions() {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/transactions');
      if (!response.ok) {
        throw new Error('Failed to fetch transactions');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  