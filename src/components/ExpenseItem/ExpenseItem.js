import React, { useState } from 'react';
import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.scss';

const ExpenseItem = ({expense}) => {

  const [title, setTitle] = useState(expense.title);

  const clickHandler = () => {
    setTitle('Updated');
  }

  return (
    <Card key={expense.id} className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={expense.date}/>
        <span>{ title }</span>
      </div>
      <div className='expense-item__price'>
        ${ expense.amount }
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  )
}

export default ExpenseItem