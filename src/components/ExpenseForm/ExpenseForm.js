import React, { useState } from 'react'

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const [formVisibility, setFormVisibility] = useState(false);

  if (!formVisibility) {
    return <button onClick={() => setFormVisibility(true)}>Add Expense</button>
  }

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  }

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    })
  }

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: e.target.value };
    })
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    // pass child state to parent
    props.onSaveExpenseData({
      title: userInput.title,
      amount: +userInput.amount,
      date: new Date(userInput.date)
    });
    
    setUserInput({
      title: '',
      amount: '',
      date: ''
    });

    setFormVisibility(false);
  }

  return (
    formVisibility && <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input 
            type="text" 
            value={userInput.title}
            onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input 
            type="number" 
            value={userInput.amount}
            min="1" 
            step="1" 
            onChange={amountChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input 
            type="date" 
            value={userInput.date.toString()}
            min="2022-11-20" 
            max="2022-12-31"
            onChange={dateChangeHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button onClick={() => setFormVisibility(false)}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm