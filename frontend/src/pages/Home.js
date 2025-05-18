import React, { useState, useEffect } from 'react';
import axios from '../axios';

const Home = () => {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');
  const [error, setError] = useState('');

  // Define the function once at the top
  const fetchTransactions = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get('/transactions', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTransactions(res.data);
    } catch (error) {
      console.error('Error fetching transactions:', error);
      setError('Failed to fetch transactions');
    }
  };

  // Call it inside useEffect
  useEffect(() => {
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      await axios.post(
        '/transactions',
        { amount, type, category, note },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAmount('');
      setType('income');
      setCategory('');
      setNote('');
      fetchTransactions(); // Now it works
    } catch (error) {
      console.error('Error adding transaction:', error);
      setError('Failed to add transaction');
    }
  };

  return (
    <div>
      <h2>Transactions</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          type="text"
          placeholder="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button type="submit">Add Transaction</button>
      </form>

      <h3>Transaction List</h3>
      <ul>
        {transactions.map((txn) => (
          <li key={txn._id}>
            {txn.amount} - {txn.type} - {txn.category} - {txn.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;