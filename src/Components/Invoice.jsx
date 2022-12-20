import React from 'react'

const Invoice = ({invoice}) => {
    
  return (
    <div className='gen'>
        <p>Invoice: {invoice.name}</p>
        <span>Due: {invoice.due}</span>
    </div>
  )
}

export default Invoice