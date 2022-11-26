import React from 'react'
import './ExpenseList.scss';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = ({expenses}) => {

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found.</h2>
  }
  
  return (
    <ul className='expenses-list'>
      {expenses.map(expense => {
        return <ExpenseItem 
          key={expense.id} 
          expense={expense} />
      })}
    </ul>
  )
}

export default ExpenseList