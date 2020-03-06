import React from 'react'
import "./App.scss"

import Header from "./components/header/Header"
import Balance from "./components/balance/Balance";
import IncomeAndExpenses from "./components/income-expenses/IncomeAndExpenses"
import TransactionBody from './components/transaction-body/TransactionBody';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">

      <Balance />
      <IncomeAndExpenses />
      <TransactionBody />
      </div>
    </div>
  )
}

export default App;
