// import React from 'react'

// const Expenses = () => {
//       return (
//             <div >
//                   <h2>Expenses</h2>
//                   <ul>
//                         <li>Expense 1</li>
//                         <li>Expense 2</li>
//                         <li>Expense 3</li>
//                   </ul>
//             </div>
//       )
// }

// export default Expenses


import React, {Suspense} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getExpenses } from '../data2exp'
import Expense from './Expense'

const Expenses = () => {
    let expenses = getExpenses()
  return (
    <div>
        <h4>Expenses</h4>
        <div className="e_container">
            <div className="e_con">
                {
                    expenses.map((expense)=>(<Link to={`/expenses/${expense.number}`} key={expense.number}><Expense invoice={expense}/></Link>))
                }
            </div>
            <div className="outlet">
                <Suspense fallback={<h4>loading details</h4>}>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
        
    </div>
  )
}

export default Expenses;    