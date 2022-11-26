import React from 'react'
import './ExpenseDate.scss';

const ExpenseDate = ({date}) => {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className='expense-item__date'>
      <div className='expense-item__date__month'>{ month }</div>
      <div className='expense-item__date__year'>{ year }</div>
      <div className='expense-item__date__day'>{ day }</div>
    </div>
  )
}

export default ExpenseDate