import React from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.scss';

const ExpenseItem = ({expense}) => {
  return (
    <Card key={expense.id} className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={expense.date}/>
        <span>{ expense.title }</span>
      </div>
      <div className='expense-item__price'>
        ${ expense.amount }
      </div>
    </Card>
  )
}

export default ExpenseItem