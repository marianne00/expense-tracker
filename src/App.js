import { useState } from 'react';
import './App.scss';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: 'e5',
      title: 'Bday Needs',
      amount: 4500,
      date: new Date(2019, 2, 26),
    },
    {
      id: 'e6',
      title: 'Kitchen Needs',
      amount: 570,
      date: new Date(2020, 2, 26),
    },
    {
      id: 'e7',
      title: 'DSLR Cam',
      amount: 2134,
      date: new Date(2019, 7, 6),
    },
    {
      id: 'e8',
      title: 'Tumbler',
      amount: 45,
      date: new Date(2022, 5, 13),
    },
    {
      id: 'e9',
      title: 'Weighing Scale',
      amount: 200,
      date: new Date(2022, 7, 30),
    },
    {
      id: 'e10',
      title: 'Wayfarers',
      amount: 240,
      date: new Date(2021, 8, 1),
    }
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
