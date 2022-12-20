import React, {Suspense} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getInvoices } from '../data'
import Invoice from './Invoice'

const Invoices = () => {
    let invoices = getInvoices()
  return (
    <div>
        <h4>Invoices</h4>
        <div className="e_container">
            <div className="e_con">
                {
                    invoices.map((invoice)=>(<Link to={`/invoices/${invoice.number}`} key={invoice.number}><Invoice invoice={invoice}/></Link>))
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

export default Invoices;    