import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const  ErrorPage = lazy(()=> import('./Components/ErrorPage'));
const Home = lazy(()=>import('./Components/Home'));
const InvoiceData = lazy(()=>import('./Components/InvoiceData'));
const Invoices= lazy(()=> import('./Components/Invoices'));
const  Expenses = lazy(()=>import('./Components/Expenses'));
const ExpenseData = lazy(()=>import('./Components/ExpenseData')); 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    
      <Routes>
        <Route path='/' element={<App />}>
          <Route home element={<Home/>}/>
          <Route path='*' element={<ErrorPage/>}/>
          <Route path='expenses' element={<Expenses/>}/>
            <Route path=':expenseId' element={<ExpenseData/>}/> 
          <Route path='invoices' element={<Invoices/>}>
            <Route path=':invoiceId' element={<InvoiceData/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
    
  </React.StrictMode>
);

