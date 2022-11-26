import React from 'react'
import Card from '../Card/Card';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.scss';

const NewExpense = (props) => {

  const saveExpenseDataHandler = (userInput) => {
    const enrichedUserInput = {
      ...userInput,
      id: Math.random().toString()
    };

    props.onAddExpense(enrichedUserInput);
  }

  return (
    <Card className='form-new_expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </Card>
  )
}

export default NewExpense