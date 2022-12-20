import React from 'react'
import { useParams  } from 'react-router-dom'
import { getExpenseById } from '../data2exp';

const ExpenseData = () => {
    const params = useParams()
    let expenseId = params.expenseId;

    let expense = getExpenseById(parseInt(expenseId, 10))
    console.log(expense)
  return (
    <div>
        <h6>ExpenseData</h6>
        <div className='data'>
            <span>Expense name: {expense.name}</span>
            <span>Expense number: {expense.number}</span>
            <span>Due date: {expense.due}</span>
            <span>Amount: {expense.amount}</span>
        </div>

    </div>
  )
}

export default ExpenseData;

