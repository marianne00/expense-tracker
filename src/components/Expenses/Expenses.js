import React, { useState } from 'react'
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseList from '../ExpenseList/ExpenseList';
import ExpensesChart from '../ExpensesChart/ExpensesChart';

const Expenses = ({expenses}) => {

  const [filter, setFilter] = useState('2020');

  const saveFilterChangeHandler = (passedFilter) => {
    setFilter(passedFilter);
  }

  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === parseInt(filter));

  

  return (
    <div>
      <ExpenseFilter
        selectedFilter={filter} 
        onFilterChange={saveFilterChangeHandler} />
      <div className='expenses-list'>
        <ExpensesChart
          expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </div>
    </div>
  )
}

export default Expenses