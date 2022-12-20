import React from 'react'

const Expenses = ({expense}) => {
    
  return (
    <div className='gen'>
        <p>Expense: {expense.name}</p>
        <span>Date: {expense.date}</span>
    </div>
  )
}

export default Expenses;