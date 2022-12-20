import React from 'react'
import { useParams  } from 'react-router-dom'
import { getInvoiceById } from '../data';

const InvoiceData = () => {
    const params = useParams()
    let invoiceId = params.invoiceId;

    let invoice = getInvoiceById(parseInt(invoiceId, 10))
    console.log(invoice)
  return (
    <div>
        <h6>InvoiceData</h6>
        <div className='data'>
            <span>Invoice name: {invoice.name}</span>
            <span>Invoice number: {invoice.number}</span>
            <span>Due date: {invoice.due}</span>
            <span>Amount: {invoice.amount}</span>
        </div>

    </div>
  )
}

export default InvoiceData;

